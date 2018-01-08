import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { fetchCurrentUser } from "./redux"
import Root from "./components/Root"

store.dispatch(fetchCurrentUser())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Root} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
