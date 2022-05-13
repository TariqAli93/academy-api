import {
  prismaInstance,
  prismaErrorHandling,
} from '../middlewares/handleError.middleware.js'
import moment from 'moment'

const Invoices = function (invoice) {
  this.discount = invoice.discount
  this.createdAt = invoice.createdAt
  this.priceAmount = invoice.priceAmount
  this.priceRemaining = invoice.priceRemaining
  this.subjectId = invoice.subjectId
  this.studentId = invoice.studentId
}

Invoices.create = async (newInvoice, result) => {
  try {
    const invoice = await prismaInstance.invoice.create({
      data: {
        discount: newInvoice.discount,
        createdAt: newInvoice.createdAt,
        InvoiceInfo: {
          create: {
            priceAmount: newInvoice.priceAmount,
            priceRemaining: newInvoice.priceRemaining,
            idStudent: newInvoice.studentId,
            idSubject: newInvoice.subjectId,
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
      include: {
        InvoiceInfo: true,
      },
      data: {
        discount: updatedInvoice.discount,
      },
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
        InvoiceInfo: true,
      },
    })

    result(null, invoices)
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
