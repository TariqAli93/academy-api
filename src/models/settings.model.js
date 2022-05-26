import {
    prismaInstance,
    prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Settings = function (setting) {
    this.appName = setting.appName
    this.appVersion = setting.appVersion
    this.isFirstRun = setting.isFirstRun
}

Settings.findAllSettings = async (result) => {
    try {
        const settings = await prismaInstance.settings.findMany()

        result(null, settings)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

export default Settings
