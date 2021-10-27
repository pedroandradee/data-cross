import { ProductPMPFType, TypeStandard } from '../utils/standard.types'
import { Standard } from './standard'

export class PMPF extends Standard {

    private _product?: ProductPMPFType

    constructor() {
        super()
        this.type = TypeStandard.PMPF
    }

    get product(): ProductPMPFType | undefined {
        return this._product
    }

    set product(value: ProductPMPFType | undefined) {
        this._product = value
    }

    public fromJSON(json): PMPF {
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
