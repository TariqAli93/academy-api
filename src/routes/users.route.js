import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUsers,
  GetUserById,
  UserLogin,
} from '../controllers/users.controller.js'

const userRoute = (app) => {
  app.post('/api/users', CreateUser)
  app.patch('/api/users/:id', UpdateUser)
  app.delete('/api/users/:id', DeleteUser)
  app.get('/api/users', GetUsers)
  app.get('/api/users/:id', GetUserById)
  app.post('/api/users/login', UserLogin)
}

export default userRoute
