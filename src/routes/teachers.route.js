import {
  CreateTeacher,
  UpdateTeacher,
  DeleteTeacher,
  GetAllTeachers,
  GetTeacherById,
} from '../controllers/teachers.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const teacherRoute = (app) => {
  app.post('/api/teachers',check, CreateTeacher)
  app.put('/api/teachers/:id',check, UpdateTeacher)
  app.delete('/api/teachers/:id',check, DeleteTeacher)
  app.get('/api/teachers',check, GetAllTeachers)
  app.get('/api/teachers/:id',check, GetTeacherById)
}

export default teacherRoute
