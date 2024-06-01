import { configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import cart from './store/cartSlice.js'
import itemView from './store/itemViewSlice.js'

//위의 createSlice에서 등록했으면 여기서 등록 해야함
export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer,
    itemView : itemView.reducer,
  }
})