import axios from "axios";

export const GET_LIST_TIKET = "GET_LIST_TIKET";
export const ADD_TIKET = "ADD_TIKET";
export const DETAIL_TIKET = "DETAIL_TIKET";

export const getListTiket = () => {
  console.log("2.masuk action");
  return (dispatch) => {
    dispatch({
      type: GET_LIST_TIKET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "GET",
      url: "http://localhost:3000/tiket",
      timeout: 120000,
    })
      .then((response) => {
        // get api
        console.log("3.berhasil dapat data :", response);
        dispatch({
          type: GET_LIST_TIKET,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        console.log("3.gagal dapat data : ", error);
        dispatch({
          type: GET_LIST_TIKET,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addTiket = (data) => {
  console.log("2.masuk action");
  return (dispatch) => {
    dispatch({
      type: ADD_TIKET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get Api
    axios({
      method: "POST",
      url: "http://localhost:3000/tiket",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // get api
        console.log("3.berhasil dapat data :", response);
        dispatch({
          type: ADD_TIKET,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        console.log("3.gagal dapat data : ", error);
        dispatch({
          type: ADD_TIKET,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailTiket = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_TIKET,
      payload: {
        data: data,
      },
    });
  };
};
