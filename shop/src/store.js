import { configureStore, createSlice } from '@reduxjs/toolkit'

//useSate() 역할과 동등
//state 하나를 slice라고 부름
//로그인 정보나 기타등등 많은 곳에서 사용할 데이터를 스토어에 저장
let user = createSlice({
  name : 'user',
  initialState : {name : 'han' , age : 31},
  reducers : {
    changeName(state){
      state.name ='parkkk'
    },
    updateAge(state, a){
      state.age += a.payload;
    }
  }
})

export let { changeName, updateAge } = user.actions 

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
  ],
  reducers : {

  }

})

//위의 createSlice에서 등록했으면 여기서 등록 해야함
export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
  }
}) 