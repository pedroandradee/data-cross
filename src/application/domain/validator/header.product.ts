import { ValidationException } from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'
import { HeaderProduct } from '../utils/header.product'

export const HEADER_PRODUCTS_ALLOWED: Array<string> = Object.values(HeaderProduct)

export class HeaderProductValidator {
    /**
     * Valid if the product value is within the allowed values.
     * Allowed values are described in the enum {HeaderProduct}
     * @param product
     */
    public static validate(product: string): void | ValidationException {
        if (!HEADER_PRODUCTS_ALLOWED.includes(product)) {
            throw new ValidationException(
                Strings.ERROR_MESSAGE.HEADER_PRODUCT.INVALID_VALUE.MESSAGE.replace('{0}', product),
                Strings.ERROR_MESSAGE.HEADER_PRODUCT.INVALID_VALUE.DESCRIPTION
            )
        }

    }
}
