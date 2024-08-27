// Write your code here
import {formatDistanceToNow} from 'date-fns'
const CommentItem = props => {
  const {each, initialContainerBackgroundClassNames, changeLike, changeDelete} =
    props
  const {id, username, comment, isLike} = each
  const time = formatDistanceToNow(new Date())
  const onChangeDelete = () => {
    changeDelete(id)
  }
  const onChangeLike = () => {
    changeLike(id)
  }
  const image = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li>
      <span>{username[0]}</span>
      <p>
        {username} {time}
      </p>
      <p>{comment}</p>
      <button onClick={onChangeLike}>
        <img src={image} alt="like" /> Like
      </button>
      <button data-testid="delete" onClick={onChangeDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default CommentItem
