import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UseReducer } from './reducer';
import { userReducerPost } from './reducerPost';


const rootReducer = combineReducers({
  user: UseReducer,
  userPost:userReducerPost

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;