import { ValidationException } from '../exception/validation.exception'
import { Aliquot } from '../model/aliquot'
import { StandardValidator } from './create.standard.validator'
import { ProductValidator } from './product'

export class AliquotValidator extends StandardValidator {
    public static validate(item: Aliquot): void | ValidationException {
        super.validate(item)
        const fields: Array<string> = []

        if (!item.product) fields.push('product')
        else ProductValidator.validateProductAliquot(item.product)

        if (fields.length > 0) throw new ValidationException('Required fields were not provided...',
            'Aliquot validation: '.concat(fields.join(', ')).concat(' required'))
    }
}
