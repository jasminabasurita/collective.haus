import React from "react"
import { connect } from "react-redux"
import { postComment } from "../store"
import { emojify } from "react-emojione"
import Thumbnail from "./Thumbnail"

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
      {!!props.comments.length &&
        !!props.users.length &&
        props.comments.map(comment => {
          const user = props.users.find(user => user.id === comment.userId)
          return (
            <div key={comment.id} className="chat-message">
              <Thumbnail photo={user.photo} />
              <div>
                <h5 className="user">{user.username}</h5>
                <p className="text">{emojify(comment.text)}</p>
              </div>
            </div>
          )
        })}
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
