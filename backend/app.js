const express = require('express') 
const path = require('path')
const morgan = require('morgan') 
const rateLimit = require('express-rate-limit') 
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')

const AppError = require('./utils/appError');
const getUserIp = require('./middleware/getUserIp')
const globalErrorHandler = require('./controllers/errorController') 
const searchRoute = require('./routes/searchRoutes')

dotenv.config() //To get Private sensitive data

const app = express()

app.use(cors())
// Access-Control-Allow-Origin = *
app.options('*', cors())

// Set security HTTP headers
//app.use(helmet())
/* app.use(helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": "*",
      "script-src": ["'self'", "ip-api.com"],
    },
})) */

if (process.env.NODE_ENV === 'development') {
    // To make console logs when there is a request to the server
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




app.use('/api/v1/search', searchRoute)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
    app.get('/api/v1', (req, res) => {
        res.send('API is running...')
    })
}

//To catch the error of a wrong url
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//Global Error handler
app.use(globalErrorHandler);


module.exports = app