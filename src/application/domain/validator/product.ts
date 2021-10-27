import { ValidationException } from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'
import { ProductAliquotType, ProductPMPFType } from '../utils/standard.types'

export class ProductValidator {

    /**
     * 
     * @param type 
     */
    public static validateProductAliquot(type: string): void | ValidationException {
        this.validateProduct(type, ProductAliquotType)
    }

    /**
     * 
     * @param type 
     */
    public static validateProductPMPF(type: string): void | ValidationException {
        this.validateProduct(type, ProductPMPFType)
    }

    /**
     * 
     * @param type 
     * @param enumeration 
     */
    private static validateProduct(type: string, enumeration: any): void | ValidationException {
        const op: Array<string> = Object.values(enumeration)
        // Validate date format ISO 8601
        if (!op.includes(type)) throw new ValidationException(Strings.ERROR_MESSAGE.VALIDATE_PRODUCT.MESSAGE.replace('{0}', type),
            Strings.ERROR_MESSAGE.VALIDATE_PRODUCT.DESCRIPTION.replace('{0}', op.join(', ')))
    }
}
