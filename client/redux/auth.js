import axios from "axios"

//ACTION TYPES
const SET_CURRENT_USER = "SET_CURRENT_USER"

//ACTION CREATORS
const setCurrentUser = user => ({ type: SET_CURRENT_USER, user })

//THUNK CREATORS
export function postLogin(userLogin) {
  return function thunk(dispatch) {
    axios
      .post("/auth/login", userLogin)
      .then(res => res.data)
      .then(user => {
        dispatch(setCurrentUser(user))
      })
      .catch(err => console.error(err))
  }
}

export const postSignup = (newUser, history) => dispatch => {
  axios
    .post("/auth/signup", newUser)
    .then(res => res.data)
    .then(user => {
      dispatch(setCurrentUser(user))
      history.push("/")
    })
    .catch(err => console.error(err))
}

export const postLogout = () => dispatch => {
  axios
    .delete("/auth/logout")
    .then(() => dispatch(setCurrentUser({})))
    .catch(err => console.error(err))
}

//REDUCER
export default function reducer(currentUser = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    default:
      return currentUser
  }
}
