import { CreateReport } from '../controllers/reports.controller.js';

const reportRoute = (app) => {
    app.get('/api/reports', CreateReport);
}

export default reportRoute;