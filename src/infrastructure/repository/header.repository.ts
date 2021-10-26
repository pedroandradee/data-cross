import { inject, injectable } from 'inversify'
import CryptoJS from 'crypto-js'
import { BaseRepository } from './base/base.repository'
import { Identifier } from '../../di/identifiers'
import { IEntityMapper } from '../port/entity.mapper.interface'
import { Query } from './query/query'
import Header from '../../application/domain/model/header'
import { HeaderEntity } from '../entity/header'
import { IRepository } from '../../application/port/repository.interface'

@injectable()
export class HeaderRepository extends BaseRepository<Header, HeaderEntity> implements IRepository<Header> {
    constructor(
        @inject(Identifier.HEADER_REPO_MODEL) readonly _model: any,
        @inject(Identifier.HEADER_MAPPER) readonly _mapper: IEntityMapper<Header, HeaderEntity>,
        @inject(Identifier.LOGGER) readonly _logger: any
    ) {
        super(_model, _mapper, _logger)
    }

    /**
     *
     * @param item
     */
    public async checkExists(item: Header): Promise<boolean> {
        const sha512 = this.generateSha512(item.concatToString())
        const query: Query = new Query()
            .fromJSON({ filters: { _id: { $ne: item.id }, sha512 } })
        return new Promise<boolean>((resolve, reject) => {
            super.findOne(query)
                .then((result: Header | undefined) => resolve(!!result))
                .catch(err => reject(super.mongoDBErrorListener(err)))
        })
    }

    /**
     * Generate the SHA512 hash for any string
     * @param message
     */
    public async generateSha512(message: string): Promise<string> {
        try {
            const hash = CryptoJS.SHA512(message).toString(CryptoJS.enc.Utf8)
            return Promise.resolve(hash)
        } catch (err) {
            return Promise.reject(err)
        }
    }

}
