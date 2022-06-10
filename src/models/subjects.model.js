import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Subjects = function (subject) {
  this.subjectName = subject.subjectName
  this.idGrade = subject.idGrade
  this.updatedAt = subject.updatedAt
  this.createdBy = subject.createdBy
}

Subjects.create = async (newSubject, result) => {
  try {
    const subject = await prismaInstance.subjects.create({
      data: {
        subjectName: newSubject.subjectName,
        idGrade: newSubject.idGrade * 1,
        createdBy: newSubject.createdBy * 1,
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}


Subjects.FindAll = async (result) => {
  try {
    const subjects = await prismaInstance.subjects.findMany({
      include: {
        grade: true,
      }
    })

    result(null, subjects.map(subject => {
      return {
        ...subject,
        subjectFullName: subject.subjectName + ' ' + subject.grade.gradeName,
      }
    }))
  } catch (error) {
    console.error(error)
    result(prismaErrorHandling(error), null)
  }
}


Subjects.update = async (newSubject, subjectId, result) => {
  console.log(newSubject)
  try {
    const subject = await prismaInstance.subjects.update({
      where: {
        subjectId: subjectId * 1,
      },
      data: {
        subjectName: newSubject.subjectName,
        idGrade: newSubject.idGrade * 1,
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}


Subjects.delete = async (subjectId, result) => {
  try {
    const subject = await prismaInstance.subjects.delete({
      where: {
        subjectId: subjectId * 1,
      },
    })

    result(null, subject)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
export default Subjects
