/* eslint-disable no-restricted-globals */
// const totalData= JSON.parse(localStorage.getItem("allData"));
// const totalData= [];
// export const initialCount=totalData.length;
export const data={receiveddata:[], length:0};
// {data:[],dataLength:0}//url
// totalCount.length;//28

export const counterReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {...state,length:action.payload};
      case "DELETE":
        return {...state,length:action.payload};
        case "DATA":
          // console.log("Data123",action,state);
          // console.log("Dataabc",{...state, receiveddata:action.payload, length:action.payload.length});
        return {...state, receiveddata:action.payload, length:action.payload.length};
      default:
        return state;
    }
  };

  //page2