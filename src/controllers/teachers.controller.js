import Teachers from '../models/teachers.model.js'

export const CreateTeacher = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      success: false,
      message: "Content can't be empty!",
    })
  }

  const newTeacher = new Teachers(req.body)
  Teachers.create(newTeacher, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Teacher created successfully!',
        data: data,
      })
    }
  })
}

export const UpdateTeacher = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: 'No data provided',
    })
  }

  const { id } = req.params
  const teacher = new Teachers(req.body)
  Teachers.update(id, teacher, (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Teacher updated successfully',
        data: data,
      })
    }
  })
}

export const DeleteTeacher = (req, res) => {
  Teachers.delete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Teacher deleted successfully',
        data: data,
      })
    }
  })
}

export const GetAllTeachers = (req, res) => {
  Teachers.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Teachers fetched successfully',
        data: data,
      })
    }
  })
}

export const GetTeacherById = (req, res) => {
  const { id } = req.params
  Teachers.getById(id, (err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Teacher fetched successfully',
        data: data,
      })
    }
  })
}

export const GetSpecializations = (req, res) => {
  Teachers.specializations((err, data) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err,
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Specializations fetched successfully',
        data: data,
      })
    }
  })
}