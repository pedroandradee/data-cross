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
    private _MESANO?: string

    constructor(id?: string, created_at?: string, updated_at?: string, MESANO?: string) {
        super(id, created_at, updated_at)
        this._MESANO = MESANO
    }

    get MESANO(): string | undefined {
        return this._MESANO
    }

    set MESANO(value: string | undefined) {
        this._MESANO = value
    }

    public fromJSON(json: any): Annex2Table2D {
        if (!json) return this

        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }

        if (json.MESANO !== undefined) this._MESANO = json.MESANO

        return this
    }

    public toJSON(): any {
        return {
            MESANO: this.MESANO ? this.MESANO : undefined
        }
    }
}

