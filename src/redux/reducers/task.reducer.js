import * as types from "../constants/task.constant";

const initialState = {
  listTasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK: {
      return { ...state, listTasks: [] };
    }
    // fetch success
    case types.FETCH_TASK_SUCCESS: {
      return { ...state, listTasks: action.payload.data };
    }
    // fetch faield
    case types.FETCH_TASK_FAILED: {
      return { ...state, listTasks: action.payload.err };
    }

    default:
      return state;
  }
};

export default taskReducer;
