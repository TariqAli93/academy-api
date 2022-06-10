import { 
  CreateGrade,
  FindAllGrades,
  UpdateGrade,
  DeleteGrade,
  // GetGrades,
  // GetGradeById,
 } from '../controllers/grades.controller.js'
 import check from '../middlewares/checkAuth.middleware.js'

const gradeRoute = (app) => {
  app.post('/api/grades',check, CreateGrade)
  app.get('/api/grades',check, FindAllGrades)
  app.put('/api/grades/:id',check, UpdateGrade)
  // app.get('/api/grades/:id',check, GetGradeById)
  app.delete('/api/grades/:id',check, DeleteGrade)
}

export default gradeRoute
