import { createStore } from 'redux'
import RootReducer from '~/store/reducers/RootReducer'

const store = createStore(RootReducer);


export default store