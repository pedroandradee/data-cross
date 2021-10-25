import { inject, injectable } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
import { IAnnex2Table2HRepository } from '../port/annex2table2h.repository'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { CreateAnnex2table2hValidator } from '../domain/validator/create.annex2table2h'
import { IAnnex2Table2HService } from '../port/annex2table2h.service'
import { Annex2Table2H } from '../domain/model/annex2table2h'

@injectable()
export class Annex2Table2HService implements IAnnex2Table2HService {
    constructor(
        @inject(Identifier.ANNEX2TABLE2H_REPOSITORY) readonly _repository: IAnnex2Table2HRepository
    ) {
    }

    public async add(item: Annex2Table2H): Promise<Annex2Table2H | undefined> {
        CreateAnnex2table2hValidator.validate(item)

        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.ANNEX2TABLE2D.ALREADY_REGISTERED)

        const result: Annex2Table2H | undefined = await this._repository.create(item)

        return Promise.resolve(result)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public getById(id: string, query: IQuery): Promise<Annex2Table2H | undefined> {
        try {
            ObjectIdValidator.validate(id)
            query.addFilter({ _id: id })
            return this._repository.findOne(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async update(item: Annex2Table2H): Promise<Annex2Table2H | undefined> {
        try {
            CreateAnnex2table2hValidator.validate(item)

            const exists: boolean = await this._repository.checkExists(item)
            if (!exists) return Promise.resolve(undefined)

            return this._repository.update(item)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public getAll(query: IQuery): Promise<Array<Annex2Table2H>> {
        return this._repository.find(query)
    }

    public count(query?: IQuery): Promise<number> {
        try {
            return this._repository.count(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}
