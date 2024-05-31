const { createSlice } = require("@reduxjs/toolkit");

//로그인 정보나 기타등등 많은 곳에서 사용할 데이터를 스토어에 저장
let user = createSlice({
  name : 'user',
  initialState : {name : 'han' , age : 10},
  reducers : {
    updateAge(state, action){
      state.age += action.payload;  //state 변경 함수를 action이라고 한다.
    }
  }
})

export let { updateAge } = user.actions 
export default user