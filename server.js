import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import routes
import userRoute from './src/routes/users.route.js'
import gradeRoute from './src/routes/grades.route.js'
import subjectRoute from './src/routes/subjects.route.js'
import studentRoute from './src/routes/students.route.js'
import teacherRoute from './src/routes/teachers.route.js'
import invoiceRoute from './src/routes/invoices.route.js'
import settingRoutes from './src/routes/settings.route.js'
import reportRoute from './src/routes/reports.route.js'
import coursesRoute from './src/routes/courses.route.js'
import subjectCourseRoute from './src/routes/subjectCourse.route.js'
import hallsRoute from './src/routes/halls.route.js'

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
invoiceRoute(app)
settingRoutes(app)
reportRoute(app)
coursesRoute(app)
subjectCourseRoute(app)
hallsRoute(app)

// start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`)
})
