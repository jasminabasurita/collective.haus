import React from "react"
import { connect } from "react-redux"
import { postComment } from "../redux"

function Comments(props) {
  return (
    <div id="body">
      <form className="comment-input" onSubmit={event => props.handlePost(event, props.currentUser)}>
        <textarea name="text" />
        <button type="submit">Post</button>
      </form>
      {props.comments.map(comment => (
        <div key={comment.id} className="comment">
          <h5 className="user">{props.users.find(user => user.id === comment.userId).name}</h5>
          <p className="text">{comment.text}</p>
        </div>
      ))}
    </div>
  )
}

const mapState = ({ comments, currentUser, users }) => ({ comments, currentUser, users })
const mapDispatch = (dispatch, ownProps) => ({
  handlePost: (event, currentUser) => {
    event.preventDefault()
    const comment = {
      text: event.target.text.value,
      userId: currentUser.id
    }
    dispatch(postComment(comment))
  }
})
export default connect(mapState, mapDispatch)(Comments)
