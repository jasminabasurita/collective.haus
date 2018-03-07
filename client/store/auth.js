import axios from "axios"
import history from "../history"

//ACTION TYPES
const GOT_USER = "GOT_USER"
const AUTH_ERROR = "AUTH_ERROR"

//ACTION CREATORS
export const gotUser = user => ({ type: GOT_USER, user })
export const authError = error => ({ type: AUTH_ERROR, error })

//THUNK CREATORS
export const auth = formInput => dispatch => {
  axios
    .post(`/auth/${formInput.method}`, formInput)
    .then(res => res.data)
    .then(user => {
      dispatch(gotUser(user))
      history.push("/")
    })
    .catch(err => dispatch(authError(err.response.data)))
}

export const fetchUser = () => dispatch =>
  axios
    .get("/auth")
    .then(res => dispatch(gotUser(res.data)))
    .catch(err => console.error(err))

export const postLogout = () => dispatch => {
  axios
    .delete("/auth/logout")
    .then(() => dispatch(gotUser({})))
    .catch(err => console.error(err))
}

//REDUCER
export default function reducer(currentUser = {}, action) {
  switch (action.type) {
    case GOT_USER:
      return action.user
    case AUTH_ERROR:
      return { error: action.error }
    default:
      return currentUser
  }
}
