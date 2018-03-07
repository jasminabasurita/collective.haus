import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
/**
 * import & combine sub-reducers
 */
import user from "./auth"
import comments from "./comments"
import users from "./users"

const rootReducer = combineReducers({ user, comments, users })

/**
 *  Use devtools and logging middleware for dev
 */
const isProduction = process.env.NODE_ENV === "production"
const middleware = isProduction
  ? applyMiddleware(thunkMiddleware)
  : composeWithDevTools(
      applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
    )

export default createStore(rootReducer, middleware)

export * from "./auth"
export * from "./bills"
export * from "./users"
export * from "./comments"
