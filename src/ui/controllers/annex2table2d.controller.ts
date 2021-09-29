import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { IAnnex2Table2DService } from '../../application/port/annex2table2d.service'
import { IQuery } from '../../application/port/query.interface'
import { Query } from '../../infrastructure/repository/query/query'
import { Annex2Table2D } from '../../application/domain/model/annex2table2d'

@controller('/scanc/a2q2d')
export class Annex2table2dController {
    private static handlerError(res: Response, err: any) {
        const handlerError = ApiExceptionManager.build(err)
        return res.status(handlerError.code)
            .send(handlerError.toJSON())
    }

    constructor(
        @inject(Identifier.ANNEX2TABLE2D_SERVICE) private readonly _service: IAnnex2Table2DService
    ) {
    }

    @httpPost('/')
    public async create(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const entity: Annex2Table2D = new Annex2Table2D().fromJSON(req.body)
            const result: Annex2Table2D | undefined = await this._service.add(entity)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            return Annex2table2dController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const othersFilter = {}
            query.addFilter(othersFilter)
            const result: Array<Annex2Table2D> = await this._service.getAll(query)
            const count: number = await this._service.count(query)
            res.setHeader('X-Total-Count', count)
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            return Annex2table2dController.handlerError(res, err)
        }
    }

    private toJSONView(entity: Annex2Table2D | Array<Annex2Table2D> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }


}
