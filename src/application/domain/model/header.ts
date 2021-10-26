import { JsonUtils } from '../utils/json.utils'
import { Entity } from './entity'
import { IJSONSerializable } from '../utils/json.serializable.interface'
import { IJSONDeserializable } from '../utils/json.deserializable.interface'

export default class Header extends Entity implements IJSONSerializable, IJSONDeserializable<Header> {
    private _month_year: string | undefined
    private _identifier: string | undefined
    private _annex: string | undefined
    private _product: string | undefined
    private _origin_state: string | undefined
    private _cnpj_supplier: string | undefined
    private _ie_supplier: string | undefined
    private _destination_state: string | undefined
    private _others_state: string | undefined
    private _cnpj: string | undefined
    private _ie: string | undefined
    private _iest: string | undefined
    private _corporate_name: string | undefined
    private _address: string | undefined
    private _district: string | undefined
    private _county: string | undefined
    private _state: string | undefined
    private _zip_code: string | undefined
    private _email: string | undefined
    private _category: string | undefined
    private _phone: string | undefined
    private _contact: string | undefined
    private _contact_position: string | undefined
    private _contact_cpf: string | undefined
    private _contact_rg: string | undefined
    private _contact_state: string | undefined
    private _local: string | undefined
    private _date: string | undefined
    private _hour: string | undefined
    private _annex_origin: string | undefined

    constructor() {
        super()
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

    get annex(): string | undefined {
        return this._annex
    }

    set annex(value: string | undefined) {
        this._annex = value
    }

    get product(): string | undefined {
        return this._product
    }

    set product(value: string | undefined) {
        this._product = value
    }

    get origin_state(): string | undefined {
        return this._origin_state
    }

    set origin_state(value: string | undefined) {
        this._origin_state = value
    }

    get cnpj_supplier(): string | undefined {
        return this._cnpj_supplier
    }

    set cnpj_supplier(value: string | undefined) {
        this._cnpj_supplier = value
    }

    get ie_supplier(): string | undefined {
        return this._ie_supplier
    }

    set ie_supplier(value: string | undefined) {
        this._ie_supplier = value
    }

    get destination_state(): string | undefined {
        return this._destination_state
    }

    set destination_state(value: string | undefined) {
        this._destination_state = value
    }

    get others_state(): string | undefined {
        return this._others_state
    }

    set others_state(value: string | undefined) {
        this._others_state = value
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

    get contact_state(): string | undefined {
        return this._contact_state
    }

    set contact_state(value: string | undefined) {
        this._contact_state = value
    }

    get local(): string | undefined {
        return this._local
    }

    set local(value: string | undefined) {
        this._local = value
    }

    get date(): string | undefined {
        return this._date
    }

    set date(value: string | undefined) {
        this._date = value
    }

    get hour(): string | undefined {
        return this._hour
    }

    set hour(value: string | undefined) {
        this._hour = value
    }

    get annex_origin(): string | undefined {
        return this._annex_origin
    }

    set annex_origin(value: string | undefined) {
        this._annex_origin = value
    }

    public fromJSON(json: any): Header {
        if (!json) {
            return this
        }

        if (typeof json === 'string') {
            if (!JsonUtils.isJsonString(json)) {
                return this
            }
            json = JSON.parse(json)
        }

        if (json.id !== undefined) {
            this.id = json.id
        }

        if (json.month_year !== undefined) {
            this.month_year = json.month_year
        }

        if (json.identifier !== undefined) {
            this.identifier = json.identifier
        }

        if (json.annex !== undefined) {
            this.annex = json.annex
        }

        if (json.product !== undefined) {
            this.product = json.product
        }

        if (json.origin_state !== undefined) {
            this.origin_state = json.origin_state
        }

        if (json.cnpj_supplier !== undefined) {
            this.cnpj_supplier = json.cnpj_supplier
        }

        if (json.ie_supplier !== undefined) {
            this.ie_supplier = json.ie_supplier
        }

        if (json.destination_state !== undefined) {
            this.destination_state = json.destination_state
        }

        if (json.others_state !== undefined) {
            this.others_state = json.others_state
        }

        if (json.cnpj !== undefined) {
            this.cnpj = json.cnpj
        }

        if (json.ie !== undefined) {
            this.ie = json.ie
        }

        if (json.iest !== undefined) {
            this.iest = json.iest
        }

        if (json.corporate_name !== undefined) {
            this.corporate_name = json.corporate_name
        }

        if (json.address !== undefined) {
            this.address = json.address
        }

        if (json.district !== undefined) {
            this.district = json.district
        }

        if (json.county !== undefined) {
            this.county = json.county
        }

        if (json.state !== undefined) {
            this.state = json.state
        }

        if (json.zip_code !== undefined) {
            this.zip_code = json.zip_code
        }

        if (json.email !== undefined) {
            this.email = json.email
        }

        if (json.category !== undefined) {
            this.category = json.category
        }

        if (json.phone !== undefined) {
            this.phone = json.phone
        }

        if (json.contact !== undefined) {
            this.contact = json.contact
        }

        if (json.contact_position !== undefined) {
            this.contact_position = json.contact_position
        }

        if (json.contact_cpf !== undefined) {
            this.contact_cpf = json.contact_cpf
        }

        if (json.contact_rg !== undefined) {
            this.contact_rg = json.contact_rg
        }

        if (json.contact_state !== undefined) {
            this.contact_state = json.contact_state
        }

        if (json.local !== undefined) {
            this.local = json.local
        }

        if (json.date !== undefined) {
            this.date = json.date
        }

        if (json.hour !== undefined) {
            this.hour = json.hour
        }

        if (json.annex_origin !== undefined) {
            this.annex_origin = json.annex_origin
        }

        return this
    }

    public toJSON(): any {
        return {
            id: this.id || undefined,
            created_at: this.created_at || undefined,
            updated_at: this.updated_at || undefined,
            month_year: this.month_year || undefined,
            identifier: this.identifier || undefined,
            annex: this.annex || undefined,
            product: this.product || undefined,
            origin_state: this.origin_state || undefined,
            cnpj_supplier: this.cnpj_supplier || undefined,
            ie_supplier: this.ie_supplier || undefined,
            destination_state: this.destination_state || undefined,
            others_state: this.others_state || undefined,
            cnpj: this.cnpj || undefined,
            ie: this.ie || undefined,
            iest: this.iest || undefined,
            corporate_name: this.corporate_name || undefined,
            address: this.address || undefined,
            district: this.district || undefined,
            county: this.county || undefined,
            state: this.state || undefined,
            zip_code: this.zip_code || undefined,
            email: this.email || undefined,
            category: this.category || undefined,
            phone: this.phone || undefined,
            contact: this.contact || undefined,
            contact_position: this.contact_position || undefined,
            contact_cpf: this.contact_cpf || undefined,
            contact_rg: this.contact_rg || undefined,
            contact_state: this.contact_state || undefined,
            local: this.local || undefined,
            date: this.date || undefined,
            hour: this.hour || undefined,
            annex_origin: this.annex_origin || undefined
        }
    }
}
