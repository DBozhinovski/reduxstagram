// a reducer takes in two things:

// 1. the action (info what happened)
// 2. copy of current state

// Every reducer runs every time there is an action - filter according to action type!!

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index; 

      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default posts;
