import { MultiStatus } from '../../application/domain/model/multi.status'
import { PMPF } from '../domain/model/pmpf'
import { IService } from './service.interface'

export interface IPMPFService extends IService<PMPF> {
    /**
     * Add a list of new items.
     * @param items List to insert.
     * @return {Promise<MultiStatus>}
     * @throws {ValidationException | ConflictException | RepositoryException}
     */
    addMultiples(items: Array<PMPF>): Promise<MultiStatus<PMPF>>
}
