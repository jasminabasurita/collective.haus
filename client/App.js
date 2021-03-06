import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store, { gotUser } from "./store"
import axios from "axios"
import Root from "./components/Root"

axios
  .get("/auth")
  .then(res => res.data)
  .then(user => {
    store.dispatch(gotUser(user))
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </Provider>,
      document.getElementById("root")
    )
  })
  .catch(err => console.error(err))
