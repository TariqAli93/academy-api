import {
  CreateTeacher,
  UpdateTeacher,
  DeleteTeacher,
  GetAllTeachers,
  GetTeacherById,
} from '../controllers/teachers.controller.js'

const teacherRoute = (app) => {
  app.post('/api/teachers', CreateTeacher)
  app.patch('/api/teachers/:id', UpdateTeacher)
  app.delete('/api/teachers/:id', DeleteTeacher)
  app.get('/api/teachers', GetAllTeachers)
  app.get('/api/teachers/:id', GetTeacherById)
}

export default teacherRoute
