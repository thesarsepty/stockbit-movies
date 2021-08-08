import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import loadingReducer from './reducers/loadingReducers'
import movieReducer from './reducers/movieReducer'
import errorReducer from './reducers/errorReducer'


const reducers = combineReducers({
    loadingReducer,
    movieReducer,
    errorReducer
    
});

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(reducers, middleware);

export default store;