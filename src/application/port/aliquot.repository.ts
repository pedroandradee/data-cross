import { Aliquot } from '../domain/model/aliquot'
import { IRepository } from './repository.interface'

export interface IAliquotRepository extends IRepository<Aliquot> {
}
