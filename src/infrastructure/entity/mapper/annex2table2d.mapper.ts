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
        if (json.ie_issuer !== undefined) result.ie_issuer = json.ie_issuer
        if (json.cnpj_issuer !== undefined) result.cnpj_issuer = json.cnpj_issuer
        if (json.state_issuer !== undefined) result.state_issuer = json.state_issuer
        if (json.month_year !== undefined) result.month_year = json.month_year
        if (json.identifier !== undefined) result.identifier = json.identifier
        if (json.cnpj !== undefined) result.cnpj = json.cnpj
        if (json.ie !== undefined) result.ie = json.ie
        if (json.state !== undefined) result.state = json.state
        if (json.issue_date !== undefined) result.issue_date = json.issue_date
        if (json.model !== undefined) result.model = json.model
        if (json.serie !== undefined) result.serie = json.serie
        if (json.nfe_number !== undefined) result.nfe_number = json.nfe_number
        if (json.cfop !== undefined) result.cfop = json.cfop
        if (json.nfe_product !== undefined) result.nfe_product = json.nfe_product
        if (json.product !== undefined) result.product = json.product
        if (json.amount !== undefined) result.amount = json.amount
        if (json.amount_consumer_product !== undefined) result.amount_consumer_product = json.amount_consumer_product
        if (json.startting_value !== undefined) result.startting_value = json.startting_value
        if (json.bcst_value !== undefined) result.bcst_value = json.bcst_value
        if (json.icms_rate !== undefined) result.icms_rate = json.icms_rate
        if (json.icms_st_value !== undefined) result.icms_st_value = json.icms_st_value
        if (json.shipping_type !== undefined) result.shipping_type = json.shipping_type
        if (json.cnpj_freight !== undefined) result.cnpj_freight = json.cnpj_freight
        if (json.state_freight !== undefined) result.state_freight = json.state_freight
        if (json.plate_1 !== undefined) result.plate_1 = json.plate_1
        if (json.plate_2 !== undefined) result.plate_2 = json.plate_2
        if (json.plate_3 !== undefined) result.plate_3 = json.plate_3
        if (json.destination !== undefined) result.destination = json.destination

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
        if (item.ie_issuer !== undefined) result.ie_issuer = item.ie_issuer
        if (item.cnpj_issuer !== undefined) result.cnpj_issuer = item.cnpj_issuer
        if (item.state_issuer !== undefined) result.state_issuer = item.state_issuer
        if (item.month_year !== undefined) result.month_year = item.month_year
        if (item.identifier !== undefined) result.identifier = item.identifier
        if (item.cnpj !== undefined) result.cnpj = item.cnpj
        if (item.ie !== undefined) result.ie = item.ie
        if (item.state !== undefined) result.state = item.state
        if (item.issue_date !== undefined) result.issue_date = item.issue_date
        if (item.model !== undefined) result.model = item.model
        if (item.serie !== undefined) result.serie = item.serie
        if (item.nfe_number !== undefined) result.nfe_number = item.nfe_number
        if (item.cfop !== undefined) result.cfop = item.cfop
        if (item.nfe_product !== undefined) result.nfe_product = item.nfe_product
        if (item.product !== undefined) result.product = item.product
        if (item.amount !== undefined) result.amount = item.amount
        if (item.amount_consumer_product !== undefined) result.amount_consumer_product = item.amount_consumer_product
        if (item.startting_value !== undefined) result.startting_value = item.startting_value
        if (item.bcst_value !== undefined) result.bcst_value = item.bcst_value
        if (item.icms_rate !== undefined) result.icms_rate = item.icms_rate
        if (item.icms_st_value !== undefined) result.icms_st_value = item.icms_st_value
        if (item.shipping_type !== undefined) result.shipping_type = item.shipping_type
        if (item.cnpj_freight !== undefined) result.cnpj_freight = item.cnpj_freight
        if (item.state_freight !== undefined) result.state_freight = item.state_freight
        if (item.plate_1 !== undefined) result.plate_1 = item.plate_1
        if (item.plate_2 !== undefined) result.plate_2 = item.plate_2
        if (item.plate_3 !== undefined) result.plate_3 = item.plate_3
        if (item.destination !== undefined) result.destination = item.destination

        return result
    }

    public transform(item: any): any {
        if (item instanceof Annex2Table2DModel) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

}
