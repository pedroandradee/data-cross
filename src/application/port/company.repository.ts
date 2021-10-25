import { Company } from 'application/domain/model/company'
import { IRepository } from './repository.interface'

export interface ICompany extends IRepository<Company> {
    checkExists(entity: Company): Promise<boolean>
}
