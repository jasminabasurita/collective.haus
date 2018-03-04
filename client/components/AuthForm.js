import React from "react"
import { auth } from "../redux"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const AuthForm = props => (
  <div id="auth-hero">
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>First Name: </label>
        <input name="firstName" type="text" required />
      </div>
      <div>
        <label>Last Name: </label>
        <input name="lastName" type="text" required />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" type="email" required />
      </div>
      <div>
        <label>Password: </label>
        <input name="password" type="password" required />
      </div>
      <div>
        <label>Re-Enter Password: </label>
        <input name="password2" type="password" required />
      </div>
      <div id="auth-submit">
        <button type="submit">props.displayName</button>
        <Link to={`/${props.name}`}>
          or {props.name === "Login" ? "Sign Up" : "Login"}
        </Link>
      </div>
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
    const formName = evt.target.name,
      email = evt.target.email.value,
      password = evt.target.password.value,
      password2 = evt.target.password2.value,
      firstName = evt.target.firstName.value,
      lastName = evt.target.lastName.value

    if (formName === "login" || password === password2) {
      dispatch(auth(email, password, firstName, lastName, formName))
    }
  }
})

export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
export const Login = connect(mapLogin, mapDispatch)(AuthForm)
