export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (posts) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: posts,
});

export const fetchDataFail = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});
