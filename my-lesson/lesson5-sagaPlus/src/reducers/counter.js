const counter = (state = 2, action = {}) => {
  switch(action.type) {
    case 'add': {
      return state + 1
    }
    case 'reduce': {
      return state - 1
    }
    default:
      return state
  }
}

export default counter