import { useState } from "react"

import Post from "./Post"
import NewPost from "./NewPost"
import classes from "./PostsList.module.css"
import Modal from "./Modal"

function PostsList({ isPosting, onStopPosting }) {
    return (
      <>
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost
              onCancel={onStopPosting}
            />
          </Modal>
        )}
        <ul className={classes.posts}>
          <Post author="test2" body="testtest2" />
        </ul>
      </>
    );
}

export default PostsList