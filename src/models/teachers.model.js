import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Teachers = function (teacher) {
  this.teacherName = teacher.teacherName
  this.phone = teacher.phone
  this.specialization = teacher.specialization
  this.subjectId = teacher.subjectId
  this.createdBy = teacher.createdBy
  this.updatedAt = teacher.updatedAt
}

Teachers.create = async (newTeacher, result) => {
  try {
    const teacher = await prismaInstance.teachers.create({
      data: {
        teacherName: newTeacher.teacherName,
        phone: newTeacher.phone,
        specialization: newTeacher.specialization,
        createdBy: newTeacher.createdBy,
      },
    })

    result(null, teacher)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Teachers.update = async (id, newTeacher, result) => {
  try {
    const teacher = await prismaInstance.teachers.update({
      where: {
        teacherId: parseInt(id),
      },
      data: {
        teacherName: newTeacher.teacherName,
        phone: newTeacher.phone,
        specialization: newTeacher.specialization,
      },
    })

    result(null, teacher)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Teachers.delete = async (teacherId, result) => {
  try {
    const teacher = await prismaInstance.teachers.delete({
      where: {
        teacherId: teacherId * 1,
      },
    })

    result(null, { teacher })
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Teachers.getAll = async (result) => {
  try {
    const teacher = await prismaInstance.teachers.findMany({
      include: {
        user: true,
      }
    })
    result(null, teacher)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Teachers.getById = async (id, result) => {
  try {
    const teacher = await prismaInstance.teachers.findUnique({
      where: {
        teacherId: parseInt(id),
      },
      include: {
        user: true,
      }
    })

    result(null, teacher)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
export default Teachers
