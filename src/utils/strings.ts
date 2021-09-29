/**
 * Class that defines variables with default values.
 *
 * @see Variables defined in .env will have preference.
 * @see Be careful not to put critical data in this file as it is not in .gitignore.
 * Sensitive data such as database, passwords and keys should be stored in secure locations.
 *
 * @abstract
 */
export abstract class Strings {
    public static readonly APP: any = {
        TITLE: 'DATA CROSS API',
        APP_DESCRIPTION: 'Service responsible for performing the crossing of data obtained from the SCANC system with the invoices obtained from the ATF system.'
    }

    public static readonly PARAMETERS: any = {
        COULD_NOT_BE_UPDATED: 'Some fields could not be updated...'
    }

    public static readonly ANNEX2TABLE2D: any = {
        ALREADY_REGISTERED: 'A Annex2Table2D already registered!',
        NOT_FOUND: 'Annex2Table2D not found!',
        NOT_FOUND_DESCRIPTION: 'Annex2Table2D not found or already removed. A new operation for the same resource is required!'
    }

    public static readonly ERROR_MESSAGE: any = {
        UNEXPECTED: 'An unexpected error has occurred. Please try again later...',
        UUID_NOT_VALID_FORMAT: 'Some ID provided does not have a valid format!',
        UUID_NOT_VALID_FORMAT_DESC: 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.',
        PARAMETER_COULD_NOT_BE_UPDATED: 'This parameter could not be updated.',
        OPERATION_CANT_BE_COMPLETED: 'The operation could not be performed successfully.',
        OPERATION_CANT_BE_COMPLETED_DESC: 'Probably one or more of the request parameters are incorrect.',
        INTERNAL_SERVER_ERROR: 'An internal server error has occurred.',
        INTERNAL_SERVER_ERROR_DESC: 'Check all parameters of the operation being requested.',
        INVALID_FIELDS: 'One or more request fields are invalid...',
        INTEGER_GREATER_ZERO: '{0} must be an integer greater than zero.',
        NUMBER_GREATER_ZERO: '{0} must be a number greater than zero.',
        INVALID_DATE_FORMAT: 'Date: {0}, is not in valid ISO 8601 format.',
        INVALID_DATE_FORMAT_DESC: 'Date must be in the format: yyyy-MM-dd',
        INVALID_DATETIME_FORMAT: 'Datetime: {0}, is not in valid ISO 8601 format.',
        INVALID_DATETIME_FORMAT_DESC: 'Datetime must be in the format: yyyy-MM-ddTHH:mm:ssZ'
    }
}
