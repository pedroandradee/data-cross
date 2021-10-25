import { ValidationException } from '../exception/validation.exception'
import { Annex2Table2H } from '../model/annex2table2h'

export class CreateAnnex2table2hValidator {
    public static validate(item: Annex2Table2H): void | ValidationException {
        const fields: Array<string> = []
        if (!item.cnpj_issuer) fields.push('cnpj_issuer')
        if (!item.ie_issuer) fields.push('ie_issuer')
        if (!item.state_issuer) fields.push('state_issuer')
        if (!item.month_year) fields.push('month_year')
        if (!item.identifier) fields.push('identifier')
        if (!item.cnpj) fields.push('cnpj')
        if (!item.ie) fields.push('ie')
        if (!item.iest) fields.push('iest')
        if (!item.corporate_name) fields.push('corporate_name')
        if (!item.address) fields.push('address')
        if (!item.district) fields.push('district')
        if (!item.county) fields.push('county')
        if (!item.zip_code) fields.push('zip_code')

        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Annex2Table2D validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
