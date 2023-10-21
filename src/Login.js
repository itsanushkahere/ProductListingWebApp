import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasValidate] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = JSON.parse(localStorage.getItem("IsLoggedIn"));
  
  const userData=[
    {name:"Anushka",email:"anu@gmail.com",password:"123456"},
    {name:"Ram",email:"ram@gmail.com",password:"ram1234"},
    {name:"sita",email:"sita@gmail.com",password:"sita5555"},
    {name:"Geeta",email:"geeta@gmail.com",password:"geeta@12345"}
]

// userData[2].name;
//const testData=userData[3];
//{name:"Geeta",email:"geeta@gmail.com",password:"geeta@12345"}
// userData[3].name="Geetanjali"


window.localStorage.setItem("studentData",JSON.stringify(userData));
const allData = JSON.parse(localStorage.getItem("studentData"));
console.log(allData);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (e.target.value.length >= 5) {
      setPasValidate(true);
    } else {
      setPasValidate(false);
    }
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@") && e.target.value.includes(".com")) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };
  const handelSubmit = () => {
    const verifiedUser = allData.filter((index) => {
      return index.email === email && index.password === password;
    });
    if (verifiedUser.length >= 1) {
      console.log("user is verified");
      window.localStorage.setItem("IsLoggedIn", JSON.stringify(true));
      navigate("/dashboard");
    } else {
      console.log("user is not verified");
      alert("user is not verified");
    }
  };

  return (
    <div className="mainLogin">
      <div className="LoginBox">
        <div className="Login">Login</div>
        <div className="UserInfo">
          <div className="email">
            <input
              className="Inputfield"
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => handelEmail(e)}
            />
            {emailValidate ? (
              <div></div>
            ) : (
              <div className="Validation">*Please enter valid EmailID</div>
            )}
          </div>
          <div className="password">
            <input
              className="Inputfield"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => handlePassword(e)}
            />
            <span
              className="Eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {passwordValidate ? (
              <div></div>
            ) : (
              <div className="Validation">
                *Please enter atleast 5 digits password
              </div>
            )}
          </div>
        </div>
        <div className="Submit" onClick={handelSubmit}>
          <div className="SubmitText">Submit</div>
        </div>
        <div className="SignUp">
          Don't have an account?
          <a className="SignUpText" href="/signup">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

// useEffect{()=>{

// },[]}

// const [value,setValue]=useState("");
