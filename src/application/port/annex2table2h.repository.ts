import { Annex2Table2H } from 'application/domain/model/annex2table2h'
import { IRepository } from './repository.interface'

export interface IAnnex2Table2HRepository extends IRepository<Annex2Table2H> {
    checkExists(entity: Annex2Table2H): Promise<boolean>
}
