import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import {useNavigate} from "react-router-dom";
// import { AppProvider } from "./AppContext";
// import { data } from "./reducer/counterReducer";
function Counter() {
  
  // const counterReducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //     case "RESET":
  //       return 0;
  //     default:
  //       return state;
  //   }
  // };

  // const [count, dispatch] = useReducer(counterReducer, 0);
//pg 4
  const navigate=useNavigate();

  const { apiData }=useContext(AppContext); //useContext syntax
  function handelDashboard(){
    navigate("/dashboard");
  }
  return (
    <>
      <div>
        <span><b className="totalCountText" >Total Count : {apiData.length}</b></span>
        <button className="counterPage" onClick={handelDashboard}>
          Dashboard Page
        </button>
      </div>
      {/* <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
      <button onClick={()=>dispatch({type:"RESET"})}>RESET</button> */}
    </>
  );
}
export default Counter;
// function CounterProvider(){
//   return(
//     <AppProvider>
//       <Counter/>
//     </AppProvider>

//   )
// }
// export default CounterProvider;






//Using useState


// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handelCount = (data) => {
//     switch (data) {
//       case "INCREMENT":
//         return setCount(count + 1);

//       case "DECREMENT":
//         return setCount(count - 1);

//       case "RESET":
//         return setCount(0);

//       default:
//         return setCount(0);
//     }
//   };

//   return (
//     <>
//       <div>Hello World</div>
//       <p>Count : {count}</p>
//       <button onClick={() => handelCount("INCREMENT")}>INCREMENT</button>
//       <button onClick={() => handelCount("DECREMENT")}>DECREMENT</button>
//       <button onClick={() => handelCount("RESET")}>RESET</button>
//     </>
//   );
// }
// export default Counter;
