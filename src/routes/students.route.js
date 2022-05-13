import {
  CreateStudent,
  DeleteStudent,
  GetAllStudents,
  GetStudentById,
  UpdateStudent,
} from '../controllers/students.controller.js'

const studentRoute = (app) => {
  app.post('/api/students', CreateStudent)
  app.get('/api/students', GetAllStudents)
  app.get('/api/students/:id', GetStudentById)
  app.patch('/api/students/:id', UpdateStudent)
  app.delete('/api/students/:id', DeleteStudent)
}

export default studentRoute
