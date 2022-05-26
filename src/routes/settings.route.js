import { GetAllSettings } from '../controllers/settings.controller.js';

const settingRoute = (app) => {
    app.get('/api/settings', GetAllSettings);
}

export default settingRoute