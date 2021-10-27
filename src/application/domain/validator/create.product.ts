import { ValidationException } from '../exception/validation.exception'
import Product from '../model/product'
import { TextFieldsValidator } from './text.fields.validator'

export class CreateProductValidator {
    public static validate(item: Product): void | ValidationException {
        const fields: Array<string> = []

        if (!item.product) fields.push('product')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.product, 5, 'Product')

        if (!item.description) fields.push('description')
        else TextFieldsValidator.validateTextField(item.description, 4, 60, 'Description')

        if (!item.unity) fields.push('unity')
        else TextFieldsValidator.validateTextFieldOnlyLetter(item.unity, 1, 3, 'Unity')

        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Product validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
