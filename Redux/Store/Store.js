import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from "../Reducer/CombineReducer";
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
}



const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer ,  applyMiddleware(logger))

export const persistor = persistStore(store)