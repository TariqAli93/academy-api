import Courses from "../models/courses.model.js";


export const CreateCourse = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Course content can not be empty"
        })
    }

    const course = new Courses(req.body);
    Courses.create(course, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Course."
            })
        } else {
            res.send(data)
        }
    })
}

export const UpdateCourse = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Course content can not be empty"
        })
    }

    const course = new Courses(req.body);
    const { id } = req.params
    Courses.update(course, id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Course."
            })
        } else {
            res.send(data)
        }
    })
}

export const GetAllCourses = async (req, res) => {
    Courses.findAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Course."
            })
        } else {
            res.send(data)
        }
    })
}

export const GetCourse = async (req, res) => {
    const { id } = req.params
    Courses.findOne(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Course."
            })
        } else {
            res.send(data)
        }
    })
}

export const DeleteCourse = async (req, res) => {
    const { id } = req.params
    Courses.delete(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Course."
            })
        } else {
            res.send(data)
        }
    })
}
