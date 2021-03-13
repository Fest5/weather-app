const express = require('express') 
const morgan = require('morgan') 
const rateLimit = require('express-rate-limit') 
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')

const AppError = require('./utils/appError');
const getUserIp = require('./middleware/getUserIp')
const globalErrorHandler = require('./controllers/errorController') 
const searchRoute = require('./routes/searchRoutes')

dotenv.config()

const app = express()

app.enable('trust proxy')

app.use(cors())
// Access-Control-Allow-Origin = *
app.options('*', cors())

// Set security HTTP headers
app.use(helmet())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/', getUserIp)

app.use('/api/v1/ip', (req, res) => res.send(req.ip))

app.use('/api', limiter);


app.get('/api/v1', (req, res) => {
    res.send('API is running...')
})

app.use('/api/v1/search', searchRoute)


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app