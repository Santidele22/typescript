import { Visibility, Weather } from './types/enums'
import { NewDiaryEntry } from './types/types'
const messagesError = (children: string): string => {
  const msg = `Incorrect or missing ${children}`
  return msg
}
const isString = (string: string | object): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error(messagesError('comment'))
  }
  return commentFromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error(messagesError('date'))
  }
  return dateFromRequest
}
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error(messagesError('weather'))
  }
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error(messagesError('visibility'))
  }
  return visibilityFromRequest
}

const toDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }
  return newEntry
}
export default toDiaryEntry
