import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import { Measurements } from './models'

const app = express()

app.use(express.json({}))
app.use(cors())

// provi app test
app.post('/v1/measurement', async (request: Request, response: Response) => {
    const { currentMeasurement, minMeasurement, maxMeasurement } = request.body
    const newMeasurement = {
        sensor: 'soil_moisture',
        measurement: {
            current: currentMeasurement,
            min: minMeasurement,
            max: maxMeasurement
        }
    }
    try {
        await Measurements.create(newMeasurement)
        response.status(200).send()
    } catch (error) {
        console.log(error)
        response.status(500)
    }
})



export default app
