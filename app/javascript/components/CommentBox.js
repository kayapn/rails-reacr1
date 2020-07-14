import React from "react"
import PropTypes from "prop-types"
class CommentBox extends React.Component {
  render () {
    return (
	<div className="commentBox">
	    <h1>Comments</h1>
	    <CommentList />
	    <CommentForm />
	</div>
    );
  }
}
class CommentList extends React.Component {
  render () {
    return (
	<div className="commentList">
	    <Comment author="Pate Hunt"> This is one comment</Comment>
	    <Comment author="Jordan Walker"> This is one *anoher*</Comment>
	</div>
    );
  }
}
class CommentForm extends React.Component {
  render () {
    return (
	<div className="commentForm">
	    Hello,world! I am a CommentForm.
	</div>
    );
  }
}
class Comment extends React.Component {
  render () {
    return (
	<div className="comment">
		<h2 className="commentAuthor">
	    		{this.props.author}
	    	</h2>
	    	{this.props.children}
	</div>
    );
  }
}



export default CommentBox
