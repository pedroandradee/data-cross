import { ValidationException } from '../exception/validation.exception'
import Header from '../model/header'
import { MonthYearValidator } from './month.year'
import { StateValidator } from './state'
import { HeaderProductValidator } from './header.product'
import { AnnexValidator } from './annex'
import { IEValidator } from './ie'
import { TextFieldsValidator } from './text.fields.validator'
import { HeaderCategoryValidator } from './header.category'
import { DateValidator } from './date'
import { HourValidator } from './hour'

export class CreateHeaderValidator {
    public static validate(item: Header): void | ValidationException {
        const fields: Array<string> = []

        if (!item.month_year) fields.push('month_year')
        else MonthYearValidator.validate(item.month_year)

        if (!item.identifier) fields.push('identifier')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.identifier, 3, 'Identifier')

        if (!item.annex) fields.push('annex')
        else AnnexValidator.validate(item.annex)

        if (!item.product) fields.push('product')
        else HeaderProductValidator.validate(item.product)

        if (!item.origin_state) fields.push('origin_state')
        else StateValidator.validate('origin_state', item.origin_state)

        if (!item.cnpj_supplier) fields.push('cnpj_supplier')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.cnpj_supplier, 14, 'Cnpj Supplier')

        if (!item.ie_supplier) fields.push('ie_supplier')
        else IEValidator.validate('ie_supplier', item.ie_supplier)

        if (!item.destination_state) fields.push('destination_state')
        else StateValidator.validate('destination_state', item.destination_state)

        if (!item.others_state) fields.push('others_state')
        else StateValidator.validate('others_state', item.others_state)

        if (!item.cnpj) fields.push('cnpj')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.cnpj, 14, 'Cnpj')

        if (!item.ie) fields.push('ie')
        else IEValidator.validate('ie', item.ie)

        if (!item.iest) fields.push('iest')
        else IEValidator.validate('iest', item.iest)

        if (!item.corporate_name) fields.push('corporate_name')
        else TextFieldsValidator.validateTextField(item.corporate_name, 2, 60, 'Corporate Name')

        if (!item.address) fields.push('address')
        else TextFieldsValidator.validateTextField(item.address, 2, 60, 'Address')

        if (!item.district) fields.push('district')
        else TextFieldsValidator.validateTextField(item.district, 2, 30, 'District')

        if (!item.county) fields.push('county')
        else TextFieldsValidator.validateTextField(item.county, 2, 40, 'County')

        if (!item.state) fields.push('state')
        else StateValidator.validate('state', item.state)

        if (!item.zip_code) fields.push('zip_code')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.zip_code, 8, 'Zip Code')

        if (!item.email) fields.push('email')
        else TextFieldsValidator.validateTextField(item.email, 2, 60, 'Email')

        if (!item.category) fields.push('category')
        else HeaderCategoryValidator.validate(item.category)

        if (!item.phone) fields.push('phone')
        else TextFieldsValidator.validateStringIsNumberField(item.phone, 10, 12, 'Phone')

        if (!item.contact) fields.push('contact')
        else TextFieldsValidator.validateTextField(item.contact, 2, 40, 'Contact')

        if (!item.contact_position) fields.push('contact_position')
        else TextFieldsValidator.validateTextField(item.contact_position, 2, 40, 'Contact Position')

        if (!item.contact_cpf) fields.push('contact_cpf')
        else TextFieldsValidator.validateStringIsNumberFieldExactlyLength(item.contact_cpf, 11, 'Contact Cpf')

        if (!item.contact_rg) fields.push('contact_rg')
        else TextFieldsValidator.validateStringIsNumberField(item.contact_rg, 4, 14, 'Contact Cpf')

        if (!item.contact_state) fields.push('contact_state')
        else StateValidator.validate('contact_state', item.contact_state)

        if (!item.local) fields.push('local')
        else TextFieldsValidator.validateTextField(item.local, 2, 40, 'Local')

        if (!item.date) fields.push('date')
        else DateValidator.validate(item.date)

        if (!item.hour) fields.push('hour')
        else HourValidator.validate(item.hour)

        if (!item.annex_origin && item.annex_origin !== '') fields.push('annex_origin')
        else TextFieldsValidator.validateTextField(item.annex_origin, 0, 1, 'Annex Origin')

        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Header validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
