import { injectable } from 'inversify'
import CryptoJS from 'crypto-js'
import { IRepository } from '../../../application/port/repository.interface'
import { IQuery } from '../../../application/port/query.interface'
import { ILogger } from '../../../utils/custom.logger'
import { ConflictException } from '../../../application/domain/exception/conflict.exception'
import { RepositoryException } from '../../../application/domain/exception/repository.exception'
import { ValidationException } from '../../../application/domain/exception/validation.exception'
import { Entity } from '../../../application/domain/model/entity'
import { IEntityMapper } from '../../port/entity.mapper.interface'
import { Query } from '../query/query'

/**
 * Base implementation of the repository.
 *
 * @implements {IRepository<T>}
 * @template <T extends Entity, TModel extends Document>
 */
@injectable()
export abstract class BaseRepository<T extends Entity, TModel> implements IRepository<T> {

    protected constructor(
        readonly Model: any,
        readonly mapper: IEntityMapper<T, TModel>,
        readonly logger: ILogger
    ) {
    }

    public async create(item: T): Promise<T | undefined> {
        item.sha512 = await BaseRepository.generateSha512(item.concatToString())
        const itemNew: TModel = this.mapper.transform(item)
        return new Promise<T | undefined>((resolve, reject) => {
            this.Model.create(itemNew)
                .then((result) => {
                    if (!result) return resolve(undefined)
                    return resolve(this.mapper.transform(result))
                })
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    public find(query: IQuery): Promise<Array<T>> {
        const q: any = query.toJSON()
        return new Promise<Array<T>>((resolve, reject) => {
            this.Model.find(q.filters)
                .select(q.fields)
                .sort(q.ordination)
                .skip(Number((q.pagination.limit * q.pagination.page) - q.pagination.limit))
                .limit(Number(q.pagination.limit))
                .exec() // execute query
                .then((result: Array<TModel>) => resolve(result.map(item => this.mapper.transform(item))))
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    public findOne(query: IQuery): Promise<T | undefined> {
        const q: any = query.toJSON()
        return new Promise<T | undefined>((resolve, reject) => {
            this.Model.findOne(q.filters)
                .select(q.fields)
                .exec()
                .then((result: TModel) => {
                    if (!result) return resolve(undefined)
                    return resolve(this.mapper.transform(result))
                })
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    public update(item: T): Promise<T | undefined> {
        const itemUp: any = this.mapper.transform(item)
        return new Promise<T | undefined>((resolve, reject) => {
            this.Model.findOneAndUpdate({ _id: itemUp.id }, itemUp, { new: true })
                .exec()
                .then((result: TModel) => {
                    if (!result) return resolve(undefined)
                    return resolve(this.mapper.transform(result))
                })
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    public delete(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.Model.findOneAndDelete({ _id: id })
                .exec()
                .then((result: TModel) => resolve(!!result))
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    public count(query?: IQuery): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.Model.countDocuments(query ? query.toJSON().filters : {})
                .exec()
                .then(result => resolve(Number(result)))
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    protected mongoDBErrorListener(err: any): ValidationException | ConflictException | RepositoryException | undefined {
        if (err && err.name) {
            if (err.name === 'ValidationError') {
                return new ValidationException('Required fields were not provided!', err.message)
            } else if (err.name === 'CastError' || new RegExp(/(invalid format)/i).test(err)) {
                return new ValidationException('The given ID is in invalid format.',
                    'A 12 bytes hexadecimal ID similar to this')
            } else if (err.name === 'MongoError' && err.code === 11000) {
                return new ConflictException('A registration with the same unique data already exists!')
            } else if (err.name === 'ObjectParameterError') {
                return new ValidationException('Invalid query parameters!')
            }
        }
        return new RepositoryException('An internal error has occurred in the database!',
            'Please try again later...')
    }

    public async checkExists(item: T): Promise<boolean> {
        const sha512 = await BaseRepository.generateSha512(item.concatToString())
        const query: Query = new Query()
            .fromJSON({ filters: { _id: { $ne: item.id }, sha512 } })
        return new Promise<boolean>((resolve, reject) => {
            this.findOne(query)
                .then((result: T | undefined) => resolve(!!result))
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }

    /**
     * Generate the SHA512 hash for any string
     * @param message
     */
    private static async generateSha512(message: string): Promise<string> {
        try {
            const hash = CryptoJS.SHA512(message).toString()
            return Promise.resolve(hash)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}
