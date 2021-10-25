// import { inject, injectable } from 'inversify'
// import { Identifier } from '../../di/identifiers'
// import { IQuery } from '../port/query.interface'
// import { ICompany } from '../port/company.repository'
// import { ConflictException } from '../domain/exception/conflict.exception'
// import { Strings } from '../../utils/strings'
// import { ObjectIdValidator } from '../domain/validator/object.id.validator'
// import { CreateAnnex2table2dValidator } from '../domain/validator/create.annex2table2d'
// import { Annex2Table2D } from '../domain/model/annex2table2d'
// import { Company } from '../domain/model/company'

// @injectable()
// export class Company implements ICompany {
//     constructor(
//         @inject(Identifier.COMPANIES_REPOSITORY) readonly _repository: ICompany
//     ) {

//     }

//     public async add(item: Annex2Table2D): Promise<Company | undefined> {
//         CreateAnnex2table2dValidator.validate(item)

//         const exists = await this._repository.checkExists(item)
//         if (exists) throw new ConflictException(Strings.COMPANY.ALREADY_REGISTERED)

//         const result: Company | undefined = await this._repository.create(item)

//         return Promise.resolve(result)
//     }

//     public remove(id: string): Promise<boolean> {
//         return this._repository.delete(id)
//     }

//     public getById(id: string, query: IQuery): Promise<Company | undefined> {
//         try {
//             ObjectIdValidator.validate(id)
//             query.addFilter({ _id: id })
//             return this._repository.findOne(query)
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }

//     public async update(item: Annex2Table2D): Promise<ICompany | undefined> {
//         try {
//             CreateAnnex2table2dValidator.validate(item)

//             const exists: boolean = await this._repository.checkExists(item)
//             if (!exists) return Promise.resolve(undefined)

//             return this._repository.update(item)
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }

//     public getAll(query: IQuery): Promise<Array<Company>> {
//         return this._repository.find(query)
//     }

//     public count(query?: IQuery): Promise<number> {
//         try {
//             return this._repository.count(query)
//         } catch (err) {
//             return Promise.reject(err)
//         }
//     }
// }
