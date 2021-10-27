import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { Aliquot as AliquotModel } from 'application/domain/model/aliquot'
import { AliquotEntity } from 'infrastructure/entity/aliquot'
import { IAliquotRepository } from 'application/port/aliquot.repository'

@injectable()
export class AliquotRepository
    extends BaseRepository<AliquotModel, AliquotEntity>
    implements IAliquotRepository {
    constructor(
        @inject(Identifier.ALIQUOT_MODEL) readonly _model: any,
        @inject(Identifier.ALIQUOT_MAPPER) readonly _mapper: IEntityMapper<AliquotModel, AliquotEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }
}
