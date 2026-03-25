
import React, { useState } from "react";

const Input=()=>{
  let [input,setInput]=useState({
        name:"",
        email:"",
        gender:["Male","Female","Other"],
        number:"",
        password:"" });
    let [err,setErr]=useState("");
    let [sucess,setSuccess]=useState("")
    let {name,email,number,gender,password}=input;

    function updateField(e)
    {
       let val=e.target.name;
       setInput({...input, [val]:e.target.value })
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!name && !email && !number && !password)
        {
            setErr("All fields are mandatory.")
            setSuccess("");
            return;
        }
        if(!name.includes(" "))
        {
          setErr(" Name is not alphanumeric.")
          setSuccess("");
          return;
        }
        if(!email.includes("@"))
        {
            setErr("Email must contain @")
            setSuccess("");
            return;
        }
        if(number.includes("abcdefg"))
        {
            setErr(" Phone Number must contain only numbers.")
            setSuccess("");
            return;
        }
        if(password.length<6)
        {
            setErr("Password must contain atleast 6 letters")
            setSuccess("");
            return;
        }

        let p=email.slice(0,email.indexOf("@"));
            setSuccess("Hello",{p});
            setErr("")
        
    }


    return <>
        { err && <span style={{color:"red"}}>{err}</span>  }
        { sucess && <h2 style={{color:"green"}}>{sucess}</h2>}

    
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter the name" onChange={updateField} data-testid = 'name'></input>
        <br/>
        <input type="email" name="email" placeholder="Enter the email" onChange={updateField} data-testid = 'email'></input>
        <br/>
        <select data-testid = 'gender'>
            <option value={gender[0]}>Male</option>
            <option value={gender[1]}> Female</option>
            <option value={gender[2]}>Other</option>
          </select>
          <br/>
          <input type="number" name="number" placeholder="Enter the number" onChange={updateField} data-testid = 'phoneNumber'></input>
          <br/>
          <input type="password" name="password" placeholder="Enter Password" onChange={updateField} data-testid = 'password'></input>
          <br/>
          <button data-testid = 'submit' type="Submit">Submit</button>
        </form>
    </>

}

export default Input;