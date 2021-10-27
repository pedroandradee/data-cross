import { Aliquot_PMPF } from './aliquot-pmpf'

export class Aliquot extends Aliquot_PMPF {

    fromJSON(json): Aliquot {
        super.fromJSON(json)

        return this
    }

    toJSON(): any {
        return {
            ...super.toJSON()
        }
    }
}