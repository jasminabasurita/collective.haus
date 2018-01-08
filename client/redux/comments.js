import axios from "axios"

//ACTION TYPES
const GOT_COMMENTS = "GET_COMMENTS"
const POSTED_COMMENT = "POSTED_COMMENT"

//ACTION CREATORS
const gotComments = comments => ({ type: GOT_COMMENTS, comments })
const postedComment = comment => ({ type: POSTED_COMMENT, comment })

//THUNK CREATORS
export const fetchComments = () => dispatch => {
  axios
    .get("/api/comments")
    .then(res => res.data)
    .then(comments => dispatch(gotComments(comments)))
    .catch(err => console.error(err))
}

export const postComment = comment => dispatch => {
  axios
    .post("/api/comments", comment)
    .then(res => res.data)
    .then(returnedComment => dispatch(postedComment(returnedComment)))
    .catch(err => console.error(err))
}

//REDUCER
export default function reducer(comments = [], action) {
  switch (action.type) {
    case GOT_COMMENTS:
      return action.comments
    case POSTED_COMMENT:
      return [action.comment].concat(comments)
    default:
      return comments
  }
}
