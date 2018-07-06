import actionTypes from "./actionTypes";
import Webservice from "../../utils/axiosLayer";

export const getData = data => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_DATA });
    Webservice.getData()
      .then(resp => {
        const data = resp.data;
        dispatch({ type: actionTypes.FETCH_DATA, payload: data });
      })
      .catch(err => {
        console.log("Err", err);
      });
  };
};

export const getOnePost = data => {
    return dispatch => {
      dispatch({ type: actionTypes.GET_POST });
      Webservice.getOnePost(data.id)
        .then(resp => {
          const data = resp.data;
          dispatch({ type: actionTypes.FETCH_POST, payload: data });
        })
        .catch(err => {
          console.log("Err", err);
        });
    };
  };