import Mongoose from 'mongoose'

interface ICompany extends Mongoose.Document {
}

const schema: any = {
    corporate_name: String,
    cnpj: String,
    ie: String,
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
    contact_state: String
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
export const Company = Mongoose.model<ICompany>('Company', new Mongoose.Schema(schema, options))
