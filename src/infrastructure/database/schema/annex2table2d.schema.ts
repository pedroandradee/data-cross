import Mongoose from 'mongoose'

interface IAnnex2Table2DModel extends Mongoose.Document {
}

const schema: any = {
    MESANO: String
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
export const Annex2Table2dRepoModel = Mongoose.model<IAnnex2Table2DModel>('Annex2Table2D', new Mongoose.Schema(schema, options))
