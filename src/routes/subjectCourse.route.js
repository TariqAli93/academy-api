import { Create, Update, FindAll, FindOne, Delete } from '../controllers/subjectCourse.controller.js';

const subjectCourseRoute = (app) => {
    app.post('/api/subjectCourse', Create);
    app.put('/api/subjectCourse/:id', Update);
    app.get('/api/subjectCourse', FindAll);
    app.get('/api/subjectCourse/:id', FindOne);
    app.delete('/api/subjectCourse/:id', Delete);
}

export default subjectCourseRoute