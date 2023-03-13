import { useState, useContext, useEffect } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { hideNotification, showNotification } =
    useContext(NotificationContext);

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentsState, setCommentsState] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(()=>{
    console.log('comments state : ', commentsState)
  })

  async function addCommentHandler(commentData) {
    try {
      showNotification({
        title: "Pending",
        message: "waiting for the response ...",
        status: "pending",
      });
      setCommentsState([
        {_id:'aaaaaaaaaaaaaaaaa', email:commentData.email, name:commentData.name, text:'Loading ...'},
        commentsState
      ])
      
      const res = await fetch(`/api/comment/${eventId}`, {
        method: "POST",
        body: JSON.stringify(commentData),
      });
      console.log('res : ', res)
      if(!res.ok){
        throw new Error(res)
      }

      const rawComments = await fetch(`/api/comment/${eventId}`);
      const comments = await rawComments.json();
      

      showNotification({
        title: "Success",
        message: "job done ",
        status: "success",
      });

      if (Array.isArray(comments)) {
        setCommentsState(comments);
      }
      setCommentsState(commentsState.slice(1))
    } catch (error) {
      console.log('error : ',error)
      showNotification({
        title: "Error",
        message: "job done ",
        status: "error",
      });
      setCommentsState(commentsState.slice(1))
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
