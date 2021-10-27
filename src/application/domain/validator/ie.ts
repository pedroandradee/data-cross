import { ValidationException } from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'
import { FieldToCamelCase } from '../utils/field.to.camel.case'

export class IEValidator {
    /**
     * Validate format /^\d{0,14}$/gi or 'ISENTO'
     * @param field
     * @param ie
     */
    public static validate(field: string, ie: string): void | ValidationException {
        const fieldCamelCase: string = FieldToCamelCase.fieldToCamelCase(field)
        if (!(/^\d{0,14}$/gi).test(ie) && ie !== 'ISENTO') {
            throw new ValidationException(
                Strings.ERROR_MESSAGE.IE.INVALID_VALUE.MESSAGE
                    .replace('{0}', fieldCamelCase)
                    .replace('{1}', ie),
                Strings.ERROR_MESSAGE.IE.INVALID_VALUE.DESCRIPTION
                    .replace('{0}', field)
            )
        }

    }
}
