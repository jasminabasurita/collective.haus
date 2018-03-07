import React, { Component } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { fetchComments, fetchUsers } from "../store"
import { Navbar, UserBillz, Chat } from "../components"

class LoggedInRoot extends Component {
  componentDidMount() {
    this.props.initialSetup()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserBillz} />
          <Route exact path="/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => ({
  initialSetup: () => {
    dispatch(fetchComments())
    dispatch(fetchUsers())
  }
})

export default connect(mapState, mapDispatch)(LoggedInRoot)
