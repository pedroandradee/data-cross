import { injectable } from 'inversify'
import { IEntityMapper } from '../../port/entity.mapper.interface'
import Header from '../../../application/domain/model/header'
import { HeaderEntity } from '../header'

@injectable()
export class HeaderMapper implements IEntityMapper<Header, HeaderEntity> {
    /**
     * Convert Header to Header Entity or JSON objects to Header
     *
     * @see If the item is an instance of Header it will be converted to HeaderEntity.
     * Otherwise, it will be converted to a Header object.
     * @param item object to be converted
     */
    public transform(item: any): any {
        if (item instanceof Header) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

    /**
     * Convert JSON for {Header}.
     *
     * @see Each attribute must be mapped only if it contains an assigned value,
     * because at some point the attribute accessed may not exist.
     * @param json, JSON object to be converted to Header
     */
    public jsonToModel(json: any): Header {
        const result: Header = new Header()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.updated_at !== undefined) result.updated_at = json.updated_at
        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.updated_at !== undefined) result.updated_at = json.updated_at
        if (json.month_year !== undefined) result.month_year = json.month_year
        if (json.identifier !== undefined) result.identifier = json.identifier
        if (json.annex !== undefined) result.annex = json.annex
        if (json.product !== undefined) result.product = json.product
        if (json.origin_state !== undefined) result.origin_state = json.origin_state
        if (json.cnpj_supplier !== undefined) result.cnpj_supplier = json.cnpj_supplier
        if (json.ie_supplier !== undefined) result.ie_supplier = json.ie_supplier
        if (json.destination_state !== undefined) result.destination_state = json.destination_state
        if (json.others_state !== undefined) result.others_state = json.others_state
        if (json.cnpj !== undefined) result.cnpj = json.cnpj
        if (json.ie !== undefined) result.ie = json.ie
        if (json.iest !== undefined) result.iest = json.iest
        if (json.corporate_name !== undefined) result.corporate_name = json.corporate_name
        if (json.address !== undefined) result.address = json.address
        if (json.district !== undefined) result.district = json.district
        if (json.county !== undefined) result.county = json.county
        if (json.state !== undefined) result.state = json.state
        if (json.zip_code !== undefined) result.zip_code = json.zip_code
        if (json.email !== undefined) result.email = json.email
        if (json.category !== undefined) result.category = json.category
        if (json.phone !== undefined) result.phone = json.phone
        if (json.contact !== undefined) result.contact = json.contact
        if (json.contact_position !== undefined) result.contact_position = json.contact_position
        if (json.contact_cpf !== undefined) result.contact_cpf = json.contact_cpf
        if (json.contact_rg !== undefined) result.contact_rg = json.contact_rg
        if (json.contact_state !== undefined) result.contact_state = json.contact_state
        if (json.local !== undefined) result.local = json.local
        if (json.date !== undefined) result.date = json.date
        if (json.hour !== undefined) result.hour = json.hour
        if (json.annex_origin !== undefined) result.annex_origin = json.annex_origin

        return result

    }

    /**
     * Convert {HeaderEntity} for {Header}.
     *
     * @see Each attribute must be mapped only if it contains an assigned value,
     * because at some point the attribute accessed may not exist.
     * @param item, HeaderEntity object to be converted to Header
     */
    public modelEntityToModel(item: HeaderEntity): Header {
        throw Error('Not implemented!')
    }

    /**
     * Convert {Header} to {HeaderEntity}
     * @see Creation Date should not be mapped to the type the repository understands.
     * Because this attribute is created automatically by the database.
     * Therefore, if a null value is passed at update time, an exception is thrown.
     * @param item, Header object to be converted to HeaderEntity
     */
    public modelToModelEntity(item: Header): HeaderEntity {
        const result: HeaderEntity = new HeaderEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.updated_at !== undefined) result.updated_at = item.updated_at
        if (item.month_year !== undefined) result.month_year = item.month_year
        if (item.identifier !== undefined) result.identifier = item.identifier
        if (item.annex !== undefined) result.annex = item.annex
        if (item.product !== undefined) result.product = item.product
        if (item.origin_state !== undefined) result.origin_state = item.origin_state
        if (item.cnpj_supplier !== undefined) result.cnpj_supplier = item.cnpj_supplier
        if (item.ie_supplier !== undefined) result.ie_supplier = item.ie_supplier
        if (item.destination_state !== undefined) result.destination_state = item.destination_state
        if (item.others_state !== undefined) result.others_state = item.others_state
        if (item.cnpj !== undefined) result.cnpj = item.cnpj
        if (item.ie !== undefined) result.ie = item.ie
        if (item.iest !== undefined) result.iest = item.iest
        if (item.corporate_name !== undefined) result.corporate_name = item.corporate_name
        if (item.address !== undefined) result.address = item.address
        if (item.district !== undefined) result.district = item.district
        if (item.county !== undefined) result.county = item.county
        if (item.state !== undefined) result.state = item.state
        if (item.zip_code !== undefined) result.zip_code = item.zip_code
        if (item.email !== undefined) result.email = item.email
        if (item.category !== undefined) result.category = item.category
        if (item.phone !== undefined) result.phone = item.phone
        if (item.contact !== undefined) result.contact = item.contact
        if (item.contact_position !== undefined) result.contact_position = item.contact_position
        if (item.contact_cpf !== undefined) result.contact_cpf = item.contact_cpf
        if (item.contact_rg !== undefined) result.contact_rg = item.contact_rg
        if (item.contact_state !== undefined) result.contact_state = item.contact_state
        if (item.local !== undefined) result.local = item.local
        if (item.date !== undefined) result.date = item.date
        if (item.hour !== undefined) result.hour = item.hour
        if (item.annex_origin !== undefined) result.annex_origin = item.annex_origin

        return result
    }


}
