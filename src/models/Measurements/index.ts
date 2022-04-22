import { Schema, model } from 'mongoose'

interface IMeasurements {
    sensor: string
    measurement: object
}

const schema = new Schema<IMeasurements>({
    sensor: {
        type: String,
    },
    measurement: Object
}, {
    timestamps: true
})

export const Measurements = model<IMeasurements>('Measurements', schema)