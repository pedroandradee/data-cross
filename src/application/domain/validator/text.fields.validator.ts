import { ValidationException} from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'

export class TextFieldsValidator {
    public static validateTextField(text: string, min: number, max: number, field: string): void | ValidationException {
        if (typeof text !== 'string') {
            throw new ValidationException(Strings.ERROR_MESSAGE.VALIDATE.INVALID_FIELDS,
                Strings.ERROR_MESSAGE.VALIDATE.INVALID_STRING.replace('{0}', field))
        } else if (min === max && (text.length < min || text.length > max) ) {
            throw new ValidationException(
                `${field} must contain a exactly number of ${max} caracteres.`)
        } else if (text.length < min || text.length > max) {
            throw new ValidationException(
                `${field} must contain a minimum of ${min} and a maximum of ${max} characters.`)
        }
    }

    public static validateStringIsNumberField(text: string, exactlyNumber: number, field: string): void | ValidationException {
        if (typeof text !== 'string') {
            throw new ValidationException(Strings.ERROR_MESSAGE.VALIDATE.INVALID_FIELDS,
                Strings.ERROR_MESSAGE.VALIDATE.INVALID_STRING.replace('{0}', field))
        } else if (text.length !== exactlyNumber) {
            throw new ValidationException(
                `${field} must contain a exactly number of ${exactlyNumber} caracteres.`)
        } else if (!(/^[0-9]${14}$/.test(text))) {
            throw new ValidationException(
                `${field} must contain only Numbers.`)
        }
    }

    public static validateNumberField(text: number, field: number): void | ValidationException {
        if (typeof text !== 'number') {
            throw new ValidationException(Strings.ERROR_MESSAGE.VALIDATE.INVALID_FIELDS,
                Strings.ERROR_MESSAGE.VALIDATE.INVALID_NUMBER.replace('{0}', field))
        } else if (text <= 0) {
            throw new ValidationException(
                `${field} must contain a positive value greater than 0.`)
        }
    }
}
