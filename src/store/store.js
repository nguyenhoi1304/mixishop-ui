import RootReducer from '~/store/reducers/RootReducer'
import { legacy_createStore as createStore } from 'redux';

const store = createStore(RootReducer);


export default store