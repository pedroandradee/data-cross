import { Aliquot_PMPF } from './aliquot-pmpf'

export class PMPF extends Aliquot_PMPF {

    fromJSON(json): PMPF {
        super.fromJSON(json)

        return this
    }

    toJSON(): any {
        return {
            ...super.toJSON()
        }
    }
}