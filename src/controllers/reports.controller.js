import Reports from "../models/reports.model.js";

export const CreateReport = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "Content can not be empty!"
        })
    }

    const newReport = new Reports(req.query)
    Reports.create(newReport, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(data);
        }
    });
}