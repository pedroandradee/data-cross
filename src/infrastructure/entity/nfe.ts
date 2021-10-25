import { Entity } from './entity'

export class NFEEntity extends Entity {
    public passkey_number?: string
    public electronic_invoice_number?: string
    public issue_date_time?: string
    public issuer_corporate_name?: string
    public issuer_cnpj?: string
    public issuer_state?: string
    public recipient_corporate_name?: string
    public recipient_cnpj?: string
    public recipient_state?: string
    public product_code?: string
    public product_description?: string
    public ncm_code?: string
    public anp_code?: string
    public cst?: string
    public cfop?: string
    public product_quantity?: number
    public unitary_value?: number
    public product_value?: number
    public total_note_value?: number
    public date_time_inclusion?: string
    public date_time_receipt?: string
    public date_time_operation?: string
    public operation_description?: string
    public bc_value?: number
    public icms_bc_value?: number
    public icms_st_bc_value?: number
    public st_bc_value_held_dest?: number
    public icms_st_bc_value_held_dest?: number
}
