import HttpStatus from 'http-status-codes'
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { IQuery } from '../../application/port/query.interface'
import { Query } from '../../infrastructure/repository/query/query'
import { IService } from '../../application/port/service.interface'
import Header from '../../application/domain/model/header'
import { ApiException } from '../exception/api.exception'
import { Strings } from '../../utils/strings'

@controller('/v1/scanc/header')
export class HeaderController {

    private static getMessageNotFound(): object {
        return new ApiException(
            HttpStatus.NOT_FOUND,
            Strings.HEADER.NOT_FOUND,
            Strings.HEADER.NOT_FOUND_DESCRIPTION
        ).toJSON()
    }

    private static handlerError(res: Response, err: any) {
        const handlerError = ApiExceptionManager.build(err)
        return res.status(handlerError.code)
            .send(handlerError.toJSON())
    }

    constructor(
        @inject(Identifier.HEADER_SERVICE) private readonly _service: IService<Header>
    ) {
    }

    @httpPost('/')
    public async create(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            // Remove read only fields
            delete req.body.id
            delete req.body.created_at
            delete req.body.updated_at
            const entity: Header = new Header().fromJSON(req.body)
            const result: Header | undefined = await this._service.add(entity)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            return HeaderController.handlerError(res, err)
        }
    }

    @httpGet('/')
    public async getAll(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: IQuery = new Query().fromJSON(req.query)
            const result: Array<Header> = await this._service.getAll(query)
            const count: number = await this._service.count(query)
            res.setHeader('X-Total-Count', count)
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            return HeaderController.handlerError(res, err)
        } finally {
            req.query = {}
        }
    }

    @httpGet('/:header_id')
    public async getAdminById(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const result: Header | undefined =
                await this._service.getById(req.params.header_id, new Query().fromJSON(req.query))
            if (!result) return res.status(HttpStatus.NOT_FOUND).send(HeaderController.getMessageNotFound())
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err: any) {
            return HeaderController.handlerError(res, err)
        } finally {
            req.query = {}
        }
    }

    private toJSONView(entity: Header | Array<Header> | undefined): object {
        if (entity instanceof Array) return entity.map(item => this.toJSONView(item))
        return entity?.toJSON()
    }


}
