import logger from './logger'

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`)
  res.status(404)
  next(error)
}

// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  logger.error({
    message: error.message,
    stack: error.stack,
  })
  res.status(statusCode)
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '💩' : error.stack,
  })
}
