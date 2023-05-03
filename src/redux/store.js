import { createStore, applyMiddleware } from "redux";
// import PouchDB from 'pouchdb-browser';
// import { persistStore } from 'redux-pouchdb';
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

const createStoreWithMiddleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(thunk, logger)(createStore)
    : applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
// persistStore(store);

export default store;
