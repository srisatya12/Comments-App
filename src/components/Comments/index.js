import {Component} from 'react'
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
import './index.css'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    username: '',
    comment: '',
    count: 0,
  }

  changeLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }
  changeDelete = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(each => each.id !== id)
    this.setState((prevState)=>({
      commentList:filteredList,
      count:prevState.count-1
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const newComment = {
      id: uuidv4(),
      username,
      comment,
      isLike: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      username: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangename = event => {
    this.setState({username: event.target.value})
  }
  onChangecomment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {username, comment, count, commentList} = this.state
    return (
      <div class="container">
        <div>
          <h1>Comments</h1>
          <p>Say Something about 4.0 Technologies</p>
          <form onSubmit={this.onAddComment}>
            <input
              placeholder="Your Name"
              value={username}
              onChange={this.onChangename}
              type="text"
            />
            <br />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={this.onChangecomment}
            ></textarea>
            <br />
            <button type="submit">Add Comment</button>
          </form>
          <hr />
          <p>{count} comments</p>
          <ul>
            {commentList.map(each => (
              <CommentItem
                changeDelete={this.changeDelete}
                changeLike={this.changeLike}
                key={each.id}
                each={each}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
      </div>
    )
  }
}
export default Comments
