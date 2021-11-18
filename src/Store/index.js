import { createStore } from 'redux';
import reducer from '../Reducers/LoginReducer';

const store = createStore(reducer);
export default store;
