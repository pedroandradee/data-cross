import { inject, injectable } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
/* TODO: Descomentar depois do merge
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
*/
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { IAliquotService } from '../port/aliquot.service'
import { Aliquot } from '../domain/model/aliquot'
import { AliquotValidator } from '../domain/validator/create.aliquot.validator'
import { IAliquotRepository } from '../port/aliquot.repository'

@injectable()
export class AliquotService implements IAliquotService {
    constructor(
        @inject(Identifier.ALIQUOT_REPOSITORY) readonly _repository: IAliquotRepository
    ) {

    }

    public async add(item: Aliquot): Promise<Aliquot | undefined> {
        AliquotValidator.validate(item)

        /* TODO: Descomentar depois do merge.
        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.Strings.StringsException('Aliquot').ALREADY_REGISTERED)
        */

        return this._repository.create(item)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public async getById(id: string, query: IQuery): Promise<Aliquot | undefined> {
        ObjectIdValidator.validate(id)
        query.addFilter({ _id: id })
        return this._repository.findOne(query)
    }

    public async update(item: Aliquot): Promise<Aliquot | undefined> {
        AliquotValidator.validate(item)

        /* TODO: Descomentar depois do merge
        const exists: boolean = await this._repository.checkExists(item)
        if (!exists) return Promise.resolve(undefined)
        */

        return this._repository.update(item)
    }

    public getAll(query: IQuery): Promise<Array<Aliquot>> {
        return this._repository.find(query)
    }

    public count(query?: IQuery): Promise<number> {
        return this._repository.count(query)
    }
}
