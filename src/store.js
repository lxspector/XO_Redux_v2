import { createStore } from 'redux';
import gameReducer from './Containers/reducer';

const store = createStore(gameReducer);

export default store;
