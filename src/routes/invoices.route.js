import {
  CreateInvoice,
  DeleteInvoice,
  GetAllInvoices,
  GetInvoiceById,
  UpdateInvoice,
} from '../controllers/invoices.controller.js'
import check from '../middlewares/checkAuth.middleware.js'

const invoiceRoute = (app) => {
  app.post('/api/invoices',check, CreateInvoice)
  app.patch('/api/invoices/:id',check, UpdateInvoice)
  app.delete('/api/invoices/:id',check, DeleteInvoice)
  app.get('/api/invoices',check, GetAllInvoices)
  app.get('/api/invoices/:id',check, GetInvoiceById)
}

export default invoiceRoute
