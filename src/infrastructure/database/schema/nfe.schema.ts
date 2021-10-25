import Mongoose from 'mongoose'

interface INFE extends Mongoose.Document {
}

const schema: any = {
    passkey_number: String,
    electronic_invoice_number: String,
    issue_date_time: String,
    issuer_corporate_name: String,
    issuer_cnpj: String,
    issuer_state: String,
    recipient_corporate_name: String,
    recipient_cnpj: String,
    recipient_state: String,
    product_code: String,
    product_description: String,
    ncm_code: String,
    anp_code: String,
    cst: String,
    cfop: String,
    product_quantity: Number,
    unitary_value: Number,
    product_value: Number,
    total_note_value: Number,
    date_time_inclusion: String,
    date_time_receipt: String,
    date_time_operation: String,
    operation_description: String,
    bc_value: Number,
    icms_bc_value: Number,
    icms_st_bc_value: Number,
    st_bc_value_held_dest: Number,
    icms_st_bc_value_held_dest: Number
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
export const NFE = Mongoose.model<INFE>('NFE', new Mongoose.Schema(schema, options))
