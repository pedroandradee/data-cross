import { inject, injectable } from 'inversify'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { IRepository } from '../../application/port/repository.interface'
import Product from '../../application/domain/model/product'
import { ProductEntity } from '../entity/product'

@injectable()
export class ProductRepository extends BaseRepository<Product, ProductEntity> implements IRepository<Product> {
    constructor(
        @inject(Identifier.PRODUCT_REPO_MODEL) readonly _model: any,
        @inject(Identifier.PRODUCT_MAPPER) readonly _mapper: IEntityMapper<Product, ProductEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }
}
