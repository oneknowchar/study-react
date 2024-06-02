# 재랜더링 막는 memo, useMemo
## memo()로 컴포넌트 불필요한 재렌더링 막기  

memo() 써보려면 'react' 라이브러리로부터 import 해오시면 됩니다.

```javascript

import {memo, useState} from 'react'

let Child = memo( function(){
  console.log('재렌더링됨')
  return <div>자식임</div>
})

function Cart(){ 

  let [count, setCount] = useState(0)

  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```  
1. memo를 import 해와서  

2. 원하는 컴포넌트 정의부분을 감싸면 됩니다.  

근데 컴포넌트를 let 컴포넌트명 = function( ){ } 이런 식으로 만들어야 감쌀 수 있습니다.  

그럼 이제 Child로 전송되는 props가 변하거나 그런 경우에만 재렌더링됩니다.  

진짜 그러나 버튼눌러서 테스트해봅시다.   



> *Q. 어 그럼 memo는 좋은거니까 막써도 되겠네요?*

memo로 감싼 컴포넌트는 헛된 재렌더링을 안 시키려고  

기존 props와 바뀐 props를 비교하는 연산이 추가로 진행됩니다.  

props가 크고 복잡하면 이거 자체로도 부담이 될 수도 있습니다.  

그래서 꼭 필요한 곳에만 사용합시다.   
## 비슷하게 생긴 useMemo  
비슷한 useMemo라는 문법도 있는데 이건 그냥 useEffect와 비슷한 용도입니다.  
컴포넌트 로드시 1회만 실행하고 싶은 코드가 있으면 거기 담으면 됩니다.   

```javascript
import {useMemo, useState} from 'react'

function 함수(){
  return 반복문10억번돌린결과
}

function Cart(){ 

  let result = useMemo(()=>{ return 함수() }, [])

  return (
    <Child />
    <button onClick={()=>{ setCount(count+1) }}> + </button>
  )
}
```  
1. 예를 들어서 반복문을 10억번 돌려야하는 경우   
2. 그 함수를 useMemo 안에 넣어두면 컴포넌트 로드시 1회만 실행됩니다.   

그럼 재 렌더링 마다 동작 안 하니까 좀 효율적으로 동작 하겠죠?   
useEffect처럼 dependency도 넣을 수 있어서   
특정 state, props가 변할 때만 실행할 수 도 있습니다.