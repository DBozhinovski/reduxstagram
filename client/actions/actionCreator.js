// increment 
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

export default {
  increment,
  addComment,
  removeComment
}