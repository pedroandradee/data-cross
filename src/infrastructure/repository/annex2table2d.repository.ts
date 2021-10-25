import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { Annex2Table2D as Annex2Table2DModel } from '../../application/domain/model/annex2table2d'
import { Annex2Table2DEntity } from '../entity/annex2table2d'
import { Query } from './query/query'
import { IAnnex2Table2DRepository } from '../../application/port/annex2table2d.repository'

@injectable()
export class Annex2Table2DRepository
    extends BaseRepository<Annex2Table2DModel, Annex2Table2DEntity>
    implements IAnnex2Table2DRepository {
    constructor(
        @inject(Identifier.ANNEX2TABLE2D_REPO_MODEL) readonly _model: any,
        @inject(Identifier.ANNEX2TABLE2D_MAPPER) readonly _mapper: IEntityMapper<Annex2Table2DModel, Annex2Table2DEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }

    public async checkExists(entity: Annex2Table2DEntity): Promise<boolean> {
        const query: Query = new Query()
            .fromJSON({ filters: { _id: { $ne: entity.id }, month_year: entity.month_year } })
        return new Promise<boolean>((resolve, reject) => {
            super.findOne(query)
                .then((result: Annex2Table2DEntity | undefined) => resolve(!!result))
                .catch(err => reject(super.mongoDBErrorListener(err)))
        })
    }

}
