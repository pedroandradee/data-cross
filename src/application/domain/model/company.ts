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

 export class Company extends Entity implements IJSONSerializable, IJSONDeserializable<Company> {
    private _corporate_name?: string
    private _cnpj?: string
    private _ie?: string
    private _address?: string
    private _district?: string
    private _county?: string
    private _state?: string
    private _zip_code?: string
    private _email?: string
    private _category?: string
    private _phone?: string
    private _contact?: string
    private _contact_position?: string
    private _contact_cpf?: string
    private _contact_rg?: string
    private _contact_state?: number

    constructor(id?: string, created_at?: string, updated_at?: string, corporate_name?: string, cnpj?: string,
            ie?: string, address?: string, district?: string, county?: string, state?: string, zip_code?: string,
            email?: string, category?: string, phone?: string, contact?: string, contact_position?: string,
            contact_cpf?: string, contact_rg?: string, contact_state?: number) {

        super(id, created_at, updated_at)

        this._corporate_name = corporate_name
        this._cnpj = cnpj
        this._ie = ie
        this._address = address
        this._district = district
        this._county = county
        this._state = state
        this._zip_code = zip_code
        this._email = email
        this._category = category
        this._phone = phone
        this._contact = contact
        this._contact_position = contact_position
        this._contact_cpf = contact_cpf
        this._contact_rg = contact_rg
        this._contact_state = contact_state
    }

    get corporate_name(): string | undefined {
        return this._corporate_name
    }

    set corporate_name(value: string | undefined) {
        this._corporate_name = value
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

    get state(): string | undefined {
        return this._state
    }

    set state(value: string | undefined) {
        this._state = value
    }

    get zip_code(): string | undefined {
        return this._zip_code
    }

    set zip_code(value: string | undefined) {
        this._zip_code = value
    }

    get email(): string | undefined {
        return this._email
    }

    set email(value: string | undefined) {
        this._email = value
    }

    get category(): string | undefined {
        return this._category
    }

    set category(value: string | undefined) {
        this._category = value
    }

    get phone(): string | undefined {
        return this._phone
    }

    set phone(value: string | undefined) {
        this._phone = value
    }

    get contact(): string | undefined {
        return this._contact
    }

    set contact(value: string | undefined) {
        this._contact = value
    }

    get contact_position(): string | undefined {
        return this._contact_position
    }

    set contact_position(value: string | undefined) {
        this._contact_position = value
    }

    get contact_cpf(): string | undefined {
        return this._contact_cpf
    }

    set contact_cpf(value: string | undefined) {
        this._contact_cpf = value
    }

    get contact_rg(): string | undefined {
        return this._contact_rg
    }

    set contact_rg(value: string | undefined) {
        this._contact_rg = value
    }

    get contact_state(): number | undefined {
        return this._contact_state
    }

    set contact_state(value: number | undefined) {
        this._contact_state = value
    }

    public fromJSON(json: any): Company {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.corporate_name !== undefined) this._corporate_name = json.corporate_name
        if (json.cnpj !== undefined) this._cnpj = json.cnpj
        if (json.ie !== undefined) this._ie = json.ie
        if (json.address !== undefined) this._address = json.address
        if (json.district !== undefined) this._district = json.district
        if (json.county !== undefined) this._county = json.county
        if (json.county !== undefined) this._county = json.county
        if (json.state !== undefined) this._state = json.state
        if (json.zip_code !== undefined) this._zip_code = json.zip_code
        if (json.email !== undefined) this._email = json.email
        if (json.category !== undefined) this._category = json.category
        if (json.phone !== undefined) this._phone = json.phone
        if (json.contact !== undefined) this._contact = json.contact
        if (json.contact_position !== undefined) this._contact_position = json.contact_position
        if (json.contact_cpf !== undefined) this._contact_cpf = json.contact_cpf
        if (json.contact_rg !== undefined) this._contact_rg = json.contact_rg
        if (json.contact_state !== undefined) this._contact_state = json.contact_state

        return this
    }

     public toJSON(): any {
        return {
           id: super.id,
           created_at: super.created_at,
           updated_at: super.updated_at,
           corporate_name: this.corporate_name,
           ie: this.ie,
           address: this.address,
           district: this.district,
           county: this.county,
           state: this.state,
           zip_code: this.zip_code,
           email: this.email,
           category: this.category,
           phone: this.phone,
           contact: this.contact,
           contact_position: this.contact_position,
           contact_cpf: this.contact_cpf,
           contact_rg: this.contact_rg,
           contact_state: this.contact_state
        }
    }
}
