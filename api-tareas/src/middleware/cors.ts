import { NextFunction, Request, Response } from 'express'
const ALLOWED_ORIGIN: Array<string | undefined> = [
  'http://localhost:3000'
]

const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin
  if (ALLOWED_ORIGIN.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Credentials', 'true')
  }
  next()
}

export default corsMiddleware
