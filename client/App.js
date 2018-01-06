import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Root from "./components/Root"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Root} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
