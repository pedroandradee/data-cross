import { inject, injectable } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { IQuery } from '../port/query.interface'
import { IAnnex2Table2DRepository } from '../port/annex2table2d.repository'
import { ConflictException } from '../domain/exception/conflict.exception'
import { Strings } from '../../utils/strings'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { CreateAnnex2table2dValidator } from '../domain/validator/create.annex2table2d'
import { IAnnex2Table2DService } from '../port/annex2table2d.service'
import { Annex2Table2D } from '../domain/model/annex2table2d'

@injectable()
export class Annex2Table2DService implements IAnnex2Table2DService {
    constructor(
        @inject(Identifier.ANNEX2TABLE2D_REPOSITORY) readonly _repository: IAnnex2Table2DRepository
    ) {

    }

    public async add(item: Annex2Table2D): Promise<Annex2Table2D | undefined> {
        CreateAnnex2table2dValidator.validate(item)

        const exists = await this._repository.checkExists(item)
        if (exists) throw new ConflictException(Strings.ANNEX2TABLE2D.ALREADY_REGISTERED)

        const result: Annex2Table2D | undefined = await this._repository.create(item)

        return Promise.resolve(result)
    }

    public remove(id: string): Promise<boolean> {
        return this._repository.delete(id)
    }

    public getById(id: string, query: IQuery): Promise<Annex2Table2D | undefined> {
        try {
            ObjectIdValidator.validate(id)
            query.addFilter({ _id: id })
            return this._repository.findOne(query)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public async update(item: Annex2Table2D): Promise<Annex2Table2D | undefined> {
        try {
            CreateAnnex2table2dValidator.validate(item)

            const exists: boolean = await this._repository.checkExists(item)
            if (!exists) return Promise.resolve(undefined)

            return this._repository.update(item)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    public getAll(query: IQuery): Promise<Array<Annex2Table2D>> {
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
