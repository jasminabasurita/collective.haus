import React from "react"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import LoggedInRoot from "./LoggedInRoot"
import { fetchCurrentUser } from "../redux"

function Root(props) {
  const isLoggedIn = !!props.currentUser.id
  return isLoggedIn ? (
    <LoggedInRoot />
  ) : (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route path="/" component={Login} />
    </Switch>
  )
}

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = (dispatch, ownProps) => ({
  getCurrentUser: () => dispatch(fetchCurrentUser())
})

export default connect(mapState, mapDispatch)(Root)
