import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  data: null,
  post: null,
  loader: false
};

function dataFetchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_DATA: {
      return Object.assign({}, state, {
        loader: true
      });
    }
    case actionTypes.FETCH_DATA: {
      return Object.assign({}, state, {
        loader: false,
        data: action.payload
      });
    }
    case actionTypes.GET_POST: {
      return Object.assign({}, state, {
        loader: true
      });
    }
    case actionTypes.FETCH_POST: {
      return Object.assign({}, state, {
        loader: false,
        post: action.payload
      });
    }
    default:
      return state;
  }
}

export default dataFetchReducer;
