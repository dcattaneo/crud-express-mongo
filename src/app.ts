import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import videoRoutes from './routes/videos.routes'
import {connectDB} from './database'

const app = express()
connectDB()


app.set('port', config.PORT);


app.use(morgan('dev'));  //info about petitions 

app.use(cors()); // any server could make petitions

app.use(express.json()); // to learn json objects

app.use(express.urlencoded({extended: false})); // to learn petitions from formulary 

app.use(videoRoutes);

export default app;