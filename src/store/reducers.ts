import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './App/App.reducer';

const createRootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        AppState: appReducer,
    });

export default createRootReducer;
