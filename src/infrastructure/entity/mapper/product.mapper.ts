import { injectable } from 'inversify'
import { IEntityMapper } from '../../port/entity.mapper.interface'
import Product from '../../../application/domain/model/product'
import { ProductEntity } from '../product'

@injectable()
export class ProductMapper implements IEntityMapper<Product, ProductEntity> {
    /**
     * Convert Product to Product Entity or JSON objects to Product
     *
     * @see If the item is an instance of {Product} it will be converted to {ProductEntity}.
     * Otherwise, it will be converted to a {Product} object.
     * @param item object to be converted
     */
    public transform(item: any): any {
        if (item instanceof Product) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

    /**
     * Convert JSON for {Product}.
     *
     * @see Each attribute must be mapped only if it contains an assigned value,
     * because at some point the attribute accessed may not exist.
     * @param json, JSON object to be converted to Header
     */
    public jsonToModel(json: any): Product {
        const result: Product = new Product()

        if (json.id !== undefined) result.id = json.id
        if (json.created_at !== undefined) result.created_at = json.created_at
        if (json.product !== undefined) result.product = json.product
        if (json.description !== undefined) result.description = json.description
        if (json.unity !== undefined) result.unity = json.unity

        return result

    }

    /**
     * Convert {ProductEntity} for {Product}.
     *
     * @see Each attribute must be mapped only if it contains an assigned value,
     * because at some point the attribute accessed may not exist.
     * @param item, {ProductEntity} object to be converted to {Product}
     */
    public modelEntityToModel(item: ProductEntity): Product {
        throw Error('Not implemented!')
    }

    /**
     * Convert {Product} to {ProductEntity}
     * @see Creation Date should not be mapped to the type the repository understands.
     * Because this attribute is created automatically by the database.
     * Therefore, if a null value is passed at update time, an exception is thrown.
     * @param item, Product object to be converted to ProductEntity
     */
    public modelToModelEntity(item: Product): ProductEntity {
        const result: ProductEntity = new ProductEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.product !== undefined) result.product = item.product
        if (item.description !== undefined) result.description = item.description
        if (item.unity !== undefined) result.unity = item.unity

        return result
    }


}
