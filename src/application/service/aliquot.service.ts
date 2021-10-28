import { inject, injectable } from 'inversify'
import HttpStatus from 'http-status-codes'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { IAliquotService } from '../port/aliquot.service'
import { Aliquot } from '../domain/model/aliquot'
import { AliquotValidator } from '../domain/validator/create.aliquot.validator'
import { IAliquotRepository } from '../port/aliquot.repository'
import { ConflictException } from '../../application/domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { StatusSuccess } from '../../application/domain/model/status.success'
import { StatusError } from '../../application/domain/model/status.error'
import { MultiStatus } from '../../application/domain/model/multi.status'
import { ValidationException } from '../../application/domain/exception/validation.exception'

@injectable()
export class AliquotService implements IAliquotService {
    constructor(
        @inject(Identifier.ALIQUOT_REPOSITORY) readonly _repository: IAliquotRepository
    ) {

    }

    public async add(item: Aliquot): Promise<Aliquot | undefined> {
        AliquotValidator.validate(item)

        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.stringsException('Aliquot').ALREADY_REGISTERED)

        return this._repository.create(item)
    }

    public async addMultiples(items: | Array<Aliquot>): Promise<MultiStatus<Aliquot>> {
        const statusSuccessArr: Array<StatusSuccess<Aliquot>> = new Array<StatusSuccess<Aliquot>>()
        const statusErrorArr: Array<StatusError<Aliquot>> = new Array<StatusError<Aliquot>>()

        for (const item of items) {
            try {
                const aliquot: Aliquot | undefined = await this.add(item)
                if (aliquot) {
                    statusSuccessArr.push(new StatusSuccess<Aliquot>(HttpStatus.CREATED, aliquot))
                }
            } catch (err: any) {
                let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR
                if (err instanceof ValidationException) statusCode = HttpStatus.BAD_REQUEST
                if (err instanceof ConflictException) statusCode = HttpStatus.CONFLICT
                statusErrorArr.push(new StatusError<Aliquot>(statusCode, err.message, err.description, item))
            }
        }

        const multiStatus: MultiStatus<Aliquot> = new MultiStatus<Aliquot>()
        multiStatus.success = statusSuccessArr
        multiStatus.error = statusErrorArr

        return Promise.resolve(multiStatus)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public async getById(id: string, query: IQuery): Promise<Aliquot | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public async update(item: Aliquot): Promise<Aliquot | undefined> {
        AliquotValidator.validate(item)

        const exists: boolean = await this._repository.checkExists(item)
        if (!exists) return Promise.resolve(undefined)

        return this._repository.update(item)
    }

    public getAll(query: IQuery): Promise<Array<Aliquot>> {
        return this._repository.find(query)
    }

    public count(query?: IQuery): Promise<number> {
        return this._repository.count(query)
    }
}
