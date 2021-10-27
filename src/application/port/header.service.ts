import { IService } from './service.interface'
import Header from '../domain/model/header'
import { MultiStatus } from '../domain/model/multi.status'

export interface IHeaderService extends IService<Header> {
    /**
     * Add a list of new items.
     *
     * @param items List to insert.
     * @return {Promise<MultiStatus>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    addMultiples(items: Array<Header>): Promise<MultiStatus<Header>>
}
