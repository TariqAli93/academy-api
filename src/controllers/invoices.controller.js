import Invoices from '../models/invoices.model.js'

export const CreateInvoice = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const newInvoice = new Invoices(req.body)

  Invoices.create(newInvoice, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice created',
        data,
      })
    }
  })
}

export const UpdateInvoice = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const updatedInvoice = new Invoices(req.body)

  Invoices.update(req.params.id, updatedInvoice, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice updated',
        data,
      })
    }
  })
}

export const DeleteInvoice = (req, res) => {
  Invoices.delete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice deleted',
        data,
      })
    }
  })
}

export const GetAllInvoices = (req, res) => {
  Invoices.getAll((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice retrieved',
        data,
      })
    }
  })
}

export const GetInvoiceById = (req, res) => {
  Invoices.getById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice retrieved',
        data,
      })
    }
  })
}
