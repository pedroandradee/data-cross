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

export class Annex2Table2H extends Entity implements IJSONSerializable, IJSONDeserializable<Annex2Table2H> {
    private _cnpj_issuer?: string
    private _ie_issuer?: string
    private _state_issuer?: string
    private _month_year?: string
    private _identifier?: string
    private _cnpj?: string
    private _ie?: string
    private _iest?: string
    private _corporate_name?: string
    private _address?: string
    private _district?: string
    private _county?: string
    private _zip_code?: string

    constructor(id?: string, created_at?: string, updated_at?: string) {

        super(id, created_at, updated_at)
    }

    get cnpj_issuer(): string | undefined {
        return this._cnpj_issuer
    }

    set cnpj_issuer(value: string | undefined) {
        this._cnpj_issuer = value
    }

    get ie_issuer(): string | undefined {
        return this._ie_issuer
    }

    set ie_issuer(value: string | undefined) {
        this._ie_issuer = value
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

    get iest(): string | undefined {
        return this._iest
    }

    set iest(value: string | undefined) {
        this._iest = value
    }

    get corporate_name(): string | undefined {
        return this._corporate_name
    }

    set corporate_name(value: string | undefined) {
        this._corporate_name = value
    }

    get address(): string | undefined {
        return this._address
    }

    set address(value: string | undefined) {
        this._address = value
    }

    get district(): string | undefined {
        return this._district
    }

    set district(value: string | undefined) {
        this._district = value
    }

    get county(): string | undefined {
        return this._county
    }

    set county(value: string | undefined) {
        this._county = value
    }

    get zip_code(): string | undefined {
        return this._zip_code
    }

    set zip_code(value: string | undefined) {
        this._zip_code = value
    }

    public fromJSON(json: any): Annex2Table2H {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.cnpj_issuer !== undefined) this._cnpj_issuer = json.cnpj_issuer
        if (json.ie_issuer !== undefined) this._ie_issuer = json.ie_issuer
        if (json.state_issuer !== undefined) this._state_issuer = json.state_issuer
        if (json.month_year !== undefined) this._month_year = json.month_year
        if (json.identifier !== undefined) this._identifier = json.identifier
        if (json.cnpj !== undefined) this._cnpj = json.cnpj
        if (json.ie !== undefined) this._ie = json.ie
        if (json.iest !== undefined) this._iest = json.iest
        if (json.corporate_name !== undefined) this._corporate_name = json.corporate_name
        if (json.address !== undefined) this._address = json.address
        if (json.district !== undefined) this._district = json.district
        if (json.county !== undefined) this._county = json.county
        if (json.zip_code !== undefined) this._zip_code = json.zip_code

        return this
    }

    public toJSON(): any {
        return {
            id: super.id,
            created_at: super.created_at,
            updated_at: super.updated_at,
            cnpj_issuer: this.cnpj_issuer,
            ie_issuer: this.ie_issuer,
            state_issuer: this.state_issuer,
            month_year: this.month_year,
            identifier: this.identifier,
            cnpj: this.cnpj,
            ie: this.ie,
            iest: this.iest,
            corporate_name: this.corporate_name,
            address: this.address,
            district: this.district,
            county: this.county,
            zip_code: this.zip_code,
        }
    }
}

