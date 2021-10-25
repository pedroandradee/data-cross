import Mongoose from 'mongoose'

interface IAnnex2Table2HModel extends Mongoose.Document {
}

const schema: any = {
    cnpj_issuer: String,
    ie_issuer: String,
    state_issuer: String,
    month_year: String,
    identifier: String,
    cnpj: String,
    ie: String,
    iest: String,
    corporate_name: String,
    address: String,
    district: String,
    county: String,
    zip_code: String
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
export const Annex2Table2hRepoModel = Mongoose.model<IAnnex2Table2HModel>('Annex2Table2H', new Mongoose.Schema(schema, options))
