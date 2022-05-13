import Roles from '../models/roles.model.js'

export const CreateRole = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Content can't be empty!",
    })
  }

  const role = new Roles(req.body)

  Roles.create(role, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Role created successfully!',
      data,
    })
  })
}

export const UpdateRole = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Content can't be empty!",
    })
  }

  const { id } = req.params
  const role = new Roles(req.body)

  Roles.update(id, role, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Role updated successfully!',
      data,
    })
  })
}

export const GetAllRoles = (req, res) => {
  Roles.getRoles((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Roles fetched successfully!',
      data,
    })
  })
}

export const GetRoleById = (req, res) => {
  Roles.getRoleById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Roles fetched successfully!',
      data,
    })
  })
}

export const DeleteRole = (req, res) => {
  Roles.delete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Role deleted successfully!',
      data,
    })
  })
}
