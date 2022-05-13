import Grades from '../models/grades.model.js'

export const CreateGrade = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const newGrade = new Grades(req.body)

  Grades.create(newGrade, (err, grade) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Grade created successfully',
        data: grade,
      })
    }
  })
}

export const UpdateGrade = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const newGrade = new Grades(req.body)

  Grades.update(req.params.id, newGrade, (err, grade) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Grade updated successfully',
        data: grade,
      })
    }
  })
}

export const DeleteGrade = (req, res) => {
  Grades.delete(req.params.id, (err, grade) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(201).json({
        success: true,
        message: 'Grade deleted successfully',
        data: grade,
      })
    }
  })
}

export const GetGrades = (req, res) => {
  Grades.getAll((err, grades) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      if (grades.length === 0) {
        res.status(404).json({
          success: false,
          message: 'No grades found',
        })
      } else {
        res.status(201).json({
          success: true,
          message: 'Grades retrieved successfully',
          data: grades,
        })
      }
    }
  })
}

export const GetGradeById = (req, res) => {
  Grades.getById(req.params.id, (err, grade) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      if (!grade) {
        res.status(404).json({
          success: false,
          message: 'No grade found',
        })
      } else {
        res.status(201).json({
          success: true,
          message: 'Grade retrieved successfully',
          data: grade,
        })
      }
    }
  })
}
