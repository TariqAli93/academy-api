import {
  CreateStudent,
  DeleteStudent,
  GetAllStudents,
  GetStudentById,
  UpdateStudent,
  createStudentSubject,
  deleteSubjectFromStudent
} from '../controllers/students.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const studentRoute = (app) => {
  app.post('/api/students',check, CreateStudent)
  app.post('/api/students/subjects',check, createStudentSubject)
  app.get('/api/students',check, GetAllStudents)
  app.get('/api/students/:id',check, GetStudentById)
  app.patch('/api/students/:id',check, UpdateStudent)
  app.delete('/api/students/:id',check, DeleteStudent)
  app.delete('/api/students/subjects/:id',check, deleteSubjectFromStudent)
}

export default studentRoute
