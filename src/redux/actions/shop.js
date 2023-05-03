import { _fetchApi, _postApi } from "./api";
import {
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  ORDER_ERROR,
  ORDER_RESP,
  DELETE_CARTS,
  STOCK_LIST,
} from "./types";

export function addCart(payload = {}) {
  return (dispatch) => {
    dispatch({ type: ADD_CART, payload });
  };
}
export function updateCart(payload = {}) {
  return (dispatch) => {
    console.log(payload);
    dispatch({ type: UPDATE_CART, payload });
  };
}

export function deleteCart(payload = {}) {
  return (dispatch) => {
    dispatch({ type: DELETE_CART, payload });
  };
}

export function deleteCarts() {
  return (dispatch) => {
    dispatch({ type: DELETE_CARTS });
  };
}

export const newOrder = (data = {}) => {
  return (dispatch) => {
    _postApi(
      "/orders/new-order",
      data,
      (resp) => {
        dispatch({ type: ORDER_RESP, payload: resp.data });
      },
      (error) => {
        dispatch({ type: ORDER_ERROR, payload: error });
      }
    );
  };
};

export const getStockList = (cb = (f) => f) => {
  return (dispatch) => {
    _fetchApi(
      "/account/get/inventory2/d8d7a732-1832-4e25-9a98-e68ddc3f0b26?query_type=web",
      (resp) => {
        if (resp.results.length) {
          cb(false);
          dispatch({ type: STOCK_LIST, payload: resp.results });
        }
      },
      (error) => {
        dispatch({ type: ORDER_ERROR, payload: error });
      }
    );
  };
};
