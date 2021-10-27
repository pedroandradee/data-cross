import { IService } from './service.interface'
import Header from '../domain/model/header'
import { MultiStatus } from '../domain/model/multi.status'

export interface IHeaderService extends IService<Header> {

    addMultiples(items: Array<Header>): Promise<MultiStatus<Header>>
}
