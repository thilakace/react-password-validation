import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState('');
  const [strong, setStrong] = useState(5);
  const [pwd , setPwd] = useState('')
  
  

  const inputsHandler = (evnt) =>{
    setPwd(  evnt.target.value );
    
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
   
    if(passwordInputFieldName==='password'){
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const lengthRegExp   = /^.{6,20}$/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const repeatRegExp = /^([a-z])\1\1+$/;
      
  //  console.log(hasRepeatedLetters(passwordInputValue));
      // length
      const passwordLength =      passwordInputValue.length;
      const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
      const lengthPassword =   lengthRegExp.test(passwordInputValue);
      const digitsPassword =      digitsRegExp.test(passwordInputValue);
      const repeatPassword =      hasRepeatedLetters(passwordInputValue);
      
       
          let count = 5;

          if(lowercasePassword){
            count = count-1;
            console.log("low"+ count);
        }

         if(uppercasePassword){
          
          count = count-1
          console.log("up"+ count);
        }


         if(digitsPassword){
           count = count-1;
           console.log("digit"+ count);
        }
       
         if(lengthPassword){
           count = count-1;
           console.log("length"+ count);
        }

        setStrong(count);

       
        
      let errMsg ="";
      if(passwordLength===0){
              errMsg="Password is empty";
      }else if(!uppercasePassword){
              errMsg="At least one Uppercase";
      }else if(!lowercasePassword){
              errMsg="At least one Lowercase";
      }else if(!digitsPassword){
              errMsg="At least one digit";
      }else if(!lengthPassword){
              errMsg="At least minumum 6 characters and max 20";
      }else if(!repeatPassword){
        errMsg="There are 3 times repeated char";
     }else{
          errMsg="Good!";
          setStrong(0);
      }
      setErrorMessages(errMsg);

    }
}



  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };



  // Generate JSX code for error message
  const hasRepeatedLetters = (value) =>{
    let res = true;
    if (/(.)\1\1/.test(value)) {
      res =  false;
    }
    return res;
  }
    

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
       
        <div className="input-container">
          <label>Password </label>
          <input type="text" id="password" name="password" placeholder="Password" autoComplete="off"  value={pwd} onChange={inputsHandler} />
          <span>{errorMessages}</span><br/>
          <span>Strong output : {strong}</span>
        </div>
        
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Password Checker</div>
        {renderForm}
      </div>
    </div>
  );
}

export default App;