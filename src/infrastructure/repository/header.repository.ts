import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import Header from '../../application/domain/model/header'
import { HeaderEntity } from '../entity/header'
import { IRepository } from '../../application/port/repository.interface'
import { Query } from './query/query'

@injectable()
export class HeaderRepository extends BaseRepository<Header, HeaderEntity> implements IRepository<Header> {
    constructor(
        @inject(Identifier.HEADER_REPO_MODEL) readonly _model: any,
        @inject(Identifier.HEADER_MAPPER) readonly _mapper: IEntityMapper<Header, HeaderEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }

    /**
     * @Override
     * @param item
     */
    public async checkExists(item: Header): Promise<boolean> {
        const resource = item.toJSON()
        // Remove fields
        const fieldsToRemove = [
            'id',
            'created_at',
            'email',
            'phone',
            'contact',
            'contact_position',
            'contact_cpf',
            'contact_rg',
            'annex_origin'
        ]
        fieldsToRemove.forEach((field: string) => delete resource[field])
        const query: Query = new Query()
            .fromJSON({ filters: { _id: { $ne: item.id }, ...resource } })
        return new Promise<boolean>((resolve, reject) => {
            this.findOne(query)
                .then((result: Header | undefined) => resolve(!!result))
                .catch(err => reject(this.mongoDBErrorListener(err)))
        })
    }
}
