import React from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { Login, Signup } from "../components"
import LoggedInRoot from "./LoggedInRoot"

function Root(props) {
  const isLoggedIn = !!props.user.id
  return isLoggedIn ? (
    <Route path="/" component={LoggedInRoot} />
  ) : (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  )
}

const mapState = ({ user }) => ({ user })
const mapDispatch = (dispatch, ownProps) => ({})

export default connect(mapState, mapDispatch)(Root)
