import React, { useState, useReducer } from "react";

//reducer - state를 업데이트 하는 역할 (은행)
//dispatch - syate 업데이트를 위한 요구
//action - 요구의 내용
const reducer = (state, action) => {
  console.log('리듀서가 일을 합니다',state, action);
  //if나 switch문을 씀
  switch (action.type) { 
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    default:
      return state;
  }
};
//reducer함수는 두가지 인자를 받음(state:money state안에 있는 값, action:요구내용 )

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  //Reducer에는 두가지 인자를 받음 (reducer,money state에 들어갈 초기값)
 
  return(
      <div>
        <h2>useReducer 은행에 오신것을 환영합니다.</h2>
        <p>잔고: {money}원</p>
        <input
        type="number"
        value={number}
        onChange={(e)=>setNumber(parseInt(e.target.value))}
        step="1000"
        />
        <button onClick={() => {dispatch({type:'deposit', payload: number})}}>예금</button>
        <button onClick={() => {dispatch({type:'withdraw', payload: number})}}>출금</button>
      </div>
    )
}


export default App;
