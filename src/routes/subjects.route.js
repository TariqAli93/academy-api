import {
  CreateSubject,
  DeleteSubject,
  GetSubjectById,
  GetSubjects,
  UpdateSubject,
} from '../controllers/subjects.controller.js'

const subjectRoute = (app) => {
  app.post('/api/subjects', CreateSubject)
  app.get('/api/subjects', GetSubjects)
  app.get('/api/subjects/:id', GetSubjectById)
  app.patch('/api/subjects/:id', UpdateSubject)
  app.delete('/api/subjects/:id', DeleteSubject)
}

export default subjectRoute
