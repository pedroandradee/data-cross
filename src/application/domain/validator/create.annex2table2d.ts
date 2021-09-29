import { ValidationException } from '../exception/validation.exception'
import { Annex2Table2D } from '../model/annex2table2d'

export class CreateAnnex2table2dValidator {
    public static validate(item: Annex2Table2D): void | ValidationException {
        const fields: Array<string> = []
        if (!item.MESANO) fields.push('MESANO')
        if (fields.length > 0) {
            throw new ValidationException('Required fields were not provided...',
                'Annex2Table2D validation: '.concat(fields.join(', ')).concat(' required!'))
        }
    }
}
