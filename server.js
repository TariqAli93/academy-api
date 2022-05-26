import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import routes
import userRoute from './src/routes/users.route.js'
import gradeRoute from './src/routes/grades.route.js'
import subjectRoute from './src/routes/subjects.route.js'
import studentRoute from './src/routes/students.route.js'
import teacherRoute from './src/routes/teachers.route.js'
import roleRoute from './src/routes/roles.route.js'
import invoiceRoute from './src/routes/invoices.route.js'
import settingRoutes from './src/routes/settings.route.js'

// initialize the app
const app = express()

// use middlewares
app.use(express.json())
app.use(cors({ credentials: true, origin: true }))
dotenv.config()

// use routes
userRoute(app)
gradeRoute(app)
subjectRoute(app)
studentRoute(app)
teacherRoute(app)
roleRoute(app)
invoiceRoute(app)
settingRoutes(app)

// start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`)
})
