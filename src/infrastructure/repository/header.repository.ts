import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import Header from '../../application/domain/model/header'
import { HeaderEntity } from '../entity/header'
import { IRepository } from '../../application/port/repository.interface'

@injectable()
export class HeaderRepository extends BaseRepository<Header, HeaderEntity> implements IRepository<Header> {
    constructor(
        @inject(Identifier.HEADER_REPO_MODEL) readonly _model: any,
        @inject(Identifier.HEADER_MAPPER) readonly _mapper: IEntityMapper<Header, HeaderEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }
}
