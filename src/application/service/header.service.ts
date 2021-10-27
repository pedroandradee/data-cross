import { inject, injectable } from 'inversify'
import Header from '../domain/model/header'
import { IQuery } from '../port/query.interface'
import { Identifier } from '../../di/identifiers'
import { IRepository } from '../port/repository.interface'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { CreateHeaderValidator } from '../domain/validator/create.header'
import { StatusError } from '../domain/model/status.error'
import { MultiStatus } from '../domain/model/multi.status'
import { StatusSuccess } from '../domain/model/status.success'
import HttpStatus from 'http-status-codes'
import { ValidationException } from '../domain/exception/validation.exception'
import { IHeaderService } from '../port/header.service'

@injectable()
export class HeaderService implements IHeaderService {

    constructor(
        @inject(Identifier.HEADER_REPOSITORY) readonly _repository: IRepository<Header>
    ) {

    }

    public async add(item: Header): Promise<Header | undefined> {
        // Validate
        CreateHeaderValidator.validate(item)
        // Check exists
        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.HEADER.ALREADY_REGISTERED)
        // Save item
        return this._repository.create(item)
    }

    public async addMultiples(items: | Array<Header>): Promise<MultiStatus<Header>> {
        const statusSuccessArr: Array<StatusSuccess<Header>> = new Array<StatusSuccess<Header>>()
        const statusErrorArr: Array<StatusError<Header>> = new Array<StatusError<Header>>()

        for (const item of items) {
            try {
                const header: Header | undefined = await this.add(item)
                if (header) {
                    statusSuccessArr.push(new StatusSuccess<Header>(HttpStatus.CREATED, header))
                }
            } catch (err: any) {
                let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR
                if (err instanceof ValidationException) statusCode = HttpStatus.BAD_REQUEST
                if (err instanceof ConflictException) statusCode = HttpStatus.CONFLICT
                statusErrorArr.push(new StatusError<Header>(statusCode, err.message, err.description, item))
            }
        }

        const multiStatus: MultiStatus<Header> = new MultiStatus<Header>()
        multiStatus.success = statusSuccessArr
        multiStatus.error = statusErrorArr

        return Promise.resolve(multiStatus)
    }

    public count(query: IQuery): Promise<number> {
        return this._repository.count(query)
    }

    public getAll(query: IQuery): Promise<Array<Header>> {
        return this._repository.find(query)
    }

    public getById(id: string, query: IQuery): Promise<Header | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public remove(id: string): Promise<boolean> {
        ObjectIdValidator.validate(id)
        return this._repository.delete(id)
    }

    public update(item: Header): Promise<Header | undefined> {
        throw Error('Not implemented!')
    }

}
