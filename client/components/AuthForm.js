import React from "react"
import { auth, authError } from "../store"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const AuthForm = props => (
  <div id="auth">
    <form onSubmit={props.handleSubmit} name={props.name}>
      {props.name === "signup" && (
        <div>
          <label>Username: </label>
          <br />
          <input name="username" type="text" required />
        </div>
      )}
      <div>
        <label>Email: </label>
        <br />
        <input name="email" type="email" required />
      </div>
      <div>
        <label>Password: </label>
        <br />
        <input name="password" type="password" required />
      </div>
      {props.name === "signup" && (
        <div>
          <label>Re-Enter Password: </label>
          <br />
          <input name="password2" type="password" required />
        </div>
      )}
      <div id="auth-submit">
        <button type="submit">{props.displayName}</button>
        or{" "}
        {props.name === "login" ? (
          <Link to="/signup">Sign Up</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      {props.error && <div id="auth-error">{props.error}</div>}
    </form>
  </div>
)

const mapLogin = state => ({
    name: "login",
    displayName: "Login",
    error: state.user.error
  }),
  mapSignup = state => ({
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error
  })

const mapDispatch = dispatch => ({
  handleSubmit(evt) {
    evt.preventDefault()
    let formInput = {
      method: evt.target.name,
      email: evt.target.email.value,
      password: evt.target.password.value
    }
    if (formInput.method === "signup") {
      formInput.password2 = evt.target.password2.value
      formInput.username = evt.target.username.value
    }

    if (
      formInput.method === "login" ||
      formInput.password === formInput.password2
    ) {
      dispatch(auth(formInput))
    } else {
      dispatch(authError("Passwords Do Not Match"))
    }
  }
})

export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
export const Login = connect(mapLogin, mapDispatch)(AuthForm)
