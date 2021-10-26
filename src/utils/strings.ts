import { MONTHS } from '../application/domain/validator/month.year'
import { ANNEX_ALLOWED } from '../application/domain/validator/annex'
import { HEADER_PRODUCTS_ALLOWED } from '../application/domain/validator/header.product'
import { STATE_ALLOWED } from '../application/domain/validator/state'
import { CATEGORY_ALLOWED } from '../application/domain/validator/header.category'

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

    public static readonly HEADER: any = {
        ALREADY_REGISTERED: 'A header already registered!',
        NOT_FOUND: 'Header not found!',
        NOT_FOUND_DESCRIPTION: 'Header not found or already removed. A new operation for the same resource is required!'
    }

    public static readonly ANNEX2TABLE2D: any = {
        ALREADY_REGISTERED: 'A Annex2Table2D already registered!',
        NOT_FOUND: 'Annex2Table2D not found!',
        NOT_FOUND_DESCRIPTION: 'Annex2Table2D not found or already removed. A new operation for the same resource is required!'
    }

    public static readonly COMPANY: any = {
        ALREADY_REGISTERED: 'A Company already registered!',
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
        INVALID_DATETIME_FORMAT_DESC: 'Datetime must be in the format: yyyy-MM-ddTHH:mm:ssZ',
        VALIDATE: {
            REQUIRED_FIELDS: 'Required fields were not provided...',
            REQUIRED_FIELDS_DESC: '{0} are required!',
            UUID_NOT_VALID_FORMAT: 'Some ID provided does not have a valid format!',
            UUID_NOT_VALID_FORMAT_DESC: 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.',
            INVALID_FIELDS: 'One or more request fields are invalid...',
            INVALID_STRING: '{0} must be a string!',
            INVALID_NUMBER: '{0} must be a number!',
            EMPTY_STRING: '{0} must have at least one character!',
            INTEGER_GREATER_ZERO: '{0} must be an integer greater than zero.',
            NUMBER_GREATER_ZERO: '{0} must be a number greater than zero.',
            INVALID_DATA_TYPES_DESC: 'The data_types array must contain at least one element.',
            IMAGE_FORMAT_DESC: 'The image format must be jpg, jpeg or png.',
            IMAGE_SIZE_TOO_LARGE: 'The image size must be equal to or less than 500kb.'
        },
        DATE: {
            YEAR_NOT_ALLOWED: {
                MESSAGE: 'Date {0} has year not allowed.',
                DESCRIPTION: `The year must be greater than 1678 and less than 3000.`
            },
            MONTH_NOT_ALLOWED: {
                MESSAGE: 'Month year {0} has month not allowed.',
                DESCRIPTION: `The month must be a value between ${MONTHS.join(', ')}`
            },
            INVALID_MONTH_YEAR_FORMAT: {
                MESSAGE: 'Month year: {0}, is not in valid format.',
                DESCRIPTION: 'Month year must follow MMyyyy format.'
            }
        },
        HOUR: {
            INVALID_FORMAT: {
                MESSAGE: 'Hour: {0}, is not in valid ISO 8601 format.',
                DESCRIPTION: `Hour must be in the format: hh:mm:ss`
            },
            HOUR_NOT_ALLOWED: {
                MESSAGE: 'Hour {0} has hour not allowed.',
                DESCRIPTION: `The hour must be greater than 0 and less than 24.`
            },
            MINUTE_NOT_ALLOWED: {
                MESSAGE: 'Hour {0} has hour not allowed.',
                DESCRIPTION: `The minutes must be greater than 0 and less than 60.`
            },
            SECOND_NOT_ALLOWED: {
                MESSAGE: 'Hour {0} has hour not allowed.',
                DESCRIPTION: `The seconds must be greater than 0 and less than 60.`
            }
        },
        IDENTIFIER: {
            INVALID_FORMAT: {
                MESSAGE: 'Identifier: {0}, is not in valid format.',
                DESCRIPTION: 'The identifier must follow the format ddd, where d is a digit between [0-9].'
            }
        },
        ANNEX: {
            INVALID_VALUE: {
                MESSAGE: 'Annex: {0}, is not in valid value.',
                DESCRIPTION: `The annex must have one of the allowed values, they are: ${ANNEX_ALLOWED.join(',')}`
            }
        },
        HEADER_PRODUCT: {
            INVALID_VALUE: {
                MESSAGE: 'Product: {0}, is not in valid value.',
                DESCRIPTION: `The product must have one of the allowed values, they are: ${HEADER_PRODUCTS_ALLOWED.join(',')}`
            }
        },
        STATE: {
            INVALID_VALUE: {
                MESSAGE: '{0}: {1}, is not in valid value.',
                DESCRIPTION: `The {0} must have one of the allowed values, they are: ${STATE_ALLOWED.join(',')}`
            }
        },
        CNPJ: {
            INVALID_VALUE: {
                MESSAGE: '{0}: {1}, is not in valid value.',
                DESCRIPTION: `The {0} must follow the format ^\d{14}$ , where d is a digit between [0-9].`
            }
        },
        IE: {
            INVALID_VALUE: {
                MESSAGE: '{0}: {1}, is not in valid value.',
                DESCRIPTION: `The {0} must follow the format ^\d{0,14}$ or 'ISENTO' , where d is a digit between [0-9].`
            }
        },
        ZIP_CODE: {
            INVALID_FORMAT: {
                MESSAGE: 'Zip Code: {0}, is not in valid format.',
                DESCRIPTION: 'The zip_code must follow the format ^\d{8}$, where d is a digit between [0-9].'
            }
        },
        CATEGORY: {
            INVALID_VALUE: {
                MESSAGE: 'Category: {0}, is not in valid value.',
                DESCRIPTION: `The category must have one of the allowed values, they are: ${CATEGORY_ALLOWED.join(',')}`
            }
        }
    }
}
