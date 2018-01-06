import { combineReducers } from "redux"
import currentUser from "./auth"

export default combineReducers({ currentUser })

export * from "./auth"
export * from "./bills"
export * from "./users"
