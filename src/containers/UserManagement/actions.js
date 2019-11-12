import axios from 'axios'
import * as types from './types'

const url = process.env.REACT_APP_API_URL

export const getUsers = () => async dispatch => {
  const res = await axios.get(`${url}/users`)
  dispatch({ type: types.GET_USERS, payload: res.data })
}