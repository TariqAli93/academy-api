import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Students = function (student) {
  this.firstName = student.firstName
  this.lastName = student.lastName
  this.phone = student.phone
  this.parentPhone = student.parentPhone
  this.idGrade = student.idGrade
  this.updatedAt = student.updatedAt
  this.createdBy = student.createdBy
  this.idCourse = student.idCourse
}

Students.create = async (newStudnet, result) => {
  try {
    console.log(newStudnet.idCourse)
    const student = await prismaInstance.students.create({
      data: {
        firstName: newStudnet.firstName,
        lastName: newStudnet.lastName,
        phone: newStudnet.phone,
        parentPhone: newStudnet.parentPhone,
        idGrade: newStudnet.idGrade,
        createdBy: newStudnet.createdBy,
        StudentCourses: {
          createMany: {
            data: newStudnet.idCourse.map(id => {

              return {
                idCourse: id,
                createdBy: newStudnet.createdBy,
              }
            })
          },
        }
      },
    })

    result(null, student)
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
        updatedAt: new Date().toISOString(),
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
    await prismaInstance.studentCourses.deleteMany({
      where: {
        idStudent: parseInt(id),
      }
    })

    const student = await prismaInstance.students.delete({
      where: {
        studentId: parseInt(id),
      },
    })

    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.getAll = async (result) => {
  try {
    const students = await prismaInstance.students.findMany({
      include: {
        grade: true,
        user: true,
        StudentCourses: {
          include: {
            course: true,
            user: true,
          }
        }
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
        grade: true,
        user: true,
        StudentCourses: {
          include: {
            course: true,
            user: true,
          }
        }
      },
    })
    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

// student course api
Students.addStudentCourse = async (idStudent, idCourse, createdBy, result) => {
  try {
    const student = await prismaInstance.studentCourses.createMany({
      data: idCourse.map((id) => {
        return {
          idCourse: id,
          idStudent: parseInt(idStudent),
          createdBy: parseInt(createdBy),
        }
      })
    })

    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Students.deleteStudentCourse = async (studentCourseId, result) => {
  try {
    const student = await prismaInstance.studentCourses.delete({
      where: {
        studentCourseId: parseInt(studentCourseId),
      },
    })

    result(null, student)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

export default Students
