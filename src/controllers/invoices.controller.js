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

  Invoices.update(updatedInvoice, req.params.id, (err, data) => {
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

export const FindAllInvoices = (req, res) => {
  Invoices.FindAll((err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Invoice retrieved',
        data
      })
    }
  })
}

export const GetInvoiceById = (req, res) => {
  Invoices.findById(req.params.id, (err, data) => {
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
