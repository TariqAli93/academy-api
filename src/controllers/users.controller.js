import User from '../models/users.model.js'
import jwt from 'jsonwebtoken'

export const CreateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const user = new User(req.body)

  User.create(user, (err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      res.send(data)
    }
  })
}

export const UpdateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const user = new User(req.body)

  User.update(req.params.id, user, (err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      res.send(data)
    }
  })
}

export const DeleteUser = (req, res) => {
  User.delete(req.params.id, req.body.isActive, (err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      res.send(data)
    }
  })
}

export const GetUsers = (req, res) => {
  User.getAll((err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      res.send(data)
    }
  })
}

export const GetUserById = (req, res) => {
  User.getById(req.params.id, (err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      res.send(data)
    }
  })
}

export const UserLogin = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }

  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).send({
      message: 'Username or password can not be empty!',
    })
  }

  User.login(username, password, (err, data) => {
    if (err) res.status(err.code).send(err)
    else {
      let token = jwt.sign(
        {
          userId: data.userId,
          userName: data.userName,
          phone: data.phone,
          role: data.role,
        },
        process.env.JWT_KEY,
        {
          expiresIn: '1d',
        },
      )
      res.send(token)
    }
  })
}
