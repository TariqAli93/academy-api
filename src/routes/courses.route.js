import { CreateCourse, UpdateCourse, GetAllCourses, GetCourse, DeleteCourse } from '../controllers/courses.controller.js';
import check from '../middlewares/checkAuth.middleware.js';

const coursesRoute = (app) => {
    app.post('/api/courses', check, CreateCourse)
    app.put('/api/courses/:id', check, UpdateCourse)
    app.get('/api/courses', check, GetAllCourses)
    app.get('/api/courses/:id', check, GetCourse)
    app.delete('/api/courses/:id', check, DeleteCourse)
}

export default coursesRoute