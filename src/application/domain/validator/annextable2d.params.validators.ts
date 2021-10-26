import { ValidationException } from '../exception/validation.exception'
import { TextFieldsValidator } from './text.fields.validator'

export class Annex2DParamsValidators {
    public static validate_cnpj_issuer(name: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(name, 14, 'CNPJ Issuer')
    }

    // public static validate_ie_issuer(name: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(name, 1, 14, 'IE Issuer')
    // }

    // public static validate_state_issuer(name: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(name, 2, 2, 'State Issuer')
    // }

    public static validate_month_year(name: string): void | ValidationException {
        TextFieldsValidator.validateTextField(name, 6, 6, 'Month Year')
    }

    public static validate_identifier(name: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(name, 3, 'Identifier')
    }

    public static validate_cnpj(name: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(name, 14, 'CNPJ')
    }

    // public static validate_ie(name: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(name, 2, 14, 'IE')
    // }

    // public static validate_state(name: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(name, 2, 2, 'State')
    // }

    // public static validate_issue_date(name: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(name, 2, 90, 'Issue Date')
    // }

    public static validate_model(name: string): void | ValidationException {
        TextFieldsValidator.validateTextField(name, 1, 2, 'Model')
    }

    public static validate_serie(name: string): void | ValidationException {
        TextFieldsValidator.validateTextField(name, 1, 3, 'Serie')
    }

    // public static validate_nfe_number(name: string): void | ValidationException {
    //     TextFieldsValidator.validateStringIsNumberField(name, 1, 9, 'NFE Number')
    // }

    public static validate_cfop(password: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(password, 4, 'CFOP')
    }

    public static validate_nfe_product(password: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(password, 5, 'NFE Product')
    }

    // public static validate_icms_st_value(password: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(password, 3, 3, 'Product')
    // }

    public static validate_shipping_type(password: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(password, 1, 'Shipping Type')
    }

    public static validate_cnpj_freight(password: string): void | ValidationException {
        TextFieldsValidator.validateStringIsNumberFieldExactlyLength(password, 14, 'CNPJ Freight')
    }

    // public static validate_state_freight(password: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(password, 4, 14, 'State Freight')
    // }

    // public static validate_plate_1(password: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(password, 4, 7, 'Plate 1')
    // }

    // public static validate_plate_2(password: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(password, 4, 7, 'Password')
    // }

    // public static validate_plate_3(password: string): void | ValidationException {
    //     TextFieldsValidator.validateTextField(password, 4, 7, 'Password')
    // }
}
