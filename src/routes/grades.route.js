import { 
  CreateGrade,
  UpdateGrade,
  DeleteGrade,
  GetGrades,
  GetGradeById,
 } from '../controllers/grades.controller.js'

const gradeRoute = (app) => {
  app.post('/api/grades', CreateGrade)
  app.patch('/api/grades/:id', UpdateGrade)
  app.delete('/api/grades/:id', DeleteGrade)
  app.get('/api/grades', GetGrades)
  app.get('/api/grades/:id', GetGradeById)
}

export default gradeRoute
