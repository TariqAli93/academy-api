import {
  CreateSubject,
  DeleteSubject,
  FindAllSubjects,
  UpdateSubject,
} from '../controllers/subjects.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const subjectRoute = (app) => {
  app.post('/api/subjects',check, CreateSubject)
  app.get('/api/subjects',check, FindAllSubjects)
  app.put('/api/subjects/:id',check, UpdateSubject)
  app.delete('/api/subjects/:id',check, DeleteSubject)
}

export default subjectRoute
