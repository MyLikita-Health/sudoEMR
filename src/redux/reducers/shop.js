import {
  CARTS_LIST,
  CART_ITEM,
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  ORDER_ERROR,
  DELETE_CARTS,
  STOCK_LIST,
} from "../actions/types";

const initialState = {
  stocks: [],
  carts: [],
  orders: [],
  cart: {},
  error: {},
};

function changeQty(arr, { item_code, qty }) {
  for (var i in arr) {
    if (arr[i].item_code === item_code) {
      arr[i].qty = qty;
      break; //Stop this loop, we found it!
    }
  }
  console.error({ arr });
  return arr;
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARTS_LIST:
      return {
        ...state,
        carts: action.payload,
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
        cart: action.payload,
      };
    case CART_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        carts: [...changeQty(state.carts, action.payload)],
        cart: changeQty(state.carts, action.payload).filter(
          (ct) => ct.item_code === action.payload.item_code
        )[0],
      };
    case DELETE_CART:
      return {
        ...state,
        carts: [
          ...state.carts.filter(
            (ct) => ct.item_code !== action.payload.item_code
          ),
        ],
      };
    case DELETE_CARTS:
      return {
        ...state,
        carts: [],
        cart: {},
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case STOCK_LIST:
      return {
        ...state,
        stocks: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
