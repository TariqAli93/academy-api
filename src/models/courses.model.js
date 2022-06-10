import { prismaInstance, prismaErrorHandling } from "../middlewares/handleError.middleware.js";

const Courses = function (course) {
    this.courseName = course.courseName
    this.coursePrice = course.coursePrice
    this.startAt = course.startAt
    this.endAt = course.endAt
    this.isFinished = course.isFinished
    this.discount = course.discount
    this.updatedAt = course.updatedAt
    this.percentage = course.percentage
    this.createdBy = course.createdBy
}

Courses.create = async (newCourse, result) => {
    try {
        const course = await prismaInstance.courses.create({
            data: newCourse,
        })

        result(null, course)
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error, result)
    }
}

Courses.update = async (newCourse, courseId, result) => {
    try {
        const course = await prismaInstance.courses.update({
            where: {
                courseId: courseId * 1
            },
            data: newCourse
        })

        result(null, course)
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error, result)
    }
}

Courses.findAll = async (result) => {
    try {
        const courses = await prismaInstance.courses.findMany({
            include: {
                user: true,
                SubjectCourse: {
                    include: {
                        subject: {
                            include: {
                                grade: true
                            }
                        },
                        teacher: true,
                        hall: true,
                    }
                },
                StudentCourses: {
                    include: {
                        student: true,
                    }
                },
            }
        })

        result(null, courses.map(course => {
            return {
                ...course,
                SubjectCourse: course.SubjectCourse.map(subjectCourse => {
                    return {
                        ...subjectCourse,
                        subjectFullName: subjectCourse.subject.subjectName + ' ' + subjectCourse.subject.grade.gradeName,
                    }
                }),
            }
        }))
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error, result)
    }
}

Courses.findOne = async (courseId, result) => {
    try {
        const course = await prismaInstance.courses.findFirst({
            where: {
                courseId: courseId * 1
            }
        })

        result(null, course)
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error, result)
    }
}

Courses.delete = async (courseId, result) => {
    try {
        await prismaInstance.subjectCourse.deleteMany({
            where: {
                idCourse: courseId * 1
            }
        })

        const course = await prismaInstance.courses.delete({
            where: {
                courseId: courseId * 1
            }
        })

        console.log(course)
        result(null, course)
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error.response, null)
    }
}


export default Courses