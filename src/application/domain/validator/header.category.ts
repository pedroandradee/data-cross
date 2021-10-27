import { ValidationException } from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'
import { HeaderCategory } from '../utils/header.category'

export const CATEGORY_ALLOWED: Array<string> = Object.values(HeaderCategory)

export class HeaderCategoryValidator {
    /**
     * Valid if the category value is within the allowed values.
     * Allowed values are described in the enum {HeaderCategory}
     * @param category
     */
    public static validate(category: string): void | ValidationException {

        if (!CATEGORY_ALLOWED.includes(category)) {
            throw new ValidationException(
                Strings.ERROR_MESSAGE.CATEGORY.INVALID_VALUE.MESSAGE.replace('{0}', category),
                Strings.ERROR_MESSAGE.CATEGORY.INVALID_VALUE.DESCRIPTION
            )
        }

    }
}
