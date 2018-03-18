import React from "react"
import { connect } from "react-redux"
import { postComment } from "../store"
import { emojify } from "react-emojione"

function Comments(props) {
  return (
    <div id="chat">
      <form
        className="chat-input"
        onSubmit={event => props.handlePost(event, props.user)}
      >
        <textarea name="text" placeholder="Whatchu gotta say..." />
        <button type="submit">Post</button>
      </form>
      {props.comments.map(comment => (
        <div key={comment.id} className="chat-message">
          <h5 className="user">
            {!!props.users.length &&
              props.users.find(user => user.id === comment.userId).name}
          </h5>
          <p className="text">{emojify(comment.text)}</p>
        </div>
      ))}
    </div>
  )
}

const mapState = ({ comments, user, users }) => ({
  comments,
  user,
  users
})
const mapDispatch = (dispatch, ownProps) => ({
  handlePost: (event, user) => {
    event.preventDefault()
    if (event.target.text.value !== "") {
      const comment = {
        text: event.target.text.value,
        userId: user.id
      }
      event.target.text.value = ""
      dispatch(postComment(comment))
    }
  }
})
export default connect(mapState, mapDispatch)(Comments)
