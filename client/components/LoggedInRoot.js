import React, { Component } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { fetchComments, fetchUsers } from "../redux"
import Navbar from "./Navbar"
import UserBillz from "./UserBillz"
import Comments from "./Comments"

class LoggedInRoot extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.initialSetup()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserBillz} />
          <Route exact path="/comment" component={Comments} />
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
