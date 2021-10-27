import { IService } from './service.interface'
import { MultiStatus } from '../domain/model/multi.status'
import Product from '../domain/model/product'

export interface IProductService extends IService<Product> {
    /**
     * Add a list of new items.
     *
     * @param items List to insert.
     * @return {Promise<MultiStatus>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    addMultiples(items: Array<Product>): Promise<MultiStatus<Product>>
}
