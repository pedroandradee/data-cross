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

export class Annex2Table2D extends Entity implements IJSONSerializable, IJSONDeserializable<Annex2Table2D> {
    private _ie_issuer?: string
    private _cnpj_issuer?: string
    private _state_issuer?: string
    private _month_year?: string
    private _identifier?: string
    private _cnpj?: string
    private _ie?: string
    private _state?: string
    private _issue_date?: string
    private _model?: string
    private _serie?: string
    private _nfe_number?: string
    private _cfop?: string
    private _nfe_product?: string
    private _product?: string
    private _amount?: number
    private _amount_consumer_product?: number
    private _startting_value?: number
    private _bcst_value?: number
    private _icms_rate?: number
    private _icms_st_value?: number
    private _shipping_type?: string
    private _cnpj_freight?: string
    private _state_freight?: string
    private _plate_1?: string
    private _plate_2?: string
    private _plate_3?: string
    private _destination?: string

    constructor(id?: string, created_at?: string, updated_at?: string) {
        super(id, created_at, updated_at)
    }

    get ie_issuer(): string | undefined {
        return this._ie_issuer
    }

    set ie_issuer(value: string | undefined) {
        this._ie_issuer = value
    }

    get cnpj_issuer(): string | undefined {
        return this._cnpj_issuer
    }

    set cnpj_issuer(value: string | undefined) {
        this._cnpj_issuer = value
    }

    get state_issuer(): string | undefined {
        return this._state_issuer
    }

    set state_issuer(value: string | undefined) {
        this._state_issuer = value
    }

    get month_year(): string | undefined {
        return this._month_year
    }

    set month_year(value: string | undefined) {
        this._month_year = value
    }

    get identifier(): string | undefined {
        return this._identifier
    }

    set identifier(value: string | undefined) {
        this._identifier = value
    }

    get cnpj(): string | undefined {
        return this._cnpj
    }

    set cnpj(value: string | undefined) {
        this._cnpj = value
    }

    get ie(): string | undefined {
        return this._ie
    }

    set ie(value: string | undefined) {
        this._ie = value
    }

    get state(): string | undefined {
        return this._state
    }

    set state(value: string | undefined) {
        this._state = value
    }

    get issue_date(): string | undefined {
        return this._issue_date
    }

    set issue_date(value: string | undefined) {
        this._issue_date = value
    }

    get model(): string | undefined {
        return this._model
    }

    set model(value: string | undefined) {
        this._model = value
    }

    get serie(): string | undefined {
        return this._serie
    }

    set serie(value: string | undefined) {
        this._serie = value
    }

    get nfe_number(): string | undefined {
        return this._nfe_number
    }

    set nfe_number(value: string | undefined) {
        this._nfe_number = value
    }

    get cfop(): string | undefined {
        return this._cfop
    }

    set cfop(value: string | undefined) {
        this._cfop = value
    }

    get nfe_product(): string | undefined {
        return this._nfe_product
    }

    set nfe_product(value: string | undefined) {
        this._nfe_product = value
    }

    get product(): string | undefined {
        return this._product
    }

    set product(value: string | undefined) {
        this._product = value
    }

    get amount(): number | undefined {
        return this._amount
    }

    set amount(value: number | undefined) {
        this._amount = value
    }

    get amount_consumer_product(): number | undefined {
        return this._amount_consumer_product
    }

    set amount_consumer_product(value: number | undefined) {
        this._amount_consumer_product = value
    }

    get startting_value(): number | undefined {
        return this._startting_value
    }

    set startting_value(value: number | undefined) {
        this._startting_value = value
    }

    get bcst_value(): number | undefined {
        return this._bcst_value
    }

    set bcst_value(value: number | undefined) {
        this._bcst_value = value
    }

    get icms_rate(): number | undefined {
        return this._icms_rate
    }

    set icms_rate(value: number | undefined) {
        this._icms_rate = value
    }

    get icms_st_value(): number | undefined {
        return this._icms_st_value
    }

    set icms_st_value(value: number | undefined) {
        this._icms_st_value = value
    }

    get shipping_type(): string | undefined {
        return this._shipping_type
    }

    set shipping_type(value: string | undefined) {
        this._shipping_type = value
    }

    get cnpj_freight(): string | undefined {
        return this._cnpj_freight
    }

    set cnpj_freight(value: string | undefined) {
        this._cnpj_freight = value
    }

    get state_freight(): string | undefined {
        return this._state_freight
    }

    set state_freight(value: string | undefined) {
        this._state_freight = value
    }

    get plate_1(): string | undefined {
        return this._plate_1
    }

    set plate_1(value: string | undefined) {
        this._plate_1 = value
    }

    get plate_2(): string | undefined {
        return this._plate_2
    }

    set plate_2(value: string | undefined) {
        this._plate_2 = value
    }

    get plate_3(): string | undefined {
        return this._plate_3
    }

    set plate_3(value: string | undefined) {
        this._plate_3 = value
    }

    get destination(): string | undefined {
        return this._destination
    }

    set destination(value: string | undefined) {
        this._destination = value
    }

    public fromJSON(json: any): Annex2Table2D {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.ie_issuer !== undefined) this._ie_issuer = json.ie_issuer
        if (json.cnpj_issuer !== undefined) this._cnpj_issuer = json.cnpj_issuer
        if (json.state_issuer !== undefined) this._state_issuer = json.state_issuer
        if (json.month_year !== undefined) this._month_year = json.month_year
        if (json.identifier !== undefined) this._identifier = json.identifier
        if (json.cnpj !== undefined) this._cnpj = json.cnpj
        if (json.ie !== undefined) this._ie = json.ie
        if (json.state !== undefined) this._state = json.state
        if (json.issue_date !== undefined) this._issue_date = json.issue_date
        if (json.model !== undefined) this._model = json.model
        if (json.serie !== undefined) this._serie = json.serie
        if (json.nfe_number !== undefined) this._nfe_number = json.nfe_number
        if (json.cfop !== undefined) this._cfop = json.cfop
        if (json.nfe_product !== undefined) this._nfe_product = json.nfe_product
        if (json.product !== undefined) this._product = json.product
        if (json.amount !== undefined) this._amount = json.amount
        if (json.amount_consumer_product !== undefined) this._amount_consumer_product = json.amount_consumer_product
        if (json.startting_value !== undefined) this._startting_value = json.startting_value
        if (json.bcst_value !== undefined) this._bcst_value = json.bcst_value
        if (json.icms_rate !== undefined) this._icms_rate = json.icms_rate
        if (json.icms_st_value !== undefined) this._icms_st_value = json.icms_st_value
        if (json.shipping_type !== undefined) this._shipping_type = json.shipping_type
        if (json.cnpj_freight !== undefined) this._cnpj_freight = json.cnpj_freight
        if (json.state_freight !== undefined) this._state_freight = json.state_freight
        if (json.plate_1 !== undefined) this._plate_1 = json.plate_1
        if (json.plate_2 !== undefined) this._plate_2 = json.plate_2
        if (json.plate_3 !== undefined) this._plate_3 = json.plate_3
        if (json.destination !== undefined) this._destination = json.destination

        return this
    }

    public toJSON(): any {
        return {
            id: super.id,
            created_at: super.created_at,
            updated_at: super.updated_at,
            ie_issuer: this.ie_issuer,
            cnpj_issuer: this.cnpj_issuer,
            state_issuer: this.state_issuer,
            month_year: this.month_year,
            identifier: this.identifier,
            cnpj: this.cnpj,
            ie: this.ie,
            state: this.state,
            issue_date: this.issue_date,
            model: this.model,
            serie: this.serie,
            nfe_number: this.nfe_number,
            cfop: this.cfop,
            nfe_product: this.nfe_product,
            product: this.product,
            amount: this.amount,
            amount_consumer_product: this.amount_consumer_product,
            startting_value: this.startting_value,
            bcst_value: this.bcst_value,
            icms_rate: this.icms_rate,
            icms_st_value: this.icms_st_value,
            shipping_type: this.shipping_type,
            cnpj_freight: this.cnpj_freight,
            state_freight: this.state_freight,
            plate_1: this.plate_1,
            plate_2: this.plate_2,
            plate_3: this.plate_3,
            destination: this.destination
        }
    }
}
