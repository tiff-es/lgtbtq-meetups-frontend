import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'

import userReducer from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

//  export default function() {
//     let store = createStore(composeWithDevTools(applyMiddleware(thunk)))
//     let persistor = persistStore(store)
//     return { store, persistor }
// }


export default function configureStore() {
   return createStore(
        rootReducer,composeWithDevTools(applyMiddleware(thunk))
    )
}
// export default configureStore()