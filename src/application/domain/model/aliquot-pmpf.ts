import { IJSONDeserializable } from '../utils/json.deserializable.interface'
import { IJSONSerializable } from '../utils/json.serializable.interface'
import { JsonUtils } from '../utils/json.utils'
import { Entity } from './entity'

export class Aliquot_PMPF extends Entity implements IJSONSerializable, IJSONDeserializable<Aliquot_PMPF> {

    private _standard?: string
    private _num?: string
    private _year?: string
    private _state?: string
    private _start_date?: string
    private _end_date?: string
    private _product?: string
    private _value?: number

    get standard(): string | undefined {
        return this._standard
    }

    set standard(value: string | undefined) {
        this._standard = value
    }

    get num(): string | undefined {
        return this._num
    }

    set num(value: string | undefined) {
        this._num = value
    }

    get year(): string | undefined {
        return this._year
    }

    set year(value: string | undefined) {
        this._year = value
    }

    get state(): string | undefined {
        return this._state
    }

    set state(value: string | undefined) {
        this._state = value
    }

    get start_date(): string | undefined {
        return this._start_date
    }

    set start_date(value: string | undefined) {
        this._start_date = value
    }

    get end_date(): string | undefined {
        return this._end_date
    }

    set end_date(value: string | undefined) {
        this._end_date = value
    }

    get product(): string | undefined {
        return this._product
    }

    set product(value: string | undefined) {
        this._product = value
    }

    get value(): number | undefined {
        return this._value
    }

    set value(value: number | undefined) {
        this._value = value
    }


    public fromJSON(json: any): Aliquot_PMPF {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.standard !== undefined) this.standard = json.standard
        if (json.num !== undefined) this.num = json.num
        if (json.year !== undefined) this.year = json.year
        if (json.state !== undefined) this.state = json.state
        if (json.start_date !== undefined) this.start_date = json.start_date
        if (json.end_date !== undefined) this.end_date = json.end_date
        if (json.product !== undefined) this.product = json.product
        if (json.value !== undefined) this.value = json.value

        return this
    }

    toJSON(): any {
        return {
            standard: this.standard || undefined,
            num: this.num || undefined,
            year: this.year || undefined,
            state: this.state || undefined,
            start_date: this.start_date || undefined,
            end_date: this.end_date || undefined,
            product: this.product || undefined,
            value: this.value || undefined
        }
    }










}