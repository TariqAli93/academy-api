import { prismaErrorHandling, prismaInstance } from "../middlewares/handleError.middleware.js";

const Halls = function (hall) {
    this.hallName = hall.hallName;
    this.updatedAt = hall.updatedAt
    this.createdBy = hall.createdBy
}


Halls.create = async (newHall, result) => {
    try {
        const hall = await prismaInstance.halls.create({
            data: newHall
        })
        result(null, hall)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

Halls.update = async (newHall, hallId, result) => {
    try {
        const hall = await prismaInstance.halls.update({
            where: {
                hallId: hallId * 1
            },
            data: newHall
        })
        result(null, hall)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

Halls.findAll = async (result) => {
    try {
        const hall = await prismaInstance.halls.findMany()
        result(null, hall)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

Halls.findOne = async (hallId, result) => {
    try {
        const hall = await prismaInstance.halls.findFirst({
            where: {
                hallId: hallId * 1
            }
        })
        result(null, hall)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

Halls.delete = async (hallId, result) => {
    try {
        const hall = await prismaInstance.halls.delete({
            where: {
                hallId: hallId * 1
            }
        })
        result(null, hall)
    } catch (error) {
        console.log(error)
        prismaErrorHandling(error, result)
    }
}

export default Halls