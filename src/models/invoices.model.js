import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'
import moment from 'moment'
moment.locale('ar')

const Invoices = function (invoice) {
  this.discount = invoice.discount
  this.createdAt = invoice.createdAt
  this.priceAmount = invoice.priceAmount
  this.priceRemaining = invoice.priceRemaining
  this.subjectId = invoice.subjectId
  this.studentId = invoice.studentId
}

Invoices.create = async (newInvoice, result) => {
  console.log(newInvoice)
  try {
    const invoice = await prismaInstance.invoice.create({
      data: {
        discount: newInvoice.discount * 1,
        priceRemaining: newInvoice.priceRemaining * 1,
        priceAmount: newInvoice.priceAmount * 1,
        InvoiceInfo: {
          createMany: {
            data: newInvoice.subjectId.map(subject => {
              return {
                idStudent: newInvoice.studentId * 1,
                idSubject: subject * 1,
              }
            })
          },
        },
      },
    })

    result(null, invoice)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
Invoices.update = async (id, updatedInvoice, result) => {
  try {
    const invoices = await prismaInstance.invoice.update({
      where: {
        invoiceId: parseInt(id),
      },
      data: {
        discount: updatedInvoice.discount,
        InvoiceInfo: {
          update: {
            where: {
              invoiceInfoId: parseInt(updatedInvoice.invoiceInfoId),
            },

            data: {
              priceAmount: updatedInvoice.priceAmount,
              priceRemaining: updatedInvoice.priceRemaining,
              idStudent: updatedInvoice.studentId,
              idSubject: updatedInvoice.subjectId,
            }
          }
        }
      }
    })

    // const updateRecord = await prismaInstance.invoiceInfo.updateMany({
    //   where: {
    //     invoiceInfoId: 1,
    //   },
    //   data: {
    //     priceAmount: updatedInvoice.priceAmount,
    //     priceRemaining: updatedInvoice.priceRemaining,
    //     idStudent: updatedInvoice.studentId,
    //     idSubject: updatedInvoice.subjectId,
    //   },
    // })

    result(null, invoices)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
Invoices.delete = async (id, result) => {
  try {
    const deleteRecord = await prismaInstance.invoiceInfo.deleteMany({
      where: {
        idInvoice: parseInt(id),
      },
    })

    const invoice = await prismaInstance.invoice.delete({
      where: {
        invoiceId: parseInt(id),
      },
    })

    result(null, { invoice, deleteRecord })
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
Invoices.getAll = async (result) => {
  try {
    const invoices = await prismaInstance.invoice.findMany({
      include: {
        InvoiceInfo: {
          include: {
            invoice: true,
            student: true,
            subject: true,
          }
        },
      },
    })

    const invoice = invoices.map(invoice => {
      let subjectsPrice = invoice.InvoiceInfo.reduce((acc, curr) => acc + curr.subject.subjectPrice * 1, 0);
      // let subjectsRemainingPrice = invoice.InvoiceInfo.reduce((acc, curr) => acc + curr.priceRemaining * 1, 0)
      return {
        invoiceId: invoice.invoiceId,
        subjects: invoice.InvoiceInfo.map(info => {
          return info.subject
        }),
        student: invoice.InvoiceInfo[0].student,
        subjectsPrice: subjectsPrice,
        paidedPrice: invoice.priceAmount,
        remainingPrice: invoice.priceRemaining,
        createdAt: moment(invoice.createdAt).format('DD/MM/YYYY hh:mm A'),
        discount: parseInt(invoice.discount),
      }
    })
    result(null, invoice)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}
Invoices.getById = async (id, result) => {
  try {
    const invoice = await prismaInstance.invoice.findUnique({
      where: {
        invoiceId: parseInt(id),
      },
      include: {
        InvoiceInfo: true,
      },
    })

    result(null, invoice)
  } catch (error) {
    console.error(error)
    prismaErrorHandling(error, result)
  }
}

export default Invoices
