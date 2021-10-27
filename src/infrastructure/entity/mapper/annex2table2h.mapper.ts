import { IEntityMapper } from '../../port/entity.mapper.interface'
import { injectable } from 'inversify'
import { Annex2Table2HEntity } from '../annex2table2h'
import { Annex2Table2H as Annex2Table2HModel } from '../../../application/domain/model/annex2table2h'

@injectable()
export class Annex2Table2HMapper implements IEntityMapper<Annex2Table2HModel, Annex2Table2HEntity> {
    public jsonToModel(json: any): Annex2Table2HModel {
        const result: Annex2Table2HModel = new Annex2Table2HModel()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.cnpj_issuer !== undefined) result.cnpj_issuer = json.cnpj_issuer
        if (json.ie_issuer !== undefined) result.ie_issuer = json.ie_issuer
        if (json.state_issuer !== undefined) result.state_issuer = json.state_issuer
        if (json.month_year !== undefined) result.month_year = json.month_year
        if (json.identifier !== undefined) result.identifier = json.identifier
        if (json.cnpj !== undefined) result.cnpj = json.cnpj
        if (json.ie !== undefined) result.ie = json.ie
        if (json.iest !== undefined) result.iest = json.iest
        if (json.corporate_name !== undefined) result.corporate_name = json.corporate_name
        if (json.address !== undefined) result.address = json.address
        if (json.district !== undefined) result.district = json.district
        if (json.county !== undefined) result.county = json.county
        if (json.zip_code !== undefined) result.zip_code = json.zip_code

        return result

    }

    public modelEntityToModel(item: Annex2Table2HEntity): Annex2Table2HModel {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: Annex2Table2HModel): Annex2Table2HEntity {
        const result: Annex2Table2HEntity = new Annex2Table2HEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.cnpj_issuer !== undefined) result.cnpj_issuer = item.cnpj_issuer
        if (item.ie_issuer !== undefined) result.ie_issuer = item.ie_issuer
        if (item.state_issuer !== undefined) result.state_issuer = item.state_issuer
        if (item.month_year !== undefined) result.month_year = item.month_year
        if (item.identifier !== undefined) result.identifier = item.identifier
        if (item.cnpj !== undefined) result.cnpj = item.cnpj
        if (item.ie !== undefined) result.ie = item.ie
        if (item.iest !== undefined) result.iest = item.iest
        if (item.corporate_name !== undefined) result.corporate_name = item.corporate_name
        if (item.address !== undefined) result.address = item.address
        if (item.district !== undefined) result.district = item.district
        if (item.county !== undefined) result.county = item.county
        if (item.zip_code !== undefined) result.zip_code = item.zip_code

        return result
    }

    public transform(item: any): any {
        if (item instanceof Annex2Table2HModel) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

}
