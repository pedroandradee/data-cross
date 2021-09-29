import { IEntityMapper } from '../../port/entity.mapper.interface'
import { injectable } from 'inversify'
import { Annex2Table2DEntity } from '../annex2table2d'
import { Annex2Table2D as Annex2Table2DModel } from '../../../application/domain/model/annex2table2d'

@injectable()
export class Annex2Table2DMapper implements IEntityMapper<Annex2Table2DModel, Annex2Table2DEntity> {
    public jsonToModel(json: any): Annex2Table2DModel {
        const result: Annex2Table2DModel = new Annex2Table2DModel()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.updated_at !== undefined) result.updated_at = json.updated_at
        if (json.MESANO !== undefined) result.MESANO = json.MESANO

        return result

    }

    public modelEntityToModel(item: Annex2Table2DEntity): Annex2Table2DModel {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: Annex2Table2DModel): Annex2Table2DEntity {
        const result: Annex2Table2DEntity = new Annex2Table2DEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.updated_at !== undefined) result.updated_at = item.updated_at
        if (item.MESANO !== undefined) result.MESANO = item.MESANO

        return result
    }

    public transform(item: any): any {
        if (item instanceof Annex2Table2DModel) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

}
