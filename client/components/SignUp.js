import React, { Component } from "react"
import { postSignup } from "../redux"
import { connect } from "react-redux"

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <div>
            <label>First Name: </label>
            <input name="firstName" type="text" onChange={this.handleChange} required />
          </div>
          <div>
            <label>Last Name: </label>
            <input name="lastName" type="text" onChange={this.handleChange} required />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" type="email" onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password: </label>
            <input name="password" type="password" onChange={this.handleChange} required />
          </div>
          <div>
            <label>Re-Enter Password: </label>
            <input name="password2" type="password" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit: (event, state) => {
    event.preventDefault()
    if (state.password === event.target.password2.value) {
      dispatch(postSignup(state, ownProps.history))
    } else {
      console.log("passwords do not match")
    }
  }
})

export default connect(null, mapDispatch)(SignUp)
