import { ValidationException } from '../exception/validation.exception'
import { PMPF } from '../model/pmpf'
import { StandardValidator } from './create.standard.validator'
import { ProductValidator } from './product'

export class PMPFValidator extends StandardValidator {
    public static validate(item: PMPF): void | ValidationException {
        super.validate(item)
        const fields: Array<string> = []

        if (!item.product) fields.push('product')
        else ProductValidator.validateProductPMPF(item.product)

        if (fields.length > 0) throw new ValidationException('Required fields were not provided...',
            'PMPF validation: '.concat(fields.join(', ')).concat(' required'))
    }
}

