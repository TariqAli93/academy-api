import subjectCourse from '../models/subjectCourse.model.js';

export const Create = (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const newSubjectCourse = new subjectCourse(req.body);
    subjectCourse.create(newSubjectCourse, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(data);
    });
}

export const Update = (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const newSubjectCourse = new subjectCourse(req.body);
    const { id } = req.params;

    subjectCourse.update(newSubjectCourse, id, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(data);
    });
}

export const FindAll = (req, res) => {
    subjectCourse.findAll((err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(data);
    });
}

export const FindOne = (req, res) => {
    subjectCourse.findOne(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(data);
    });
}

export const Delete = (req, res) => {
    subjectCourse.delete(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(data);
    });
}