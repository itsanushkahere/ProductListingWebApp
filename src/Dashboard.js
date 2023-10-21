import React, { useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css" ;
import { AppContext } from "./AppContext";
import axios from "axios";
// import { data } from "./reducer/counterReducer";
//pg 3
function Dashboard() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [original, setOriginalData] = useState([]); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [idx, setIdx] = useState();
  const isAuthenticated = JSON.parse(localStorage.getItem("IsLoggedIn"));
  const { apiData,dispatch } = useContext(AppContext); //useContext syntax
 
  useEffect(()=>{
    /*hello*/
    
    console.log("Data Refresh", apiData)
  },[apiData]);

  useEffect(()=>{
    if(!isAuthenticated){
      console.log("test",isAuthenticated);
      navigate("/login")
    }
  },[]);

  // useEffect(() => {
  //   console.log(searchText);
  //   const newInfo = original.filter((index) => {
  //     return index.title.includes(searchText);
  //   });
  //   setInfo(newInfo);
  // }, [searchText]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    axios
      .get(url) // axios.get(url).then().catch()//responsible
      .then((resp) => {
        console.log("Response", resp.data);
        // window.localStorage.setItem("allData",JSON.stringify(resp.data));
        dispatch({type:"DATA",payload:resp.data});
        setInfo(resp.data);
        // setOriginalData(resp.data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });

    // const cardData = JSON.parse(localStorage.getItem("allData"));
    // setInfo(cardData);
    // setOriginalData(cardData);
  }, []);

  const handelCount = () => {
    navigate("/count");
  };

  const handelLogout = () => {
    window.localStorage.setItem("IsLoggedIn",JSON.stringify(false));
    navigate("/login");
  };

  const handelSearch = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const handelAdd = () => {
    navigate("/addform");
  };

  const handleKebab = (index) => {
    console.log(index);
    setIdx(index);
    setShowDropdown(!showDropdown); //toggling
  };

  const handleEditClick = (index) => {
    console.log("Edit clicked");
    navigate(`/editProduct/${index}`);
  };

  // const handleDeleteClick = (index) => {
  //   const updatedOriginal = [...original]; //shallow copy
  //   updatedOriginal.splice(index, 1);
  //   // localStorage.setItem("allData", JSON.stringify(updatedOriginal));
  //   setInfo(updatedOriginal);
  //   setOriginalData(updatedOriginal);
  //   console.log(updatedOriginal);
  //   dispatch({type:"DELETE",payload:apiData.length-1});
  // };

console.log("count123",apiData);
  return (
    <div className="main">
      <div className="Dashboardtitle">
        <h1>
          <b>PRODUCT LISTING</b>
        </h1>
      </div>
      <div>
        <span><b className="totalCountText" >Total Count : {apiData.length}</b></span>
        <button className="counterPage" onClick={handelCount}>
          Counter Page
        </button>
      </div>
      <button className="logout" onClick={handelLogout}>
        Logout
      </button>
      <div className="AddSearch">
        <button className="AddButton" onClick={handelAdd}>
          Add
        </button>
        <input className="SearchText"
          type="text"
          placeholder="Search your product title"
          value={searchText}
          onChange={(e) => handelSearch(e)}
        />
      </div>
      <div className="card">
        {info.length > 0 ? (
          <>
            {apiData.receiveddata.map((result, index) => (
              <div className="eachcard">
                <div>
                  <img className="img"
                    src={result.image}
                    alt="product Images"
                  />
                </div>
                <div>{result.title}</div>
                <div>$ {result.price}</div>
                <div className="kebab"
                  onClick={() => handleKebab(index)} //onClick={handleKebab}-when we don't want to send anything ,onClick={()=>handelKebab(index)}
                >
                  &#8942; {/* Three-dot symbol (kebab) */}
                </div>

                {showDropdown && index === idx && (
                  <div className="dropdown">
                    <div className="DropdownOption"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </div>
                    <div className="DropdownOption"
                      // onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <div className="Notfound">
            No product found
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

// function DashboardProvider() {
//   return (
//     <AppProvider>
//       <Dashboard />
//     </AppProvider>
//   );
// }
// export default DashboardProvider;



///videoplayer/:videoId

///editProduct/:index