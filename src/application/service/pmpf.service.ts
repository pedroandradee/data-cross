import { inject, injectable } from 'inversify'
import HttpStatus from 'http-status-codes'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { IPMPFService } from '../port/pmpf.service'
import { PMPF } from '../domain/model/pmpf'
import { IPMPFRepository } from '../port/pmpf.repository'
import { PMPFValidator } from '../domain/validator/create.pmpf.validator'
import { StatusSuccess } from '../domain/model/status.success'
import { StatusError } from '../domain/model/status.error'
import { ValidationException } from '../domain/exception/validation.exception'
import { MultiStatus } from '../domain/model/multi.status'

@injectable()
export class PMPFService implements IPMPFService {
    constructor(
        @inject(Identifier.PMPF_REPOSITORY) readonly _repository: IPMPFRepository
    ) {

    }

    public async add(item: PMPF): Promise<PMPF | undefined> {
        PMPFValidator.validate(item)

        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.stringsException('PMPF').ALREADY_REGISTERED)

        return this._repository.create(item)
    }

    public async addMultiples(items: | Array<PMPF>): Promise<MultiStatus<PMPF>> {
        const statusSuccessArr: Array<StatusSuccess<PMPF>> = new Array<StatusSuccess<PMPF>>()
        const statusErrorArr: Array<StatusError<PMPF>> = new Array<StatusError<PMPF>>()

        for (const item of items) {
            try {
                const pmpf: PMPF | undefined = await this.add(item)
                if (pmpf) {
                    statusSuccessArr.push(new StatusSuccess<PMPF>(HttpStatus.CREATED, pmpf))
                }
            } catch (err: any) {
                let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR
                if (err instanceof ValidationException) statusCode = HttpStatus.BAD_REQUEST
                if (err instanceof ConflictException) statusCode = HttpStatus.CONFLICT
                statusErrorArr.push(new StatusError<PMPF>(statusCode, err.message, err.description, item))
            }
        }

        const multiStatus: MultiStatus<PMPF> = new MultiStatus<PMPF>()
        multiStatus.success = statusSuccessArr
        multiStatus.error = statusErrorArr

        return Promise.resolve(multiStatus)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public getById(id: string, query: IQuery): Promise<PMPF | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public async update(item: PMPF): Promise<PMPF | undefined> {
        PMPFValidator.validate(item)

        const exists: boolean = await this._repository.checkExists(item)
        if (!exists) return Promise.resolve(undefined)

        return this._repository.update(item)
    }

    public getAll(query: IQuery): Promise<Array<PMPF>> {
        return this._repository.find(query)
    }

    public count(query?: IQuery): Promise<number> {
        return this._repository.count(query)
    }
}
