// Error management

const sendErrorDev = (err, req, res) => {
    // API
    if(req.originalUrl.startsWith('/api')) {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
          });
    } else {
        // RENDERED WEBSITE
        res.status(err.statusCode).json({
            title: 'Something went wrong!',
            msg: err.message
        })
    }
    
}

const sendErrorProd = (err, req, res) => {
    // API
    if(req.originalUrl.startsWith('/api')) {
        // Operational, trusted error: send message to client
        
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            })

        
    } else {
        // RENDERED WEBSITE
            // console.log(err)
            res.status(err.statusCode).json('error', {
                title: 'Something went wrong!',
                msg: err.message
            })
    }
    
    
}

module.exports = (err, req, res, next) => {
    /* console.log(err.stack) */
  
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res)
    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err};
        error.message = err.message

        sendErrorProd(error, req, res)
    }
  }