import { json } from "react-router-dom";
import {
  GET_LIST_TIKET,
  ADD_TIKET,
  DETAIL_TIKET,
} from "../../actions/tiketAction";

const initialState = {
  getListTiketResult: false,
  getListTiketLoading: false,
  getListTiketError: false,

  addTiketResult: false,
  addTiketLoading: false,
  addTiketError: false,

  detailTiketResult: false,
};

const tiket = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TIKET:
      console.log("4.Masuk Reducer", action);
      return {
        ...state,
        getListTiketResult: action.payload.data,
        getListTiketLoading: action.payload.loading,
        getListTiketError: action.payload.errorMessage,
      };

    case ADD_TIKET:
      console.log("4.masuk Reducer", action);
      return {
        ...state,
        addTiketResult: action.payload.data,
        addTiketLoading: action.payload.loading,
        addTiketError: action.payload.errorMessage,
      };

    case DETAIL_TIKET:
      localStorage.setItem("detailKontak", JSON.stringify(action.payload.data));
      return {
        ...state,
        detailTiketResult: action.payload.data,
      };

    default:
      return state;
  }
};

export default tiket;
