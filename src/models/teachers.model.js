import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Teachers = function (teacher) {
  this.firstName = teacher.firstName
  this.lastName = teacher.lastName
  this.salary = teacher.salary
  this.phone = teacher.phone
  this.specializationId = teacher.specializationId
  this.subjectId = teacher.subjectId
}

Teachers.create = async (newTeacher, result) => {
  try {
    const teacher = await prismaInstance.teachers.create({
      data: {
        firstName: newTeacher.firstName,
        lastName: newTeacher.lastName,
        salary: newTeacher.salary,
        phone: newTeacher.phone,
        idSpecialization: newTeacher.specializationId,
        SubjectOnTeachers: {
          create: {
            idSubject: newTeacher.subjectId,
          },
        },
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
        firstName: newTeacher.firstName,
        lastName: newTeacher.lastName,
        salary: newTeacher.salary,
        phone: newTeacher.phone,
        idSpecialization: newTeacher.specializationId,
      },

      include: {
        SubjectOnTeachers: {
          include: {
            subject: true,
          }
        },
        specialization: true,
      },
    })

    let updateRecord;

    if (teacher.SubjectOnTeachers.length > 0) {
      updateRecord = await prismaInstance.subjectOnTeachers.update({
        where: {
          subjectOnTeachersId: teacher.SubjectOnTeachers[0].subjectOnTeachersId,
        },

        data: {
          idSubject: newTeacher.subjectId,
        },
      })
    } else {
      updateRecord = await prismaInstance.subjectOnTeachers.create({
        data: {
          idSubject: newTeacher.subjectId,
          idTeacher: teacher.teacherId,
        },
      })
    }

    result(null, { teacher, updateRecord })
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Teachers.delete = async (teacherId, subjectId, result) => {
  try {
    if (subjectId) {
      const deleteRecord = await prismaInstance.subjectOnTeachers.delete({
        where: {
          idSubject: subjectId * 1,
        },
      })
    }

    const teacher = await prismaInstance.teachers.delete({
      where: {
        teacherId: teacherId * 1,
      },

      include: {
        SubjectOnTeachers: true,
        specialization: true,
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
        SubjectOnTeachers: {
          include: {
            subject: true,
          }
        },
        specialization: true,
      },
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
        SubjectOnTeachers: true,
        specialization: true,
      },
    })

    result(null, teacher)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}


Teachers.specializations = async (result) => {
  try {
    const specializations = await prismaInstance.specialization.findMany();

    result(null, specializations)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
export default Teachers
