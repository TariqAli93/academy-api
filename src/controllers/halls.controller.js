import Halls from "../models/halls.model.js";

export const Create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const newHall = new Halls(req.body)

    Halls.create(newHall, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Hall."
            })
        else res.send(data)
    })
}

export const Update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const newHall = new Halls(req.body)

    Halls.update(newHall, req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while updating the Hall."
            })
        else res.send(data)
    })
}

export const FindAll = (req, res) => {
    Halls.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while fetching the Hall."
            })
        else res.send(data)
    })
}

export const FindOne = (req, res) => {
    Halls.findOne(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while fetching the Hall."
            })
        else res.send(data)
    })
}

export const Delete = (req, res) => {
    Halls.delete(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the Hall."
            })
        else res.send(data)
    })
}