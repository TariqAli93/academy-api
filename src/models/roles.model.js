import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Roles = function (role) {
  this.roleName = role.roleName
  this.rolePrivilege = role.rolePrivilege
}

Roles.create = async (newRole, result) => {
  try {
    const role = await prismaInstance.roles.create({
      data: {
        roleName: newRole.roleName,
        rolePrivilege: newRole.rolePrivilege,
      },
    })

    result(null, role)
  } catch (error) {
    console.log(error)
    prismaErrorHandling(error, result)
  }
}

Roles.update = async (id, newRole, result) => {
  try {
    const role = await prismaInstance.roles.update({
      where: {
        roleId: parseInt(id),
      },
      data: {
        roleName: newRole.roleName,
        rolePrivilege: newRole.rolePrivilege,
      },
    })

    result(null, role)
  } catch (error) {
    console.log(error)
    prismaErrorHandling(error, result)
  }
}

Roles.delete = async (id, result) => {
  try {
    const role = await prismaInstance.roles.delete({
      where: {
        roleId: parseInt(id),
      },
    })

    result(null, role)
  } catch (error) {
    console.log(error)
    prismaErrorHandling(error, result)
  }
}

Roles.getRoles = async (result) => {
  try {
    const roles = await prismaInstance.roles.findMany({
      include: {
        Users: true,
      },
    })

    result(null, roles)
  } catch (error) {
    console.log(error)
    prismaErrorHandling(error, result)
  }
}

Roles.getRoleById = async (id, result) => {
  try {
    const roles = await prismaInstance.roles.findMany({
      include: {
        Users: true,
      },

      where: {
        roleId: parseInt(id),
      },
    })

    result(null, roles)
  } catch (error) {
    console.log(error)
    prismaErrorHandling(error, result)
  }
}

export default Roles
