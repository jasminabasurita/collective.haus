import React, { Component } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import UserBillz from "./UserBillz"
import SignUp from "./SignUp"
import comment from "./Comments"
import store from "../store"
import { fetchCurrentUser, fetchComments, fetchUsers } from "../redux"

class Root extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    store.dispatch(fetchCurrentUser())
    store.dispatch(fetchComments())
    store.dispatch(fetchUsers())
  }
  render() {
    const isLoggedIn = !!this.props.currentUser.id
    return isLoggedIn ? (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserBillz} />
          <Route exact path="/comment" component={comment} />
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
}

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = (dispatch, ownProps) => ({})

export default connect(mapState, mapDispatch)(Root)
