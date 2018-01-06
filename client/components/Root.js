import React from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import UserBillz from "./UserBillz"
import SignUp from "./SignUp"

function Root(props) {
  const isLoggedIn = !!props.currentUser.id
  return isLoggedIn ? (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={UserBillz} />
        <Redirect to="/" />
      </Switch>
    </div>
  ) : (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route path="/" component={Login} />
    </Switch>
  )
}

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = (dispatch, ownProps) => ({})

export default connect(mapState, mapDispatch)(Root)
