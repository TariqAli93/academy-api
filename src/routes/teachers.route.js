import {
  CreateTeacher,
  UpdateTeacher,
  DeleteTeacher,
  GetAllTeachers,
  GetTeacherById,
  GetSpecializations
} from '../controllers/teachers.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const teacherRoute = (app) => {
  app.post('/api/teachers',check, CreateTeacher)
  app.patch('/api/teachers/:id',check, UpdateTeacher)
  app.delete('/api/teachers',check, DeleteTeacher)
  app.get('/api/teachers',check, GetAllTeachers)
  app.get('/api/teachers/:id',check, GetTeacherById)
  app.get('/api/specializations', check, GetSpecializations)
}

export default teacherRoute
