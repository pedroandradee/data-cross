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
import { MultiStatus } from '../../application/domain/model/multi.status'
import { TypeStandard } from '../../application/domain/utils/standard.types'

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
            let items: Array<any> = req.body
            if (!(req.body instanceof Array)) {
                items = [req.body]
            }
            const entities: Array<Aliquot> = items
                .map((item: Aliquot) => {
                    delete item.id
                    delete item.created_at
                    return new Aliquot().fromJSON(item)
                })

            const multiStatus: MultiStatus<Aliquot> = await this._service.addMultiples(entities)
            return res.status(HttpStatus.MULTI_STATUS).send(this.toJSONView(multiStatus))
        } catch (err) {
            return AliquotController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = { type: TypeStandard.ALIQUOT }
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

    private toJSONView(entity: Aliquot | Array<Aliquot> | MultiStatus<Aliquot> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }
}
