import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import image from "./clouds.jpg";


function Edit() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const { index } = useParams();
  console.log("index", index);

  const cardData=JSON.parse(localStorage.getItem("allData"));//get data 

  useEffect(()=>{
    
    console.log("cardData",cardData);
    setTitle(cardData[index].title);//prepopulate
    setPrice(cardData[index].price);//prepopulate

  },[]);
  
  const handelFile = (e) => {
    console.log("handelimg", e.target.files);
    const imageFile = e.target.files[0];
    setFile(imageFile);
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
    cardData[index].title=title;
    cardData[index].price=price;
    window.localStorage.setItem("allData", JSON.stringify(cardData));//updating data in local storage
    navigate("/dashboard");
  };

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="Box"
        style={{
          width: "400px",
          height: "500px",
          border: "1px solid black",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          className="title"
          style={{ fontSize: "40px", color: "black", fontWeight: "650" }}
        >
          Edit Product
        </div>
        <form
          className="formcontents"
          onSubmit={handelSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div className="uploadFile">
            <input
              type="file"
              placeholder="Upload Product Image"
              onChange={(e) => handelFile(e)}
            />
          </div>
          <div className="enterTitle">
            <input
              type="text"
              placeholder="Enter the title of product"
              value={title}
              style={{ width: "250px", height: "25px" }}
              onChange={(e) => handelTitle(e)}
            />
          </div>
          <div className="enterprice">
            <input
              type="text"
              placeholder="Enter the price"
              value={price}
              style={{ width: "250px", height: "25px" }}
              onChange={(e) => handelPrice(e)}
            />
          </div>
          <input
            type="submit"
            className="submitButton"
            placeholder="submit"
            style={{
              color: "white",
              width: "100px",
              height: "30px",
              backgroundColor: "green",
              borderRadius: "5px",
              fontSize: "20px",
              textAlign: "center",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Edit;

// // border: width typeofborder colorofborder
// //Add file data

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import image from "./clouds.jpg";

// function Add() {
//   const navigate = useNavigate();
//   const [file, setFile] = useState();
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState();

//   const handelFile = (e) => {
//     console.log("handelimg", e.target.files);
//     const imageFile = e.target.files[0];
//     setFile(imageFile);
//   };

//   const handelTitle = (e) => {
//     console.log("title", e.target.value);
//     setTitle(e.target.value);
//   };

//   const handelPrice = (e) => {
//     console.log("money", e.target.value);
//     setPrice(e.target.value);
//   };

//   const handelSubmit = () => {
//     const addProduct = { image: file, title: title, price: price };
//     console.log("addproduct", addProduct);
//     const allProduct = JSON.parse(window.localStorage.getItem("allData"));
//     window.localStorage.setItem("allData",JSON.stringify([...allProduct, addProduct]));
//     navigate("/dashboard");
//   };

//   return (
//     <div
//       className="main"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="Box"
//         style={{
//           width: "400px",
//           height: "500px",
//           border: "1px solid black",
//           boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//           backgroundColor: "white",
//           borderRadius: "20px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           gap: "40px",
//         }}
//       >
//         <div
//           className="title"
//           style={{ fontSize: "40px", color: "black", fontWeight: "650" }}
//         >
//           Add New Product
//         </div>
//         <form
//           className="formcontents"
//           onSubmit={handelSubmit}
//           style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//         >
//           <div className="uploadFile">
//             <input
//               type="file"
//               placeholder="Upload Product Image"
//               onChange={(e) => handelFile(e)}
//             />
//           </div>
//           <div className="enterTitle">
//             <input
//               type="text"
//               placeholder="Enter the title of product"
//               value={title}
//               style={{ width: "250px", height: "25px" }}
//               onChange={(e) => handelTitle(e)}
//             />
//           </div>
//           <div className="enterprice">
//             <input
//               type="text"
//               placeholder="Enter the price"
//               value={price}
//               style={{ width: "250px", height: "25px" }}
//               onChange={(e) => handelPrice(e)}
//             />
//           </div>
//           <input
//             type="submit"
//             className="submitButton"
//             placeholder="submit"
//             style={{
//               color: "white",
//               width: "100px",
//               height: "30px",
//               backgroundColor: "green",
//               borderRadius: "5px",
//               fontSize: "20px",
//               textAlign: "center",
//             }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Add;

// border: width  typeofborder  colorofborder
