import Mongoose from 'mongoose'

interface IStandard extends Mongoose.Document {
}

const schema: any = {
    standard: String,
    num: String,
    year: String,
    state: String,
    start_date: String,
    end_date: String,
    product: String,
    value: Number,
    type: String
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

export const Standard = Mongoose.model<IStandard>('standards', new Mongoose.Schema(schema, options))
