import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import routes from './routes'

dotenv.config()

const App = express()

// Template engine
App.set('view engine', 'mustache')
App.set('views', path.join(__dirname, 'views'))
App.engine('mustache', mustache())

App.use(express.static(path.join(__dirname, '../public')))

// Routes
App.use(routes)

// 404
App.use((req, res) => {
  res.render('pages/404')
})

App.listen(process.env.PORT, () => console.log('Server is running'))