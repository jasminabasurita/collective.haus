import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"

export default function Root() {
  const isLoggedIn = !!this.props.currentUser.id
  return (
    <Router>
      <div>
        <Navbar />
        {!isLoggedIn && <Redirect path="/login" component={Login} />}
      </div>
    </Router>
  )
}
