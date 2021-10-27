import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { IQuery } from '../../application/port/query.interface'
import { Query } from '../../infrastructure/repository/query/query'
import { IAliquotService } from '../../application/port/aliquot.service'
import { Aliquot } from '../../application/domain/model/aliquot'

@controller('/v1/scanc/aliquot')
export class AliquotController {
    private static handlerError(res: Response, err: any) {
        const handlerError = ApiExceptionManager.build(err)
        return res.status(handlerError.code)
            .send(handlerError.toJSON())
    }

    constructor(
        @inject(Identifier.ALIQUOT_SERVICE) private readonly _service: IAliquotService
    ) {
    }

    @httpPost('/')
    public async create(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const entity: Aliquot = new Aliquot().fromJSON(req.body)
            const result: Aliquot | undefined = await this._service.add(entity)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            return AliquotController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: Array<Aliquot> = await this._service.getAll(query)
            const count: number = await this._service.count(query)
            res.setHeader('X-Total-Count', count)
            return res.status(HttpStatus.OK).send(result)
        } catch (err) {
            return AliquotController.handlerError(res, err)
        }
    }

    @httpGet('/:id')
    public async getById(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: Aliquot | undefined = await this._service.getById(req.params.id, query)
            return res.status(HttpStatus.OK).send(result)
        } catch (err) {
            return AliquotController.handlerError(res, err)
        }
    }

    private toJSONView(entity: Aliquot | Array<Aliquot> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }
}
