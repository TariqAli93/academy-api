import { prismaInstance, prismaErrorHandling } from '../middlewares/handleError.middleware.js';

const subjectCourse = function (sb) {
    this.idSubject = sb.idSubject;
    this.idCourse = sb.idCourse;
    this.idTeacher = sb.idTeacher;
    this.idHall = sb.idHall;
    this.updatedAt = sb.updatedAt;
    this.subjectCourseId = sb.subjectCourseId;
}

subjectCourse.create = async (newSubjectCourse, result) => {
    let subjectCourse;
    try {
        if (newSubjectCourse.subjectCourseId) {
            subjectCourse = await prismaInstance.subjectCourse.update({
                where: {
                    subjectCourseId: newSubjectCourse.subjectCourseId * 1
                },
                data: {
                    idCourse: newSubjectCourse.idCourse,
                    idSubject: newSubjectCourse.idSubject,
                    idHall: newSubjectCourse.idHall,
                    idTeacher: newSubjectCourse.idTeacher,
                    updatedAt: newSubjectCourse.updatedAt,
                }
            })
        } else {
            subjectCourse = await prismaInstance.subjectCourse.create({
                data: {
                    idCourse: newSubjectCourse.idCourse,
                    idSubject: newSubjectCourse.idSubject,
                    idHall: newSubjectCourse.idHall,
                    idTeacher: newSubjectCourse.idTeacher,
                }
            })
        }

        result(null, subjectCourse);
    } catch (err) {
        console.log(err);
        prismaErrorHandling(err, result);
    }
}

subjectCourse.update = async (newSubjectCourse, id, result) => {
    try {
        const subjectCourse = await prismaInstance.subjectCourse.update({
            where: {
                subjectCourseId: id * 1
            },

            data: newSubjectCourse
        });

        result(null, subjectCourse);
    } catch (err) {
        console.log(err);
        prismaErrorHandling(err, result);
    }
}

subjectCourse.findAll = async (result) => {
    try {
        const subjectCourse = await prismaInstance.subjectCourse.findMany();
        result(null, subjectCourse);
    } catch (err) {
        console.log(err);
        prismaErrorHandling(err, result);
    }
}

subjectCourse.findOne = async (id, result) => {
    try {
        const subjectCourse = await prismaInstance.subjectCourse.findFirst({
            where: {
                subjectCourseId: id * 1
            }
        });
        result(null, subjectCourse);
    } catch (err) {
        console.log(err);
        prismaErrorHandling(err, result);
    }
}

subjectCourse.delete = async (id, result) => {
    try {
        const subjectCourse = await prismaInstance.subjectCourse.delete({
            where: {
                subjectCourseId: id * 1
            }
        });
        result(null, subjectCourse);
    } catch (err) {
        console.log(err);
        prismaErrorHandling(err, result);
    }
}

export default subjectCourse