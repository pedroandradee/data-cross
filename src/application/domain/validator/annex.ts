import { ValidationException } from '../exception/validation.exception'
import { Strings } from '../../../utils/strings'
import { HeaderAnnex } from '../utils/annex'

export const ANNEX_ALLOWED: Array<string> = Object.values(HeaderAnnex)

export class AnnexValidator {
    /**
     * Valid if the annex value is within the allowed values.
     * Allowed values are described in the enum {HeaderAnnex}
     * @param annex
     */
    public static validate(annex: string): void | ValidationException {

        if (!ANNEX_ALLOWED.includes(annex)) {
            throw new ValidationException(
                Strings.ERROR_MESSAGE.ANNEX.INVALID_VALUE.MESSAGE.replace('{0}', annex),
                Strings.ERROR_MESSAGE.ANNEX.INVALID_VALUE.DESCRIPTION
            )
        }

    }
}
