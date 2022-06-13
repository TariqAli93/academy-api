import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'

const Invoices = function (invoice) {
  this.idStudent = invoice.idStudent
  this.installment = invoice.installment
  this.createdBy = invoice.createdBy
  this.idInvoice = invoice.idInvoice
  this.idCourse = invoice.idCourse
  this.amount = invoice.amount
  this.remaining = invoice.remaining
  this.monthlyPaid = invoice.monthlyPaid
}

Invoices.create = async (newInvoice, result) => {
  try {
    const invoice = await prismaInstance.invoice.create({
      data: {
        idStudent: newInvoice.idStudent * 1,
        installment: newInvoice.installment * 1,
        createdBy: newInvoice.createdBy * 1,
        amount: newInvoice.amount * 1,
        remaining: newInvoice.remaining * 1,
        monthlyPaid: newInvoice.monthlyPaid * 1,
        InvoiceInfo: {
          createMany: {
            data: newInvoice.idCourse.map(id => {
              return {
                idCourse: id * 1
              }
            })
          }
        }
      }
    })

    result(null, invoice)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Invoices.FindAll = async (result) => {
  try {
    const invoices = await prismaInstance.invoice.findMany({
      include: {
        user: true,
        student: {
          include: {
            StudentCourses: {
              include: {
                course: true
              }
            }
          }
        },
        InvoiceInfo: true
      }
    })


    result(null, invoices.map(invoice => {
      return {
        invoiceId: invoice.invoiceId,
        createdBy: invoice.user.userName,
        installment: invoice.installment,
        student: invoice.student.firstName + ' ' + invoice.student.lastName,
        courses: invoice.student.StudentCourses.map((course) => course.course),
        createdAt: invoice.createdAt,
        amount: invoice.amount,
        remaining: invoice.remaining,
        monthlyPaid: invoice.monthlyPaid,
        discount: invoice.student.StudentCourses.reduce((acc, cur) => acc + cur.course.discount * 1, 0),
      }
    }))
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

Invoices.delete = async (invoiceId, result) => {
  try {
    await prismaInstance.invoiceInfo.deleteMany({
      where: {
        idInvoice: invoiceId * 1
      }
    })

    const invoice = await prismaInstance.invoice.delete({
      where: {
        invoiceId: invoiceId * 1
      },
    })

    result(null, invoice)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

export default Invoices
