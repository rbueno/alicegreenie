import app from './src/app'
import mongoose from 'mongoose'

app.listen(process.env.PORT || 5000, () => console.log('live'))
mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => console.log('MongoDB is Connected'))
    .catch((error) => console.log(`Error connection MongoDB: ${error}`))