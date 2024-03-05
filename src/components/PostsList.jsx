import { useState } from "react"

import Post from "./Post"
import NewPost from "./NewPost"
import classes from "./PostsList.module.css"
import Modal from "./Modal"

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enteredBody, setEnteredBody] = useState("")
    const [enteredAuthor, setEnteredAuthor] = useState("")

    function hideModalHandler() {
      setModalIsVisible(false)
    }

    function bodyChangeHandler(event) {
      setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
      setEnteredAuthor(event.target.value);
    }

    return (
      <>
        {modalIsVisible && (<Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>)}
        <ul className={classes.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
          <Post author="test2" body="testtest2" />
        </ul>
      </>
    );
}

export default PostsList