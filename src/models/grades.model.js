import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Grades = function (grade) {
  this.gradeName = grade.gradeName
  this.createdBy = grade.createdBy
}

Grades.create = async (grade, result) => {
  try {
    const grades = await prismaInstance.grades.create({
      data: {
        gradeName: grade.gradeName,
        createdBy: grade.createdBy,
      }
    })

    result(null, grades)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Grades.FindAll = async (result) => {
  try {
    const grades = await prismaInstance.grades.findMany()
    result(null, grades)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Grades.update = async (grade, gradeId, result) => {
  try {
    const grades = await prismaInstance.grades.update({
      where: {
        gradeId: gradeId * 1,
      },
      data: {
        gradeName: grade.gradeName,
      }
    })

    result(null, grades)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}


Grades.delete = async (gradeId, result) => {
  try {
    const grades = await prismaInstance.grades.delete({
      where: {
        gradeId: gradeId * 1,
      }
    })

    result(null, grades)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
export default Grades
