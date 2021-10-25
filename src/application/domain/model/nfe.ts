/**
 * Implementation of generic entity.
 * Theoretically, the other entity must inherit it.
 *
 * @abstract
 */
import { JsonUtils } from '../utils/json.utils'
import { Entity } from './entity'
import { IJSONSerializable } from '../utils/json.serializable.interface'
import { IJSONDeserializable } from '../utils/json.deserializable.interface'

export class NFE extends Entity implements IJSONSerializable, IJSONDeserializable<NFE> {
    private _passkey_number?: string
    private _electronic_invoice_number?: string
    private _issue_date_time?: string
    private _issuer_corporate_name?: string
    private _issuer_cnpj?: string
    private _issuer_state?: string
    private _recipient_corporate_name?: string
    private _recipient_cnpj?: string
    private _recipient_state?: string
    private _product_code?: string
    private _product_description?: string
    private _ncm_code?: string
    private _anp_code?: string
    private _cst?: string
    private _cfop?: string
    private _product_quantity?: number
    private _unitary_value?: number
    private _product_value?: number
    private _total_note_value?: number
    private _date_time_inclusion?: string
    private _date_time_receipt?: string
    private _date_time_operation?: string
    private _operation_description?: string
    private _bc_value?: number
    private _icms_bc_value?: number
    private _icms_st_bc_value?: number
    private _st_bc_value_held_dest?: number
    private _icms_st_bc_value_held_dest?: number

    constructor(id?: string, created_at?: string, updated_at?: string) {
        super(id, created_at, updated_at)
    }

    get passkey_number(): string | undefined {
        return this._passkey_number
    }

    set passkey_number(value: string | undefined) {
        this._passkey_number = value
    }

    get electronic_invoice_number(): string | undefined {
        return this._electronic_invoice_number
    }

    set electronic_invoice_number(value: string | undefined) {
        this._electronic_invoice_number = value
    }

    get issue_date_time(): string | undefined {
        return this._issue_date_time
    }

    set issue_date_time(value: string | undefined) {
        this._issue_date_time = value
    }

    get issuer_corporate_name(): string | undefined {
        return this._issuer_corporate_name
    }

    set issuer_corporate_name(value: string | undefined) {
        this._issuer_corporate_name = value
    }

    get issuer_cnpj(): string | undefined {
        return this._issuer_cnpj
    }

    set issuer_cnpj(value: string | undefined) {
        this._issuer_cnpj = value
    }

    get issuer_state(): string | undefined {
        return this._issuer_state
    }

    set issuer_state(value: string | undefined) {
        this._issuer_state = value
    }

    get recipient_corporate_name(): string | undefined {
        return this._recipient_corporate_name
    }

    set recipient_corporate_name(value: string | undefined) {
        this._recipient_corporate_name = value
    }

    get recipient_cnpj(): string | undefined {
        return this._recipient_cnpj
    }

    set recipient_cnpj(value: string | undefined) {
        this._recipient_cnpj = value
    }

    get recipient_state(): string | undefined {
        return this._recipient_state
    }

    set recipient_state(value: string | undefined) {
        this._recipient_state = value
    }

    get product_code(): string | undefined {
        return this._product_code
    }

    set product_code(value: string | undefined) {
        this._product_code = value
    }

    get product_description(): string | undefined {
        return this._product_description
    }

    set product_description(value: string | undefined) {
        this._product_description = value
    }

    get ncm_code(): string | undefined {
        return this._ncm_code
    }

    set ncm_code(value: string | undefined) {
        this._ncm_code = value
    }

    get anp_code(): string | undefined {
        return this._anp_code
    }

    set anp_code(value: string | undefined) {
        this._anp_code = value
    }

    get cst(): string | undefined {
        return this._cst
    }

    set cst(value: string | undefined) {
        this._cst = value
    }

    get cfop(): string | undefined {
        return this._cfop
    }

    set cfop(value: string | undefined) {
        this._cfop = value
    }

    get product_quantity(): number | undefined {
        return this._product_quantity
    }

    set product_quantity(value: number | undefined) {
        this._product_quantity = value
    }

    get unitary_value(): number | undefined {
        return this._unitary_value
    }

    set unitary_value(value: number | undefined) {
        this._unitary_value = value
    }

    get product_value(): number | undefined {
        return this._product_value
    }

    set product_value(value: number | undefined) {
        this._product_value = value
    }

    get total_note_value(): number | undefined {
        return this._total_note_value
    }

    set total_note_value(value: number | undefined) {
        this._total_note_value = value
    }

    get date_time_inclusion(): string | undefined {
        return this._date_time_inclusion
    }

    set date_time_inclusion(value: string | undefined) {
        this._date_time_inclusion = value
    }

    get date_time_receipt(): string | undefined {
        return this._date_time_receipt
    }

    set date_time_receipt(value: string | undefined) {
        this._date_time_receipt = value
    }

    get date_time_operation(): string | undefined {
        return this._date_time_operation
    }

    set date_time_operation(value: string | undefined) {
        this._date_time_operation = value
    }

    get operation_description(): string | undefined {
        return this._operation_description
    }

    set operation_description(value: string | undefined) {
        this._operation_description = value
    }

    get bc_value(): number | undefined {
        return this._bc_value
    }

    set bc_value(value: number | undefined) {
        this._bc_value = value
    }

    get icms_bc_value(): number | undefined {
        return this._icms_bc_value
    }

    set icms_bc_value(value: number | undefined) {
        this._icms_bc_value = value
    }

    get icms_st_bc_value(): number | undefined {
        return this._icms_st_bc_value
    }

    set icms_st_bc_value(value: number | undefined) {
        this._icms_st_bc_value = value
    }

    get st_bc_value_held_dest(): number | undefined {
        return this._st_bc_value_held_dest
    }

    set st_bc_value_held_dest(value: number | undefined) {
        this._st_bc_value_held_dest = value
    }

    get icms_st_bc_value_held_dest(): number | undefined {
        return this._icms_st_bc_value_held_dest
    }

    set icms_st_bc_value_held_dest(value: number | undefined) {
        this._icms_st_bc_value_held_dest = value
    }

    public fromJSON(json: any): NFE {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.passkey_number !== undefined) this._passkey_number = json.passkey_number
        if (json.electronic_invoice_number !== undefined) this._electronic_invoice_number = json.electronic_invoice_number
        if (json.issue_date_time !== undefined) this._issue_date_time = json.issue_date_time
        if (json.issuer_corporate_name !== undefined) this._issuer_corporate_name = json.issuer_corporate_name
        if (json.issuer_cnpj !== undefined) this._issuer_cnpj = json.issuer_cnpj
        if (json.issuer_state !== undefined) this._issuer_state = json.issuer_state
        if (json.recipient_corporate_name !== undefined) this._recipient_corporate_name = json.recipient_corporate_name
        if (json.recipient_cnpj !== undefined) this._recipient_cnpj = json.recipient_cnpj
        if (json.recipient_state !== undefined) this._recipient_state = json.recipient_state
        if (json.product_code !== undefined) this._product_code = json.product_code
        if (json.product_description !== undefined) this._product_description = json.product_description
        if (json.ncm_code !== undefined) this._ncm_code = json.ncm_code
        if (json.anp_code !== undefined) this._anp_code = json.anp_code
        if (json.cst !== undefined) this._cst = json.cst
        if (json.cfop !== undefined) this._cfop = json.cfop
        if (json.product_quantity !== undefined) this._product_quantity = json.product_quantity
        if (json.unitary_value !== undefined) this._unitary_value = json.unitary_value
        if (json.product_value !== undefined) this._product_value = json.product_value
        if (json.total_note_value !== undefined) this._total_note_value = json.total_note_value
        if (json.date_time_inclusion !== undefined) this._date_time_inclusion = json.date_time_inclusion
        if (json.date_time_receipt !== undefined) this._date_time_receipt = json.date_time_receipt
        if (json.date_time_operation !== undefined) this._date_time_operation = json.date_time_operation
        if (json.operation_description !== undefined) this._operation_description = json.operation_description
        if (json.bc_value !== undefined) this._bc_value = json.bc_value
        if (json.icms_bc_value !== undefined) this._icms_bc_value = json.icms_bc_value
        if (json.icms_st_bc_value !== undefined) this._icms_st_bc_value = json.icms_st_bc_value
        if (json.st_bc_value_held_dest !== undefined) this._st_bc_value_held_dest = json.st_bc_value_held_dest
        if (json.icms_st_bc_value_held_dest !== undefined) this._icms_st_bc_value_held_dest = json.icms_st_bc_value_held_dest

        return this
    }

    public toJSON(): any {
        return {
            id: super.id,
            created_at: super.created_at,
            updated_at: super.updated_at,
            passkey_number: this.passkey_number,
            electronic_invoice_number: this.electronic_invoice_number,
            issue_date_time: this.issue_date_time,
            issuer_corporate_name: this.issuer_corporate_name,
            issuer_cnpj: this.issuer_cnpj,
            issuer_state: this.issuer_state,
            recipient_corporate_name: this.recipient_corporate_name,
            recipient_cnpj: this.recipient_cnpj,
            recipient_state: this.recipient_state,
            product_code: this.product_code,
            product_description: this.product_description,
            ncm_code: this.ncm_code,
            anp_code: this.anp_code,
            cst: this.cst,
            cfop: this.cfop,
            product_quantity: this.product_quantity,
            unitary_value: this.unitary_value,
            product_value: this.product_value,
            total_note_value: this.total_note_value,
            date_time_inclusion: this.date_time_inclusion,
            date_time_receipt: this.date_time_receipt,
            date_time_operation: this.date_time_operation,
            operation_description: this.operation_description,
            bc_value: this.bc_value,
            icms_bc_value: this.icms_bc_value,
            icms_st_bc_value: this.icms_st_bc_value,
            st_bc_value_held_dest: this.st_bc_value_held_dest,
            icms_st_bc_value_held_dest: this.icms_st_bc_value_held_dest
        }
    }
}

