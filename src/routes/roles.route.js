import {
  GetAllRoles,
  CreateRole,
  GetRoleById,
  UpdateRole,
  DeleteRole
} from '../controllers/roles.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const roleRoute = (app) => {
  app.post('/api/roles', check,CreateRole)
  app.get('/api/roles', check, GetAllRoles)
  app.get('/api/roles/:id', check, GetRoleById)
  app.patch('/api/roles/:id', check, UpdateRole)
  app.delete('/api/roles/:id', check, DeleteRole)
}


export default roleRoute