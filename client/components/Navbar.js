import React from "react"
import { NavLink } from "react-router-dom"
import { postLogout } from "../redux"
import { connect } from "react-redux"

function Navbar(props) {
  return (
    <nav id="navbar">
      <div id="tabs">
        <NavLink to="/mybillz" className="navButton">
          Home
        </NavLink>
        <NavLink to="/transparency" className="navButton">
          Transparency
        </NavLink>
        <NavLink to="/comment" className="navButton">
          Comment
        </NavLink>
        <NavLink to="/feedback" className="navButton">
          Feedback
        </NavLink>
      </div>
      <div>
        <button className="navButton" onClick={props.handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

const mapDispatch = (dispatch, ownProps) => ({
  handleLogout: () => {
    dispatch(postLogout())
  }
})

export default connect(null, mapDispatch)(Navbar)
