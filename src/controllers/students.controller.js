import Students from '../models/students.model.js'

export const CreateStudent = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Student content can not be empty',
    })
  }

  const newStudent = new Students(req.body)

  Students.create(newStudent, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Student created successfully',
        data: data,
      })
    }
  })
}

export const UpdateStudent = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Student content can not be empty',
    })
  }

  const newStudent = new Students(req.body)

  Students.update(req.params.id, newStudent, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Student updated successfully',
        data: data,
      })
    }
  })
}

export const DeleteStudent = (req, res) => {
  Students.delete(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Student deleted successfully',
        data: data,
      })
    }
  })
}

export const GetAllStudents = (req, res) => {
  Students.getAll((err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Students retrieved successfully',
        data: data,
      })
    }
  })
}

export const GetStudentById = (req, res) => {
  Students.getById(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: 'No student found',
        })
      } else {
        return res.status(200).send({
          success: true,
          message: 'Student retrieved successfully',
          data: data,
        })
      }
    }
  })
}

export const AddStudentCourse = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Student content can not be empty',
    })
  }

  Students.addStudentCourse(req.body.idStudent, req.body.idCourse, req.body.createdBy, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Student course added successfully',
        data: data,
      })
    }
  })
}


export const DeleteStudentCourse = (req, res) => {
  Students.deleteStudentCourse(req.params.id, (err, data) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err.message,
      })
    } else {
      return res.status(200).send({
        success: true,
        message: 'Student course deleted successfully',
        data: data,
      })
    }
  })
}