import {
    prismaInstance,
    prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'
import moment from 'moment'

const Reports = function (report) {
    this.fromDate = report.fromDate
    this.toDate = report.toDate
}

Reports.create = async (newReport, result) => {
    try {
        const report = await prismaInstance.courses.findMany({
            include: {
                InvoiceInfo: true,
                StudentCourses: {
                    include: {
                        student: true,
                    }
                },

                SubjectCourse: {
                    include: {
                        subject: true,
                        teacher: true,
                    }
                }
            }
        })
        const filter = report.filter(r => {
            return moment(r.createdAt).isBetween(newReport.fromDate, newReport.toDate)
        })

        result(null, filter)
    } catch (error) {
        console.error(error)
        prismaErrorHandling(error, result)
    }
}

export default Reports