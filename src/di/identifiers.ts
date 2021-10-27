/**
 * Constants used in dependence injection.
 *
 * @abstract
 */
export abstract class Identifier {
    public static readonly APP: any = Symbol.for('App')

    // TODO: Alterado para letras minusculas os nomes dos anexos D e H
    // Controllers
    public static readonly HOME_CONTROLLER: any = Symbol.for('HomeController')
    public static readonly ANNEX2TABLE2D_CONTROLLER: any = Symbol.for('Annex2Table2DController')
    public static readonly ANNEX2TABLE2H_CONTROLLER: any = Symbol.for('Annex2table2HController')
    public static readonly COMPANIES_CONTROLLER: any = Symbol.for('CompaniesController')
    public static readonly NFE_CONTROLLER: any = Symbol.for('NFEController')
    public static readonly ALIQUOT_CONTROLLER: any = Symbol.for('AliquotController')
    public static readonly PMPF_CONTROLLER: any = Symbol.for('PMPFController')

    // Services
    public static readonly ANNEX2TABLE2D_SERVICE: any = Symbol.for('Annex2Table2DService')
    public static readonly ANNEX2TABLE2H_SERVICE: any = Symbol.for('Annex2Table2HService')
    public static readonly COMPANIES_SERVICE: any = Symbol.for('CompaniesService')
    public static readonly NFE_SERVICE: any = Symbol.for('NFEService')
    public static readonly ALIQUOT_SERVICE: any = Symbol.for('AliquotService')
    public static readonly PMPF_SERVICE: any = Symbol.for('PMPFService')

    // Repositories
    public static readonly ANNEX2TABLE2D_REPOSITORY: any = Symbol.for('Annex2Table2DRepository')
    public static readonly ANNEX2TABLE2H_REPOSITORY: any = Symbol.for('Annex2Table2HRepository')
    public static readonly COMPANIES_REPOSITORY: any = Symbol.for('CompaniesRepository')
    public static readonly NFE_REPOSITORY: any = Symbol.for('NFERepository')
    public static readonly ALIQUOT_REPOSITORY: any = Symbol.for('AliquotRepository')
    public static readonly PMPF_REPOSITORY: any = Symbol.for('PMPFRepository')

    // Models
    public static readonly ANNEX2TABLE2D_REPO_MODEL: any = Symbol.for('Annex2Table2DRepoModel')
    public static readonly ANNEX2TABLE2H_REPO_MODEL: any = Symbol.for('Annex2Table2HRepoModel')
    public static readonly NFE_REPO_MODEL: any = Symbol.for('NFERepoModel')
    public static readonly ALIQUOT_MODEL: any = Symbol.for('AliquotModel')
    public static readonly PMPF_MODEL: any = Symbol.for('PMPFModel')

    // Mappers
    public static readonly ANNEX2TABLE2D_MAPPER: any = Symbol.for('Annex2Table2DMapper')
    public static readonly ANNEX2TABLE2H_MAPPER: any = Symbol.for('Annex2Table2HMapper')
    public static readonly NFE_MAPPER: any = Symbol.for('NFEMapper')
    public static readonly ALIQUOT_MAPPER: any = Symbol.for('AliquotMapper')
    public static readonly PMPF_MAPPER: any = Symbol.for('PMPFMapper')

    // Background Services
    public static readonly MONGODB_CONNECTION_FACTORY: any = Symbol.for('ConnectionFactoryMongodb')
    public static readonly MONGODB_CONNECTION: any = Symbol.for('ConnectionMongodb')
    public static readonly BACKGROUND_SERVICE: any = Symbol.for('BackgroundService')

    // Tasks
    public static readonly REGISTER_SETTINGS_TASK: any = Symbol.for('RegisterSettingsTask')

    // Log
    public static readonly LOGGER: any = Symbol.for('CustomLogger')
}
