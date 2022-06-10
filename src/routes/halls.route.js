import { Create, FindAll, Update, FindOne, Delete } from "../controllers/halls.controller.js"

const hallsRoute = (app) => {
    app.post('/api/halls', Create)
    app.get('/api/halls', FindAll)
    app.put('/api/halls/:id', Update)
    app.get('/api/halls/:id', FindOne)
    app.delete('/api/halls/:id', Delete)
}

export default hallsRoute