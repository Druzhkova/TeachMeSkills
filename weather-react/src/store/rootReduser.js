import { combineReducers } from 'redux'
import { weatherReducer } from '../Weather'



export const rootReduser = combineReducers({ weather: weatherReducer})