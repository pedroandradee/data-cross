import { inject, injectable } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
/* TODO: Descomentar depois do merge
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
 */
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { IPMPFService } from '../port/pmpf.service'
import { PMPF } from '../domain/model/pmpf'
import { IPMPFRepository } from '../port/pmpf.repository'
import { PMPFValidator } from '../domain/validator/create.pmpf.validator'

@injectable()
export class PMPFService implements IPMPFService {
    constructor(
        @inject(Identifier.PMPF_REPOSITORY) readonly _repository: IPMPFRepository
    ) {

    }

    public async add(item: PMPF): Promise<PMPF | undefined> {
        PMPFValidator.validate(item)

        /*
         TODO: Descomentar depois do merge.
        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.StringsException('PMPF').ALREADY_REGISTERED)
        */

        return this._repository.create(item)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public getById(id: string, query: IQuery): Promise<PMPF | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public async update(item: PMPF): Promise<PMPF | undefined> {
        PMPFValidator.validate(item)

        /* TODO: Descomentar depois do merge
        const exists: boolean = await this._repository.checkExists(item)
        if (!exists) return Promise.resolve(undefined)
        */

        return this._repository.update(item)
    }

    public getAll(query: IQuery): Promise<Array<PMPF>> {
        return this._repository.find(query)
    }

    public count(query?: IQuery): Promise<number> {
        return this._repository.count(query)
    }
}
