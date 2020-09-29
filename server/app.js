import express from 'express';
import mongoose from 'mongoose';
import './models/user';
import routes from './routes/auth';
import 'dotenv/config';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
});

mongoose.connection.on('error', (error) => {
    console.log(`Something went wrong: ${error}`)
});

app.get('/', (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});