import 'reflect-metadata'
import { Container } from 'inversify'
import { Identifier } from './identifiers'
import { ConnectionFactoryMongodb } from '../infrastructure/database/connection.factory.mongodb'
import { ConnectionMongodb } from '../infrastructure/database/connection.mongodb'
import { IConnectionDB } from '../infrastructure/port/connection.db.interface'
import { IConnectionFactory } from '../infrastructure/port/connection.factory.interface'
import { BackgroundService } from '../background/background.service'
import { App } from '../app'
import { CustomLogger, ILogger } from '../utils/custom.logger'
import { IEntityMapper } from '../infrastructure/port/entity.mapper.interface'
import { IBackgroundTask } from '../application/port/background.task.interface'
import { Annex2table2dController } from '../ui/controllers/annex2table2d.controller'
import { IAnnex2Table2DService } from '../application/port/annex2table2d.service'
import { Annex2Table2DService } from '../application/service/annex2table2d.service'
import { IAnnex2Table2DRepository } from '../application/port/annex2table2d.repository'
import { Annex2Table2DRepository } from '../infrastructure/repository/annex2table2d.repository'
import { Annex2Table2D } from '../application/domain/model/annex2table2d'
import { Annex2Table2DEntity } from '../infrastructure/entity/annex2table2d'
import { Annex2Table2DMapper } from '../infrastructure/entity/mapper/annex2table2d.mapper'
import { RegisterTask } from '../background/task/register.task'
import { Annex2Table2dRepoModel } from '../infrastructure/database/schema/annex2table2d.schema'
import { HomeController } from '../ui/controllers/home.controller'

class IoC {
    private readonly _container: Container

    /**
     * Creates an instance of Di.
     *
     * @private
     */
    constructor() {
        this._container = new Container()
        this.initDependencies()
    }

    /**
     * Get Container inversify.
     *
     * @returns {Container}
     */
    get container(): Container {
        return this._container
    }

    /**
     * Initializes injectable containers.
     *
     * @private
     * @return void
     */
    private initDependencies(): void {
        this._container.bind(Identifier.APP).to(App).inSingletonScope()

        // Controllers
        this._container.bind<HomeController>(Identifier.HOME_CONTROLLER).to(HomeController).inSingletonScope()
        this._container
            .bind<Annex2table2dController>(Identifier.ANNEX2TABLE2D_CONTROLLER)
            .to(Annex2table2dController).inSingletonScope()

        // Services
        this._container
            .bind<IAnnex2Table2DService>(Identifier.ANNEX2TABLE2D_SERVICE)
            .to(Annex2Table2DService).inSingletonScope()

        // Repositories
        this._container
            .bind<IAnnex2Table2DRepository>(Identifier.ANNEX2TABLE2D_REPOSITORY)
            .to(Annex2Table2DRepository).inSingletonScope()

        // Models
        this._container.bind(Identifier.ANNEX2TABLE2D_REPO_MODEL).toConstantValue(Annex2Table2dRepoModel)

        // Mappers
        this._container
            .bind<IEntityMapper<Annex2Table2D, Annex2Table2DEntity>>(Identifier.ANNEX2TABLE2D_MAPPER)
            .to(Annex2Table2DMapper).inSingletonScope()

        // Background Services
        this._container
            .bind<IConnectionFactory>(Identifier.MONGODB_CONNECTION_FACTORY)
            .to(ConnectionFactoryMongodb).inSingletonScope()
        this._container
            .bind<IConnectionDB>(Identifier.MONGODB_CONNECTION)
            .to(ConnectionMongodb).inSingletonScope()
        this._container
            .bind(Identifier.BACKGROUND_SERVICE)
            .to(BackgroundService).inSingletonScope()

        // Tasks
        this._container
            .bind<IBackgroundTask>(Identifier.REGISTER_SETTINGS_TASK)
            .to(RegisterTask).inRequestScope()

        // Log
        this._container.bind<ILogger>(Identifier.LOGGER).to(CustomLogger).inSingletonScope()
    }
}

export const DIContainer = new IoC().container
