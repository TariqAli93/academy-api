import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Grades = function (grade) {
  this.gradeName = grade.gradeName
}

Grades.create = async (newGrade, result) => {
  try {
    const grade = await prismaInstance.grades.create({
      data: newGrade,
    })

    result(null, grade)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Grades.update = async (gradeId, grade, result) => {
  try {
    const updatedGrade = await prismaInstance.grades.update({
      where: {
        gradeId: parseInt(gradeId),
      },
      data: grade,
    })

    result(null, updatedGrade)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Grades.delete = async (gradeId, result) => {
  try {
    const deletedGrade = await prismaInstance.grades.delete({
      where: {
        gradeId: parseInt(gradeId),
      },
    })

    result(null, deletedGrade)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Grades.getAll = async (result) => {
  try {
    const grades = await prismaInstance.grades.findMany({
      include: {
        Students: true,
        Subjects: true
      },
    })

    result(null, grades)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Grades.getById = async (gradeId, result) => {
  try {
    const grade = await prismaInstance.grades.findUnique({
      where: {
        gradeId: parseInt(gradeId),
      },
      include: {
        Students: true,
        Subjects: true
      },
    })

    result(null, grade)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}
export default Grades
