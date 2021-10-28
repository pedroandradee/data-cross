import { injectable } from 'inversify'
import { IEntityMapper } from '../../port/entity.mapper.interface'
import { PMPFEntity } from '../pmpf'
import { PMPF as PMPFModel } from '../../../application/domain/model/pmpf'

@injectable()
export class PMPFMapper implements IEntityMapper<PMPFModel, PMPFEntity> {
    public jsonToModel(json: any): PMPFModel {
        const result: PMPFModel = new PMPFModel()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.standard !== undefined) result.standard = json.standard
        if (json.num !== undefined) result.num = json.num
        if (json.year !== undefined) result.year = json.year
        if (json.type !== undefined) result.type = json.type
        if (json.state !== undefined) result.state = json.state
        if (json.start_date !== undefined) result.start_date = json.start_date
        if (json.end_date !== undefined) result.end_date = json.end_date
        if (json.product !== undefined) result.product = json.product
        if (json.value !== undefined) result.value = json.value

        return result
    }

    public modelEntityToModel(item: PMPFEntity): PMPFModel {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: PMPFEntity): PMPFEntity {
        const result: PMPFEntity = new PMPFEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.standard !== undefined) result.standard = item.standard
        if (item.num !== undefined) result.num = item.num
        if (item.year !== undefined) result.year = item.year
        if (item.type !== undefined) result.type = item.type
        if (item.state !== undefined) result.state = item.state
        if (item.start_date !== undefined) result.start_date = item.start_date
        if (item.end_date !== undefined) result.end_date = item.end_date
        if (item.product !== undefined) result.product = item.product
        if (item.value !== undefined) result.value = item.value

        return result
    }

    public transform(item: any): any {
        if (item instanceof PMPFModel) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

}
