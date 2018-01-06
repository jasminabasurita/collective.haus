import React from "react"
import { connect } from "react-redux"
import { postLogin } from "../redux"
import { Link } from "react-router-dom"

//still needs auth submit from redux store

function Login(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>Email: </label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/signup">sign up</Link>
    </div>
  )
}

const mapState = ({}) => ({})
const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit: event => {
    event.preventDefault()
    const user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    dispatch(postLogin(user))
  }
})

export default connect(null, mapDispatch)(Login)
