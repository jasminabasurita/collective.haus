import axios from "axios"

//ACTION TYPES
const GOT_USERS = "GOT_USERS"

//ACTION CREATORS
export const gotUsers = users => ({ type: GOT_USERS, users })

//THUNK CREATORS
export const fetchUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res => res.data)
    .then(users => dispatch(gotUsers(users)))
    .catch(err => console.error(err))
}

//REDUCER
export default function reducer(users = [], action) {
  switch (action.type) {
    case GOT_USERS:
      return action.users
    default:
      return users
  }
}
