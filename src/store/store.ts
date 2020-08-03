import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createRootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

export default function configureStore(preloadedState?: any) {
    const store = createStore(
        persistedReducer,
        preloadedState,
        compose(applyMiddleware(routerMiddleware(history), logger)),
    );
    const persistor = persistStore(store);

    return { store, persistor };
}
