import { ValidationException } from '../exception/validation.exception'
import { Standard } from '../model/standard'
import { DateValidator } from './date'
import { StateValidator } from './state'
import { TextFieldsValidator } from './text.fields.validator'
import { YearValidator } from './year'

export class StandardValidator {
    public static validate(item: Standard): void | ValidationException {
        const fields: Array<string> = []

        if (!item.standard) fields.push('standard')
        else TextFieldsValidator.validateStringIsNumberField(item.standard, 4, 10, 'standard')

        if (!item.num) fields.push('num')
        else TextFieldsValidator.validateStringIsNumberField(item.num, 1, 8, 'num')

        if (!item.year) fields.push('year')
        else YearValidator.validate(item.year)

        if (!item.state) fields.push('state')
        else StateValidator.validate('state', item.state)

        if (!item.start_date) fields.push('start_date')
        else DateValidator.validate(item.start_date)

        if (!item.end_date) fields.push('end_date')
        else DateValidator.validate(item.end_date)

        if (!item.value) fields.push('value')
        else TextFieldsValidator.validateNumberField(item.value, 'value')

        if (fields.length > 0) throw new ValidationException('Required fields were not provided...',
            'Aliquot validation: '.concat(fields.join(', ')).concat(' required'))
    }
}
