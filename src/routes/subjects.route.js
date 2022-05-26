import {
  CreateSubject,
  DeleteSubject,
  GetSubjectById,
  GetSubjects,
  UpdateSubject,
} from '../controllers/subjects.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const subjectRoute = (app) => {
  app.post('/api/subjects',check, CreateSubject)
  app.get('/api/subjects',check, GetSubjects)
  app.get('/api/subjects/:id',check, GetSubjectById)
  app.patch('/api/subjects/:id',check, UpdateSubject)
  app.delete('/api/subjects/:id',check, DeleteSubject)
}

export default subjectRoute
