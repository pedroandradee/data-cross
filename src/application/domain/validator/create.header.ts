import { ValidationException } from '../exception/validation.exception'
import Header from '../model/header'
import { MonthYearValidator } from './month.year'

export class CreateHeaderValidator {
    public static validate(item: Header): void | ValidationException {
        const fields: Array<string> = []

        if (!item.month_year) fields.push('month_year')
        else MonthYearValidator.validate(item.month_year)

        if (!item.identifier) fields.push('identifier')
        if (!item.cnpj) fields.push('cnpj')
        if (!item.ie) fields.push('ie')
        if (!item.state) fields.push('state')
        if (!item.product) fields.push('product')

        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Header validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
