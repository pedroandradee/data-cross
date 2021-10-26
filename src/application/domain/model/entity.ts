/**
 * Implementation of generic entity.
 * Theoretically, the other entity must inherit it.
 *
 * @abstract
 */

export abstract class Entity {
    private _id?: string
    private _created_at?: string
    private _updated_at?: string
    private _sha512?: string

    protected constructor(id?: string, created_at?: string, updated_at?: string, sha512?: string) {
        this._id = id
        this._created_at = created_at
        this._updated_at = updated_at
        this._sha512 = sha512
    }

    get id(): string | undefined {
        return this._id
    }

    set id(value: string | undefined) {
        this._id = value
    }

    get created_at(): string | undefined {
        return this._created_at
    }

    set created_at(value: string | undefined) {
        this._created_at = value
    }

    get updated_at(): string | undefined {
        return this._updated_at
    }

    set updated_at(value: string | undefined) {
        this._updated_at = value
    }

    get sha512(): string | undefined {
        return this._sha512
    }

    set sha512(value: string | undefined) {
        this._sha512 = value
    }

    public abstract toJSON(): any

    /**
     * Concatenate field values into a single string
     */
    public concatToString(): string {
        const excludeKeys = ['id', 'created_at', 'updated_at', 'sha512']
        return Object
            .keys(this.toJSON())
            .filter(key => excludeKeys.every(excludedKey => excludedKey !== key))
            .map(key => this[key].toString().replace(/ /g, ''))
            .join('')
    }

}

