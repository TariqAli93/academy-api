import {
  CreateInvoice,
  DeleteInvoice,
  GetAllInvoices,
  GetInvoiceById,
  UpdateInvoice,
} from '../controllers/invoices.controller.js'

const invoiceRoute = (app) => {
  app.post('/api/invoices', CreateInvoice)
  app.patch('/api/invoices/:id', UpdateInvoice)
  app.delete('/api/invoices/:id', DeleteInvoice)
  app.get('/api/invoices', GetAllInvoices)
  app.get('/api/invoices/:id', GetInvoiceById)
}

export default invoiceRoute
