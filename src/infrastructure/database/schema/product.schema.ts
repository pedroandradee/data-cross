import Mongoose from 'mongoose'

interface IProduct extends Mongoose.Document {
}

const schema: any = {
    product: String,
    description: String,
    unity: String
}

const options: any = {
    timestamps: { createdAt: 'created_at', updatedAt: false },
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            return ret
        }
    }
}
export const ProductRepoModel = Mongoose.model<IProduct>('products', new Mongoose.Schema(schema, options))
