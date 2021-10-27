import { inject, injectable } from 'inversify'
import { IService } from '../port/service.interface'
import { IQuery } from '../port/query.interface'
import { Identifier } from '../../di/identifiers'
import { IRepository } from '../port/repository.interface'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { StatusError } from '../domain/model/status.error'
import { MultiStatus } from '../domain/model/multi.status'
import { StatusSuccess } from '../domain/model/status.success'
import HttpStatus from 'http-status-codes'
import { ValidationException } from '../domain/exception/validation.exception'
import Product from '../domain/model/product'
import { CreateProductValidator } from '../domain/validator/create.product'

@injectable()
export class ProductService implements IService<Product> {

    constructor(
        @inject(Identifier.PRODUCT_REPOSITORY) readonly _repository: IRepository<Product>
    ) {

    }

    public async add(item: Product): Promise<Product | undefined> {
        // Validate
        CreateProductValidator.validate(item)
        // Check exists
        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.PRODUCT.ALREADY_REGISTERED)
        // Save item
        return this._repository.create(item)
    }

    public async addMultiples(items: | Array<Product>): Promise<MultiStatus<Product>> {
        const statusSuccessArr: Array<StatusSuccess<Product>> = new Array<StatusSuccess<Product>>()
        const statusErrorArr: Array<StatusError<Product>> = new Array<StatusError<Product>>()

        for (const item of items) {
            try {
                const product: Product | undefined = await this.add(item)
                if (product) {
                    statusSuccessArr.push(new StatusSuccess<Product>(HttpStatus.CREATED, product))
                }
            } catch (err: any) {
                let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR
                if (err instanceof ValidationException) statusCode = HttpStatus.BAD_REQUEST
                if (err instanceof ConflictException) statusCode = HttpStatus.CONFLICT
                statusErrorArr.push(new StatusError<Product>(statusCode, err.message, err.description, item))
            }
        }

        const multiStatus: MultiStatus<Product> = new MultiStatus<Product>()
        multiStatus.success = statusSuccessArr
        multiStatus.error = statusErrorArr

        return Promise.resolve(multiStatus)
    }

    public count(query: IQuery): Promise<number> {
        return this._repository.count(query)
    }

    public getAll(query: IQuery): Promise<Array<Product>> {
        return this._repository.find(query)
    }

    public getById(id: string, query: IQuery): Promise<Product | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public remove(id: string): Promise<boolean> {
        throw Error('Not implemented!')
    }

    public update(item: Product): Promise<Product | undefined> {
        throw Error('Not implemented!')
    }

}
