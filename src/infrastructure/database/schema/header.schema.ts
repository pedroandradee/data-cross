import Mongoose from 'mongoose'

interface IHeader extends Mongoose.Document {
}

const schema: any = {
    month_year: String,
    identifier: String,
    annex: String,
    product: String,
    origin_state: String,
    cnpj_supplier: String,
    ie_supplier: String,
    destination_state: String,
    others_state: String,
    cnpj: String,
    ie: String,
    iest: String,
    corporate_name: String,
    address: String,
    district: String,
    county: String,
    state: String,
    zip_code: String,
    email: String,
    category: String,
    phone: String,
    contact: String,
    contact_position: String,
    contact_cpf: String,
    contact_rg: String,
    contact_state: String,
    local: String,
    date: String,
    hour: String,
    annex_origin: String
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
export const HeaderRepoModel = Mongoose.model<IHeader>('headers', new Mongoose.Schema(schema, options))
