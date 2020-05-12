import AxiosService from "../../commons/axiosService";
import { API_URL } from "../constants/task.constant";
import * as types from "../constants/task.constant";

const end_point = "Todos";
/*
  GET list tasks
*/
// dispatch get data
export const requestFetchAllTasks = () => async (dispatch) => {
  // reset state
  dispatch(fetchListTasks());

  const response = await AxiosService.get(`${API_URL}/${end_point}`)
    .then((data) => dispatch(fetchListTasksSuccess(data)))
    .catch((err) => dispatch(fetchListTasksFailed(err)));

  return response;
};

export const fetchListTasks = () => {
  return {
    type: types.FETCH_TASK,
  };
};

export const fetchListTasksSuccess = (data) => {
  return {
    type: types.FETCH_TASK_SUCCESS,
    payload: data,
  };
};

export const fetchListTasksFailed = (err) => {
  return {
    type: types.FETCH_TASK_SUCCESS,
    payload: err,
  };
};
