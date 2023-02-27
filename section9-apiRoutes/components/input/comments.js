import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentsState, setCommentsState] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    await fetch(`/api/comment/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
    });
    
      const rawComments = await fetch(`/api/comment/${eventId}`);
      const comments = await rawComments.json();
      console.log("==> COMMENTS ", comments);
      // if()
      if(Array.isArray(comments)){
        setCommentsState(comments);
      }
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={commentsState} />}
    </section>
  );
}

export default Comments;
