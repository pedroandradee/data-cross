import { Annex2Table2D } from '../domain/model/annex2table2d'
import { IRepository } from './repository.interface'

export interface IAnnex2Table2DRepository extends IRepository<Annex2Table2D> {
    checkExists(entity: Annex2Table2D): Promise<boolean>
}
