import Subjects from '../models/subjects.model.js'

export const CreateSubject = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const newSubject = new Subjects(req.body)

  Subjects.create(newSubject, (err, subject) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Subject created successfully',
        data: subject,
      })
    }
  })
}

export const UpdateSubject = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const newSubject = new Subjects(req.body)

  Subjects.update(req.params.id, newSubject, (err, subject) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Subject updated successfully',
        data: subject,
      })
    }
  })
}

export const DeleteSubject = (req, res) => {
  Subjects.delete(req.params.id, (err, subject) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Subject deleted successfully',
        data: subject,
      })
    }
  })
}

export const GetSubjects = (req, res) => {
  Subjects.getAll((err, subjects) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      if (subjects.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No subjects found',
        })
      } else {
        res.status(201).json({
          success: true,
          message: 'Subjects retrieved successfully',
          data: subjects,
        })
      }
    }
  })
}

export const GetSubjectById = (req, res) => {
  Subjects.getById(req.params.id, (err, subject) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      if (!subject) {
        res.status(404).json({
          success: false,
          message: 'No subject found',
        })
      } else {
        res.status(201).json({
          success: true,
          message: 'Subject retrieved successfully',
          data: subject,
        })
      }
    }
  })
}
