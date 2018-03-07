import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { postLogout } from "../store"
import { connect } from "react-redux"

const Navbar = props => (
  <nav>
    <div>
      <NavLink to="/mybillz" activeClassName="current">
        <button className="navButton">
          <h3>Home</h3>
        </button>
      </NavLink>
      <NavLink to="/transparency" activeClassName="current">
        <button className="navButton">
          <h3>Transparency</h3>
        </button>
      </NavLink>
      <NavLink to="/chat" activeClassName="current">
        <button className="navButton">
          <h3>Chat</h3>
        </button>
      </NavLink>
      <NavLink to="/feedback" activeClassName="current">
        <button className="navButton">
          <h3>Feedback</h3>
        </button>
      </NavLink>
    </div>
    <div>
      <button className="navButton" onClick={props.handleLogout}>
        <h3>Logout</h3>
      </button>
    </div>
  </nav>
)

const mapDispatch = (dispatch, ownProps) => ({
  handleLogout: () => {
    dispatch(postLogout())
  }
})

export default withRouter(connect(null, mapDispatch)(Navbar))
