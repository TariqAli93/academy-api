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

export const FindAllGrades = (req, res) => {
  Grades.FindAll((err, grades) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Grades found successfully',
        data: grades,
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

  Grades.update(req.body, req.params.id, (err, grade) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      })
    } else {
      res.status(200).json({
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
      res.status(200).json({
        success: true,
        message: 'Grade deleted successfully',
        data: grade,
      })
    }
  })
}
