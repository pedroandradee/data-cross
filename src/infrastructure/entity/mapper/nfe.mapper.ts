import { IEntityMapper } from '../../port/entity.mapper.interface'
import { injectable } from 'inversify'
import { NFEEntity } from '../nfe'
import { NFE as NFEModel } from '../../../application/domain/model/nfe'

@injectable()
export class NFEMapper implements IEntityMapper<NFEModel, NFEEntity> {
    public jsonToModel(json: any): NFEModel {
        const result: NFEModel = new NFEModel()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.passkey_number !== undefined) result.passkey_number = json.passkey_number
        if (json.electronic_invoice_number !== undefined) result.electronic_invoice_number = json.electronic_invoice_number
        if (json.issue_date_time !== undefined) result.issue_date_time = json.issue_date_time
        if (json.issuer_corporate_name !== undefined) result.issuer_corporate_name = json.issuer_corporate_name
        if (json.issuer_cnpj !== undefined) result.issuer_cnpj = json.issuer_cnpj
        if (json.issuer_state !== undefined) result.issuer_state = json.issuer_state
        if (json.recipient_corporate_name !== undefined) result.recipient_corporate_name = json.recipient_corporate_name
        if (json.recipient_cnpj !== undefined) result.recipient_cnpj = json.recipient_cnpj
        if (json.recipient_state !== undefined) result.recipient_state = json.recipient_state
        if (json.product_code !== undefined) result.product_code = json.product_code
        if (json.product_description !== undefined) result.product_description = json.product_description
        if (json.ncm_code !== undefined) result.ncm_code = json.ncm_code
        if (json.anp_code !== undefined) result.anp_code = json.anp_code
        if (json.cst !== undefined) result.cst = json.cst
        if (json.cfop !== undefined) result.cfop = json.cfop
        if (json.product_quantity !== undefined) result.product_quantity = json.product_quantity
        if (json.unitary_value !== undefined) result.unitary_value = json.unitary_value
        if (json.product_value !== undefined) result.product_value = json.product_value
        if (json.total_note_value !== undefined) result.total_note_value = json.total_note_value
        if (json.date_time_inclusion !== undefined) result.date_time_inclusion = json.date_time_inclusion
        if (json.date_time_receipt !== undefined) result.date_time_receipt = json.date_time_receipt
        if (json.date_time_operation !== undefined) result.date_time_operation = json.date_time_operation
        if (json.operation_description !== undefined) result.operation_description = json.operation_description
        if (json.bc_value !== undefined) result.bc_value = json.bc_value
        if (json.icms_bc_value !== undefined) result.icms_bc_value = json.icms_bc_value
        if (json.icms_st_bc_value !== undefined) result.icms_st_bc_value = json.icms_st_bc_value
        if (json.st_bc_value_held_dest !== undefined) result.st_bc_value_held_dest = json.st_bc_value_held_dest
        if (json.icms_st_bc_value_held_dest !== undefined) result.icms_st_bc_value_held_dest = json.icms_st_bc_value_held_dest

        return result

    }

    public modelEntityToModel(item: NFEEntity): NFEModel {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: NFEModel): NFEEntity {
        const result: NFEEntity = new NFEEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.passkey_number !== undefined) result.passkey_number = item.passkey_number
        if (item.electronic_invoice_number !== undefined) result.electronic_invoice_number = item.electronic_invoice_number
        if (item.issue_date_time !== undefined) result.issue_date_time = item.issue_date_time
        if (item.issuer_corporate_name !== undefined) result.issuer_corporate_name = item.issuer_corporate_name
        if (item.issuer_cnpj !== undefined) result.issuer_cnpj = item.issuer_cnpj
        if (item.issuer_state !== undefined) result.issuer_state = item.issuer_state
        if (item.recipient_corporate_name !== undefined) result.recipient_corporate_name = item.recipient_corporate_name
        if (item.recipient_cnpj !== undefined) result.recipient_cnpj = item.recipient_cnpj
        if (item.recipient_state !== undefined) result.recipient_state = item.recipient_state
        if (item.product_code !== undefined) result.product_code = item.product_code
        if (item.product_description !== undefined) result.product_description = item.product_description
        if (item.ncm_code !== undefined) result.ncm_code = item.ncm_code
        if (item.anp_code !== undefined) result.anp_code = item.anp_code
        if (item.cst !== undefined) result.cst = item.cst
        if (item.cfop !== undefined) result.cfop = item.cfop
        if (item.product_quantity !== undefined) result.product_quantity = item.product_quantity
        if (item.unitary_value !== undefined) result.unitary_value = item.unitary_value
        if (item.product_value !== undefined) result.product_value = item.product_value
        if (item.total_note_value !== undefined) result.total_note_value = item.total_note_value
        if (item.date_time_inclusion !== undefined) result.date_time_inclusion = item.date_time_inclusion
        if (item.date_time_receipt !== undefined) result.date_time_receipt = item.date_time_receipt
        if (item.date_time_operation !== undefined) result.date_time_operation = item.date_time_operation
        if (item.operation_description !== undefined) result.operation_description = item.operation_description
        if (item.bc_value !== undefined) result.bc_value = item.bc_value
        if (item.icms_bc_value !== undefined) result.icms_bc_value = item.icms_bc_value
        if (item.icms_st_bc_value !== undefined) result.icms_st_bc_value = item.icms_st_bc_value
        if (item.st_bc_value_held_dest !== undefined) result.st_bc_value_held_dest = item.st_bc_value_held_dest
        if (item.icms_st_bc_value_held_dest !== undefined) result.icms_st_bc_value_held_dest = item.icms_st_bc_value_held_dest

        return result
    }

    public transform(item: any): any {
        if (item instanceof NFEModel) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

}
