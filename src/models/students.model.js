import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Students = function (student) {
  this.firstName = student.firstName
  this.lastName = student.lastName
  this.phone = student.phone
  this.parentPhone = student.parentPhone
  this.gradeId = student.gradeId
  this.subjectIds = student.subjectIds
}

Students.create = async (newStudnet, result) => {
  try {
    const student = await prismaInstance.students.create({
      data: {
        firstName: newStudnet.firstName,
        lastName: newStudnet.lastName,
        phone: newStudnet.phone,
        parentPhone: newStudnet.parentPhone,
        idGrade: newStudnet.gradeId,
        SubjectOnStudents: {
          create: newStudnet.subjectIds.map((subjectId) => {
            return {
              idSubject: subjectId,
            }
          }),
        },
      },
    })

    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.createSubject = async (studentId, subjectId, result) => {
  try {
    if (subjectId.length > 1) {
      const subjects = await prismaInstance.subjectOnStudents.createMany({
        data: subjectId.map((subject) => {
          return {
            idStudent: studentId,
            idSubject: subject,
          }
        }),
      })

      result(null, subjects)
    } else {
      const subject = await prismaInstance.subjectOnStudents.create({
        data: {
          idStudent: studentId,
          idSubject: subjectId[0],
        },
      })

      result(null, subject)
    }
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.update = async (id, newStudnet, result) => {
  try {
    const student = await prismaInstance.students.update({
      where: {
        studentId: parseInt(id),
      },
      data: {
        firstName: newStudnet.firstName,
        lastName: newStudnet.lastName,
        phone: newStudnet.phone,
        parentPhone: newStudnet.parentPhone,
        idGrade: newStudnet.gradeId,
      },
    })

    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.delete = async (id, result) => {
  try {
    const deleteRecord = await prismaInstance.subjectOnStudents.deleteMany({
      where: {
        idStudent: parseInt(id),
      },
    })

    const student = await prismaInstance.students.delete({
      where: {
        studentId: parseInt(id),
      },
    })

    result(null, { student, deleteRecord })
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}


Students.deleteSubject = async (id, result) => {
  try {
    const deleteRecord = await prismaInstance.subjectOnStudents.deleteMany({
      where: {
        subjectOnStudentId: parseInt(id),
      },
    })

    result(null, deleteRecord)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.getAll = async (result) => {
  try {
    const students = await prismaInstance.students.findMany({
      include: {
        SubjectOnStudents: {
          include: {
            subject: true,
          },
        },
        grade: true,
      },
    })
    result(null, students.map(student => {
      return {
        ...student,
        studentName: student.firstName + ' ' + student.lastName,
      }
    }))
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.getById = async (id, result) => {
  try {
    const student = await prismaInstance.students.findUnique({
      where: {
        studentId: parseInt(id),
      },
      include: {
        SubjectOnStudents: {
          include: {
            subject: true,
          },
        },
        grade: true,
      },
    })
    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

export default Students
