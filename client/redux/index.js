import { combineReducers } from "redux"
import currentUser from "./auth"
import comments from "./comments"
import users from "./users"

export default combineReducers({ currentUser, comments, users })

export * from "./auth"
export * from "./bills"
export * from "./users"
export * from "./comments"
