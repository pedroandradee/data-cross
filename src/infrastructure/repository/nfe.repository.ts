import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { NFE as NFEModel } from '../../application/domain/model/nfe'
import { NFEEntity } from '../entity/nfe'
import { INFERepository } from '../../application/port/nfe.repository'

@injectable()
export class NFERepository
    extends BaseRepository<NFEModel, NFEEntity>
    implements INFERepository {
    constructor(
        @inject(Identifier.NFE_REPO_MODEL) readonly _model: any,
        @inject(Identifier.NFE_MAPPER) readonly _mapper: IEntityMapper<NFEModel, NFEEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }
}
