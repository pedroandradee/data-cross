import { ValidationException } from '../exception/validation.exception'
import { Standard } from '../model/standard'
import { TextFieldsValidator } from './text.fields.validator'
import { YearValidator } from './year'

export class StandardValidator {
    public static validate(item: Standard): void | ValidationException {
        const fields: Array<string> = []

        if (!item.standard) fields.push('standard')
        // TODO: Verificar o valor 10
        else TextFieldsValidator.validateStringIsNumberField(item.standard, 10, 'standard')

        if (!item.num) fields.push('num')
        // TODO: Verificar o valor 10
        else TextFieldsValidator.validateStringIsNumberField(item.num, 10, 'num')

        if (!item.year) fields.push('year')
        else YearValidator.validate(item.year)

        // TODO: Adicionar os validadores após o merge
        if (!item.state) fields.push('state')
        if (!item.start_date) fields.push('start_date')
        if (!item.end_date) fields.push('end_date')


        if (!item.value) fields.push('value')
        else TextFieldsValidator.validateNumberField(item.value, 'value')

        if (fields.length > 0) throw new ValidationException('Required fields were not provided...',
            'Aliquot validation: '.concat(fields.join(', ')).concat(' required'))
    }
}
