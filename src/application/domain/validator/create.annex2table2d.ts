import { ValidationException } from '../exception/validation.exception'
import { Annex2Table2D } from '../model/annex2table2d'

export class CreateAnnex2table2dValidator {
    public static validate(item: Annex2Table2D): void | ValidationException {
        const fields: Array<string> = []
        if (!item.cnpj_issuer) fields.push('cnpj_issuer')

        if (!item.ie_issuer) fields.push('ie_issuer')

        if (!item.state_issuer) fields.push('state_issuer')

        if (!item.month_year) fields.push('month_year')

        if (!item.identifier) fields.push('identifier')

        if (!item.cnpj) fields.push('cnpj')

        if (!item.ie) fields.push('ie')

        if (!item.state) fields.push('state')

        if (!item.issue_date) fields.push('issue_date')

        if (!item.model) fields.push('model')

        if (!item.serie) fields.push('serie')

        if (!item.nfe_number) fields.push('nfe_number')

        if (!item.cfop) fields.push('cfop')

        if (!item.nfe_product) fields.push('nfe_product')

        if (!item.product) fields.push('product')

        if (!item.amount) fields.push('amount')

        if (!item.amount_consumer_product) fields.push('amount_consumer_product')

        if (!item.startting_value) fields.push('startting_value')

        if (!item.bcst_value) fields.push('bcst_value')

        if (!item.icms_rate) fields.push('icms_rate')

        if (!item.icms_st_value) fields.push('icms_st_value')

        if (!item.shipping_type) fields.push('shipping_type')

        if (!item.cnpj_freight) fields.push('cnpj_freight')

        if (!item.state_freight) fields.push('state_freight')

        if (!item.plate_1) fields.push('plate_1')

        if (!item.plate_2) fields.push('plate_2')

        if (!item.plate_3) fields.push('plate_3')

        if (!item.destination) fields.push('destination')

        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Annex2Table2D validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
