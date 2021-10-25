import { Entity } from './entity'

export class Annex2Table2DEntity extends Entity {
    public ie_issuer?: string
    public cnpj_issuer?: string
    public state_issuer?: string
    public month_year?: string
    public identifier?: string
    public cnpj?: string
    public ie?: string
    public state?: string
    public issue_date?: string
    public model?: string
    public serie?: string
    public nfe_number?: string
    public cfop?: string
    public nfe_product?: string
    public product?: string
    public amount?: number
    public amount_consumer_product?: number
    public startting_value?: number
    public bcst_value?: number
    public icms_rate?: number
    public icms_st_value?: number
    public shipping_type?: string
    public cnpj_freight?: string
    public state_freight?: string
    public plate_1?: string
    public plate_2?: string
    public plate_3?: string
    public destination?: string
}
