import {
  GetAllRoles,
  CreateRole,
  GetRoleById,
  UpdateRole,
  DeleteRole
} from '../controllers/roles.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const roleRoute = (app) => {
  app.post('/api/roles', CreateRole)
  app.get('/api/roles', check, GetAllRoles)
  app.get('/api/roles/:id', GetRoleById)
  app.patch('/api/roles/:id', UpdateRole)
  app.delete('/api/roles/:id', DeleteRole)
}


export default roleRoute