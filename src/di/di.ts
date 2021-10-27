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
import { Annex2table2hController } from '../ui/controllers/annex2table2h.controller'
import { Annex2Table2HService } from '../application/service/annex2table2h.service'
import { IAnnex2Table2HService } from '../application/port/annex2table2h.service'
import { IAnnex2Table2HRepository } from '../application/port/annex2table2h.repository'
import { Annex2Table2HRepository } from '../infrastructure/repository/annex2table2h.repository'
import { Annex2Table2hRepoModel } from '../infrastructure/database/schema/annex2table2h.schema'
import { Annex2Table2H } from '../application/domain/model/annex2table2h'
import { Annex2Table2HEntity } from '../infrastructure/entity/annex2table2h'
import { Annex2Table2HMapper } from '../infrastructure/entity/mapper/annex2table2h.mapper'
import Header from '../application/domain/model/header'
import { HeaderService } from '../application/service/header.service'
import { HeaderMapper } from '../infrastructure/entity/mapper/header.mapper'
import { HeaderEntity } from '../infrastructure/entity/header'
import { HeaderRepoModel } from '../infrastructure/database/schema/header.schema'
import { IRepository } from '../application/port/repository.interface'
import { HeaderRepository } from '../infrastructure/repository/header.repository'
import { HeaderController } from '../ui/controllers/header.controller'
import { IHeaderService } from '../application/port/header.service'
import { ProductController } from '../ui/controllers/product.controller'
import { IProductService } from '../application/port/product.service'
import { ProductService } from '../application/service/product.service'
import Product from '../application/domain/model/product'
import { ProductRepository } from '../infrastructure/repository/product.repository'
import { ProductRepoModel } from '../infrastructure/database/schema/product.schema'
import { ProductEntity } from '../infrastructure/entity/product'
import { ProductMapper } from '../infrastructure/entity/mapper/product.mapper'
import { Standard } from '../infrastructure/database/schema/standard.schema'
import { IAliquotRepository } from '../application/port/aliquot.repository'
import { AliquotRepository } from '../infrastructure/repository/aliquot.repository'
import { IPMPFRepository } from '../application/port/pmpf.repository'
import { PMPFRepository } from '../infrastructure/repository/pmpf.repository'
import { Aliquot as AliquotModel } from '../application/domain/model/aliquot'
import { AliquotEntity } from '../infrastructure/entity/aliquot'
import { AliquotMapper } from '../infrastructure/entity/mapper/aliquot.mapper'
import { PMPF as PMPFModel } from '../application/domain/model/pmpf'
import { PMPFEntity } from '../infrastructure/entity/pmpf'
import { PMPFMapper } from '../infrastructure/entity/mapper/pmpf.mapper'
import { IAliquotService } from '../application/port/aliquot.service'
import { AliquotService } from '../application/service/aliquot.service'
import { IPMPFService } from '../application/port/pmpf.service'
import { PMPFService } from '../application/service/pmpf.service'
import { AliquotController } from '../ui/controllers/aliquot.controller'
import { PMPFController } from '../ui/controllers/pmpf.controller'

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
        this._container.bind<ProductController>(Identifier.PRODUCT_CONTROLLER).to(ProductController).inSingletonScope()
        this._container.bind<HeaderController>(Identifier.HEADER_CONTROLLER).to(HeaderController).inSingletonScope()
        this._container.bind<HomeController>(Identifier.HOME_CONTROLLER).to(HomeController).inSingletonScope()
        this._container
            .bind<Annex2table2dController>(Identifier.ANNEX2TABLE2D_CONTROLLER)
            .to(Annex2table2dController).inSingletonScope()
        this._container
            .bind<Annex2table2hController>(Identifier.ANNEX2TABLE2H_CONTROLLER)
            .to(Annex2table2hController).inSingletonScope()
        this._container
            .bind<AliquotController>(Identifier.ALIQUOT_CONTROLLER)
            .to(AliquotController).inSingletonScope()
        this._container
            .bind<PMPFController>(Identifier.PMPF_CONTROLLER)
            .to(PMPFController).inSingletonScope()

        // Services
        this._container
            .bind<IProductService>(Identifier.PRODUCT_SERVICE)
            .to(ProductService).inSingletonScope()
        this._container
            .bind<IHeaderService>(Identifier.HEADER_SERVICE)
            .to(HeaderService).inSingletonScope()
        this._container
            .bind<IAnnex2Table2DService>(Identifier.ANNEX2TABLE2D_SERVICE)
            .to(Annex2Table2DService).inSingletonScope()
        this._container
            .bind<IAnnex2Table2HService>(Identifier.ANNEX2TABLE2H_SERVICE)
            .to(Annex2Table2HService).inSingletonScope()
        this._container
            .bind<IAliquotService>(Identifier.ALIQUOT_SERVICE)
            .to(AliquotService).inSingletonScope()
        this._container
            .bind<IPMPFService>(Identifier.PMPF_SERVICE)
            .to(PMPFService).inSingletonScope()

        // Repositories
        this._container
            .bind<IRepository<Product>>(Identifier.PRODUCT_REPOSITORY)
            .to(ProductRepository).inSingletonScope()
        this._container
            .bind<IRepository<Header>>(Identifier.HEADER_REPOSITORY)
            .to(HeaderRepository).inSingletonScope()
        this._container
            .bind<IAnnex2Table2DRepository>(Identifier.ANNEX2TABLE2D_REPOSITORY)
            .to(Annex2Table2DRepository).inSingletonScope()
        this._container
            .bind<IAnnex2Table2HRepository>(Identifier.ANNEX2TABLE2H_REPOSITORY)
            .to(Annex2Table2HRepository).inSingletonScope()
        this._container
            .bind<IAliquotRepository>(Identifier.ALIQUOT_REPOSITORY)
            .to(AliquotRepository).inSingletonScope()
        this._container
            .bind<IPMPFRepository>(Identifier.PMPF_REPOSITORY)
            .to(PMPFRepository).inSingletonScope()

        // Models
        this._container.bind(Identifier.PRODUCT_REPO_MODEL).toConstantValue(ProductRepoModel)
        this._container.bind(Identifier.HEADER_REPO_MODEL).toConstantValue(HeaderRepoModel)
        this._container.bind(Identifier.ANNEX2TABLE2D_REPO_MODEL).toConstantValue(Annex2Table2dRepoModel)
        this._container.bind(Identifier.ANNEX2TABLE2H_REPO_MODEL).toConstantValue(Annex2Table2hRepoModel)
        this._container.bind(Identifier.ALIQUOT_MODEL).toConstantValue(Standard)
        this._container.bind(Identifier.PMPF_MODEL).toConstantValue(Standard)

        // Mappers
        this._container
            .bind<IEntityMapper<Product, ProductEntity>>(Identifier.PRODUCT_MAPPER)
            .to(ProductMapper).inSingletonScope()
        this._container
            .bind<IEntityMapper<Header, HeaderEntity>>(Identifier.HEADER_MAPPER)
            .to(HeaderMapper).inSingletonScope()
        this._container
            .bind<IEntityMapper<Annex2Table2D, Annex2Table2DEntity>>(Identifier.ANNEX2TABLE2D_MAPPER)
            .to(Annex2Table2DMapper).inSingletonScope()
        this._container
            .bind<IEntityMapper<Annex2Table2H, Annex2Table2HEntity>>(Identifier.ANNEX2TABLE2H_MAPPER)
            .to(Annex2Table2HMapper).inSingletonScope()
        this._container
            .bind<IEntityMapper<AliquotModel, AliquotEntity>>(Identifier.ALIQUOT_MAPPER)
            .to(AliquotMapper).inSingletonScope()
        this._container
            .bind<IEntityMapper<PMPFModel, PMPFEntity>>(Identifier.PMPF_MAPPER)
            .to(PMPFMapper).inSingletonScope()

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
