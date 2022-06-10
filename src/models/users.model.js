import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const User = function (user) {
  this.username = user.username
  this.password = user.password
  this.phone = user.phone
  this.role = user.role
}

User.create = async (newUser, result) => {
  try {
    const user = await prismaInstance.users.create({
      data: {
        userName: newUser.username,
        password: newUser.password,
        phone: newUser.phone,
        role: newUser.role,
      },
    })

    result(null, user)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

User.update = async (userId, updatedUser, result) => {
  try {
    const user = await prismaInstance.users.update({
      where: {
        userId: userId * 1,
      },
      data: {
        userName: updatedUser.username,
        password: updatedUser.password,
        phone: updatedUser.phone,
        role: updatedUser.role,
      },
    })
    result(null, user)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

User.delete = async (userId, result) => {
  try {
    const user = await prismaInstance.users.delete({
      where: {
        userId: userId * 1,
      },
    })
    result(null, user)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

User.getAll = async (result) => {
  try {
    const users = await prismaInstance.users.findMany()

    if (users.length > 0) result(null, users)
    else {
      let error = {
        error: 'error in field',
        code: 404,
        errorMessage: 'لا يوجد مستخدمين في النظام',
      }
      result(error, null)
    }
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

User.getById = async (userId, result) => {
  try {
    const user = await prismaInstance.users.findFirst({
      where: {
        userId: userId * 1,
      },
    })

    if (user) {
      result(null, user)
    }

    let error = {
      error: 'error in field',
      code: 404,
      errorMessage: 'لم يتم العثور على المستخدم يرجى التحقق من البيانات',
    }
    result(error, null)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

User.login = async (userName, password, result) => {
  try {
    const user = await prismaInstance.users.findFirst({
      where: {
        AND: [
          {
            userName: userName,
          },
          {
            password: password,
          },
        ],
      }
    })

    if (user) {
      result(null, user)
    } else {
      let error = {
        error: 'error in field',
        code: 404,
        errorMessage: 'لم يتم العثور على الحساب يرجى التحقق من البيانات',
      }
      result(error, null)
    }
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}
export default User
