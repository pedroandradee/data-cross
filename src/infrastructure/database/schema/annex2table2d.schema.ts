import Mongoose from 'mongoose'

interface IAnnex2Table2DModel extends Mongoose.Document {
}

const schema: any = {
    cnpj_issuer: String,
    ie_issuer: String,
    state_issuer: String,
    month_year: String,
    identifier: String,
    cnpj: String,
    ie: String,
    state: String,
    issue_date: String,
    model: String,
    serie: String,
    nfe_number: String,
    cfop: String,
    nfe_product: String,
    product: String,
    amount: Number,
    amount_consumer_product: Number,
    startting_value: Number,
    bcst_value: Number,
    icms_rate: Number,
    icms_st_value: Number,
    shipping_type: String,
    cnpj_freight: String,
    state_freight: String,
    plate_1: String,
    plate_2: String,
    plate_3: String,
    destination: String
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
