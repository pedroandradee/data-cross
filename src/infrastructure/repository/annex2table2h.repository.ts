import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { Annex2Table2H as Annex2Table2HModel } from '../../application/domain/model/annex2table2h'
import { Annex2Table2HEntity } from '../entity/annex2table2h'
import { Query } from './query/query'
import { IAnnex2Table2HRepository } from 'application/port/annex2table2h.repository'

@injectable()
export class Annex2Table2HRepository
    extends BaseRepository<Annex2Table2HModel, Annex2Table2HEntity>
    implements IAnnex2Table2HRepository {
    constructor(
        @inject(Identifier.ANNEX2TABLE2H_REPO_MODEL) readonly _model: any,
        @inject(Identifier.ANNEX2TABLE2H_MAPPER) readonly _mapper: IEntityMapper<Annex2Table2HModel, Annex2Table2HEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }

    public async checkExists(entity: Annex2Table2HEntity): Promise<boolean> {
        const query: Query = new Query()
            .fromJSON({ filters: { _id: { $ne: entity.id }, month_year: entity.month_year } })
        return new Promise<boolean>((resolve, reject) => {
            super.findOne(query)
                .then((result: Annex2Table2HEntity | undefined) => resolve(!!result))
                .catch(err => reject(super.mongoDBErrorListener(err)))
        })
    }
}
