import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { IQuery } from '../../application/port/query.interface'
import { IAnnex2Table2HService } from '../../application/port/annex2table2h.service'
import { Query } from '../../infrastructure/repository/query/query'
import { Annex2Table2H } from '../../application/domain/model/annex2table2h'

@controller('/v1/scanc/a2q2h')
export class Annex2table2hController {
    private static handlerError(res: Response, err: any) {
        const handlerError = ApiExceptionManager.build(err)
        return res.status(handlerError.code)
            .send(handlerError.toJSON())
    }

    constructor(
        @inject(Identifier.ANNEX2TABLE2H_SERVICE) private readonly _service: IAnnex2Table2HService
    ) {
    }

    @httpPost('/')
    public async create(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const entity: Annex2Table2H = new Annex2Table2H().fromJSON(req.body)
            const result: Annex2Table2H | undefined = await this._service.add(entity)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            return Annex2table2hController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: Array<Annex2Table2H> = await this._service.getAll(query)
            const count: number = await this._service.count(query)
            res.setHeader('X-Total-Count', count)
            return res.status(200).send(result)
        } catch (err) {
            return Annex2table2hController.handlerError(res, err)
        }
    }

    private toJSONView(entity: Annex2Table2H | Array<Annex2Table2H> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }
}
