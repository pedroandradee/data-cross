import { ProductAliquotType, TypeStandard } from '../utils/standard.types'
import { Standard } from './standard'

export class Aliquot extends Standard {

    private _product?: ProductAliquotType

    constructor() {
        super()
        this.type = TypeStandard.ALIQUOT
    }

    get product(): ProductAliquotType | undefined {
        return this._product
    }

    set product(value: ProductAliquotType | undefined) {
        this._product = value
    }

    public fromJSON(json): Aliquot {
        super.fromJSON(json)

        if (json.product !== undefined) this.product = json.product

        return this
    }

    public toJSON(): any {
        return {
            ...super.toJSON(),
            product: this.product || undefined
        }
    }
}
