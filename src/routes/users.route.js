import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUsers,
  GetUserById,
  UserLogin,
} from '../controllers/users.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const userRoute = (app) => {
  app.post('/api/users',check, CreateUser)
  app.patch('/api/users/:id',check, UpdateUser)
  app.delete('/api/users/:id',check, DeleteUser)
  app.get('/api/users',check, GetUsers)
  app.get('/api/users/:id',check, GetUserById)
  app.post('/api/users/login', UserLogin)
}

export default userRoute
