import { MultiStatus } from '../../application/domain/model/multi.status'
import { Aliquot } from '../domain/model/aliquot'
import { IService } from './service.interface'

export interface IAliquotService extends IService<Aliquot> {
    /**
     * Add a list of new items.
     * @param items List to insert.
     * @return {Promise<MultiStatus>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    addMultiples(items: Array<Aliquot>): Promise<MultiStatus<Aliquot>>
}
