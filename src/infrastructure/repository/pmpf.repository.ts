import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { IPMPFRepository } from 'application/port/pmpf.repository'
import { PMPF as PMPFModel } from 'application/domain/model/pmpf'
import { PMPFEntity } from 'infrastructure/entity/pmpf'

@injectable()
export class PMPFRepository
    extends BaseRepository<PMPFModel, PMPFEntity>
    implements IPMPFRepository {
    constructor(
        @inject(Identifier.PMPF_MODEL) readonly _model: any,
        @inject(Identifier.PMPF_MAPPER) readonly _mapper: IEntityMapper<PMPFModel, PMPFEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }
}
