import { } from 'dotenv/config'
import express from 'express'
import sequelize from './db.js'
import { } from './models/models.js';
import cors from 'cors'
import router from './routes/index.js'
import fileUpload from 'express-fileupload'
import errorHandler from './middleware/ErrorHandlingMiddleware.js'


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(express.static('static'))

app.use(errorHandler)



const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
