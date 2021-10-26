import { inject, injectable } from 'inversify'
import { IService } from '../port/service.interface'
import Header from '../domain/model/header'
import { IQuery } from '../port/query.interface'
import { Identifier } from '../../di/identifiers'
import { IRepository } from '../port/repository.interface'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'

@injectable()
export class HeaderService implements IService<Header> {

    constructor(
        @inject(Identifier.HEADER_REPOSITORY) readonly _repository: IRepository<Header>
    ) {

    }

    public async add(item: Header): Promise<Header | undefined> {
        try {
            // Create Validator

            const exists = await this._repository.checkExists(item)
            if (exists) throw new ConflictException(Strings.HEADER.ALREADY_REGISTERED)

            const result: Header | undefined = await this._repository.create(item)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async count(query: IQuery): Promise<number> {
        try {
            return this._repository.count(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async getAll(query: IQuery): Promise<Array<Header>> {
        try {
            return this._repository.find(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async getById(id: string, query: IQuery): Promise<Header | undefined> {
        try {
            ObjectIdValidator.validate(id)
            query.addFilter({ _id: id })
            return this._repository.findOne(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async remove(id: string): Promise<boolean> {
        try {
            ObjectIdValidator.validate(id)
            return this._repository.delete(id)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async update(item: Header): Promise<Header | undefined> {
        try {
            // Update Validator
            // Check exists
            const result: Header | undefined = await this._repository.update(item)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

}
