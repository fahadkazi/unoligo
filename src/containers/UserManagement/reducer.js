import { GET_USERS } from './types'

export default function (state = {}, action) {
    console.log('action', action)
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          getUsersData: action.payload
        }
      default:
        return state
    }
  }