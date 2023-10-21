import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import "./AddEdit.css";
import image from "./clouds.jpg";
import { AppContext,AppProvider } from "./AppContext";

function AddEdit() {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const { index } = useParams();
  const cardData = JSON.parse(localStorage.getItem("allData")); //get data
  const isAuthenticated = JSON.parse(localStorage.getItem("IsLoggedIn"));
  
  const { dispatch } = useContext(AppContext); //useContext syntax
  
  useEffect(()=>{
    if(!isAuthenticated){
      console.log("test",isAuthenticated);
      navigate("/login")
    }
  },[]);             
  //useEffect      
  
  useEffect(() => {
    console.log("cardData", cardData);
    if (path.includes("editProduct")) {//1
      setTitle(cardData[index].title); //prepopulate
      setPrice(cardData[index].price); //prepopulate
    }
  }, []);

  // const handelFile = (e) => {
  //   console.log("handelimg", e.target.files);
  //   const imageFile = e.target.files[0];
  //   setFile(imageFile);
  // };

  const handelFile = (e) => {
    const imageFile = e.target.files[0];//1
    
    
    const reader = new FileReader();//2//created new object
    reader.readAsDataURL(imageFile);//3//function of reader object
    reader.onload = (event) => {//4
      const imageDataUrl = event.target.result;//5//save image data
      setFile(imageDataUrl);//sets url in setter 
    };
    
    // setFile(imageData);
  };


  const handelTitle = (e) => {
    console.log("title", e.target.value);
    setTitle(e.target.value);
  };

  const handelPrice = (e) => {
    console.log("money", e.target.value);
    setPrice(e.target.value);
  };

  const handelSubmit = () => {
    if (path.includes("editProduct")) {//2
      cardData[index].title = title;
      cardData[index].price = price;
      window.localStorage.setItem("allData", JSON.stringify(cardData)); //updating data in local storage
      navigate("/dashboard");
    } else {
      const addProduct = { image: file, title: title, price: price };//new object to add the product
      console.log("addproduct", addProduct);
      const allProduct = JSON.parse(window.localStorage.getItem("allData"));
      window.localStorage.setItem("allData", JSON.stringify([...allProduct, addProduct]));
      dispatch({ type: "ADD" });
      navigate("/dashboard");

    }
  };

  return (
    <div className="mainAddEdit" style={{backgroundImage:`url(${image})`}}>
      <div className="AddEditBox" >
        <div className="title">
          {path.includes("editProduct") ? (//3
            <span>Edit Product</span>
          ) : (
            <span>Add New Product</span>
          )}
        </div>
        <form
          className="formcontents"
          onSubmit={handelSubmit}
        >
          <div className="uploadFile">
            <input
              type="file"
              placeholder="Upload Product Image"
              onChange={(e) => handelFile(e)}
            />
          </div>
          <div className="enterOptions">
            <input
              type="text"
              placeholder="Enter the title of product"
              value={title}
              onChange={(e) => handelTitle(e)}
            />
          </div>
          <div className="enterOptions">
            <input
              type="text"
              placeholder="Enter the price"
              value={price}
              onChange={(e) => handelPrice(e)}
            />
          </div>
          <input
            type="submit"
            className="submitButton"
            placeholder="submit"
          />
        </form>
      </div>
    </div>
  );
}

// export default AddEdit;

function AppEditProvider() {
  return (
    <AppProvider>
      <AddEdit/>
    </AppProvider>
  );
}
export default AppEditProvider;
