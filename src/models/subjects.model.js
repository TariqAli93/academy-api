import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Subjects = function (subject) {
  this.subjectName = subject.subjectName
  this.subjectPrice = subject.subjectPrice
  this.gradeId = subject.gradeId
}

Subjects.create = async (newSubject, result) => {
  try {
    const subject = await prismaInstance.subjects.create({
      data: {
        subjectName: newSubject.subjectName,
        subjectPrice: newSubject.subjectPrice,
        idGrade: parseInt(newSubject.gradeId),
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Subjects.update = async (id, newSubject, result) => {
  try {
    const subject = await prismaInstance.subjects.update({
      where: {
        subjectId: parseInt(id),
      },
      data: {
        subjectName: newSubject.subjectName,
        subjectPrice: newSubject.subjectPrice,
        idGrade: parseInt(newSubject.gradeId),
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Subjects.delete = async (id, result) => {
  try {
    const subject = await prismaInstance.subjects.delete({
      where: {
        subjectId: parseInt(id),
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Subjects.getAll = async (result) => {
  try {
    const subjects = await prismaInstance.subjects.findMany({
      include: {
        SubjectOnStudents: true,
        SubjectOnTeachers: true,
        grade: true,
      },
    })

    result(null, subjects)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}

Subjects.getById = async (id, result) => {
  try {
    const subject = await prismaInstance.subjects.findUnique({
      where: {
        subjectId: parseInt(id),
      },
      include: {
        SubjectOnStudents: true,
        SubjectOnTeachers: true,
        grade: true,
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}
export default Subjects
