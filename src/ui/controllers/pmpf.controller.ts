import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { IQuery } from '../../application/port/query.interface'
import { Query } from '../../infrastructure/repository/query/query'
import { IPMPFService } from '../../application/port/pmpf.service'
import { PMPF } from '../../application/domain/model/pmpf'

@controller('/v1/scanc/pmpf')
export class PMPFController {
    private static handlerError(res: Response, err: any) {
        const handlerError = ApiExceptionManager.build(err)
        return res.status(handlerError.code)
            .send(handlerError.toJSON())
    }

    constructor(
        @inject(Identifier.PMPF_SERVICE) private readonly _service: IPMPFService
    ) {
    }

    @httpPost('/')
    public async create(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const entity: PMPF = new PMPF().fromJSON(req.body)
            const result: PMPF | undefined = await this._service.add(entity)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            return PMPFController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: Array<PMPF> = await this._service.getAll(query)
            const count: number = await this._service.count(query)
            res.setHeader('X-Total-Count', count)
            return res.status(HttpStatus.OK).send(result)
        } catch (err) {
            return PMPFController.handlerError(res, err)
        }
    }

    @httpGet('/:id')
    public async getById(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: PMPF | undefined = await this._service.getById(req.params.id, query)
            return res.status(HttpStatus.OK).send(result)
        } catch (err) {
            return PMPFController.handlerError(res, err)
        }
    }

    private toJSONView(entity: PMPF | Array<PMPF> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }
}
