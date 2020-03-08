import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

export default function configureStore() {
   return createStore(
        rootReducer,composeWithDevTools(applyMiddleware(thunk))
    )
}