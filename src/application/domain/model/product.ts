import { JsonUtils } from '../utils/json.utils'
import { Entity } from './entity'
import { IJSONSerializable } from '../utils/json.serializable.interface'
import { IJSONDeserializable } from '../utils/json.deserializable.interface'

export default class Product extends Entity implements IJSONSerializable, IJSONDeserializable<Product> {
    private _product: string | undefined
    private _description: string | undefined
    private _unity: string | undefined

    get product(): string | undefined {
        return this._product
    }

    set product(value: string | undefined) {
        this._product = value
    }

    get description(): string | undefined {
        return this._description
    }

    set description(value: string | undefined) {
        this._description = value
    }

    get unity(): string | undefined {
        return this._unity
    }

    set unity(value: string | undefined) {
        this._unity = value
    }

    constructor() {
        super()
    }

    public fromJSON(json: any): Product {
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

        if (json.product !== undefined) {
            this.product = json.product
        }

        if (json.description !== undefined) {
            this.description = json.description
        }

        if (json.unity !== undefined) {
            this.unity = json.unity
        }

        return this
    }

    public toJSON(): any {
        return {
            id: this.id || undefined,
            created_at: this.created_at || undefined,
            product: this.product || undefined,
            description: this.description || undefined,
            unity: this.unity || undefined
        }
    }
}
