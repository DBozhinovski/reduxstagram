// a reducer takes in two things:

// 1. the action (info what happened)
// 2. copy of current state

// Every reducer runs every time there is an action - filter according to action type!!

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
