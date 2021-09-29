/**
 * Constants used in dependence injection.
 *
 * @abstract
 */
export abstract class Identifier {
    public static readonly APP: any = Symbol.for('App')

    // Controllers
    public static readonly HOME_CONTROLLER: any = Symbol.for('HomeController')
    public static readonly ANNEX2TABLE2D_CONTROLLER: any = Symbol.for('Annex2Table2DController')

    // Services
    public static readonly ANNEX2TABLE2D_SERVICE: any = Symbol.for('Annex2Table2DService')

    // Repositories
    public static readonly ANNEX2TABLE2D_REPOSITORY: any = Symbol.for('Annex2Table2DRepository')

    // Models
    public static readonly ANNEX2TABLE2D_REPO_MODEL: any = Symbol.for('Annex2Table2DRepoModel')

    // Mappers
    public static readonly ANNEX2TABLE2D_MAPPER: any = Symbol.for('Annex2Table2DMapper')


    // Background Services
    public static readonly MONGODB_CONNECTION_FACTORY: any = Symbol.for('ConnectionFactoryMongodb')
    public static readonly MONGODB_CONNECTION: any = Symbol.for('ConnectionMongodb')
    public static readonly BACKGROUND_SERVICE: any = Symbol.for('BackgroundService')

    // Tasks
    public static readonly REGISTER_SETTINGS_TASK: any = Symbol.for('RegisterSettingsTask')

    // Log
    public static readonly LOGGER: any = Symbol.for('CustomLogger')
}
