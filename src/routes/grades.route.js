import { 
  CreateGrade,
  UpdateGrade,
  DeleteGrade,
  GetGrades,
  GetGradeById,
 } from '../controllers/grades.controller.js'
 import check from '../middlewares/checkAuth.middleware.js'

const gradeRoute = (app) => {
  app.post('/api/grades',check, CreateGrade)
  app.patch('/api/grades/:id',check, UpdateGrade)
  app.delete('/api/grades/:id',check, DeleteGrade)
  app.get('/api/grades',check, GetGrades)
  app.get('/api/grades/:id',check, GetGradeById)
}

export default gradeRoute
