import {
  CreateStudent,
  DeleteStudent,
  GetAllStudents,
  GetStudentById,
  UpdateStudent,
  AddStudentCourse,
  DeleteStudentCourse
} from '../controllers/students.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const studentRoute = (app) => {
  app.post('/api/students',check, CreateStudent)
  app.get('/api/students',check, GetAllStudents)
  app.get('/api/students/:id',check, GetStudentById)
  app.put('/api/students/:id',check, UpdateStudent)
  app.delete('/api/students/:id',check, DeleteStudent)

  // student course api
  app.post('/api/students/courses', check, AddStudentCourse)
  app.delete('/api/students/courses/:id', check, DeleteStudentCourse)
}

export default studentRoute
