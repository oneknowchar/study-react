import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
  ],
  reducers : {
    addCount(state, action){
      const findId = state.find( x => x.id == action.payload);
      findId.count = findId.count + 1;
    },
    minusCount(state, action){
      let idxs = -1;
      const findId = state.find((x, i)=> { idxs = i; return x.id == action.payload; });
      findId.count = findId.count - 1;

      if(idxs >= 0 && state[idxs].count === 0){
        state.splice(idxs, 1);
      }
    },
    addCart(state, action){
      let findId = state.find(x => x.id == action.payload.id);

      if(findId){
        findId.count = findId.count + 1;
      }else{
        let item = {
          id : action.payload.id,
          name : action.payload.title,
          count : 1,
        }
        
        state.unshift(item);

      }
    }
  }
})
export let {addCount, minusCount, addCart} = cart.actions;
export default cart;