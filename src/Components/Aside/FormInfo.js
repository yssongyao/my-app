import { useState, useEffect } from "react";
import './FormInfo.css';

function FormInfo() {
    
  const [isFocused, setIsFocused] = useState (false);
  
  const handleOnFocus = (e)=> {
    setIsFocused (true);
  };

  const handleOnBlur = (e)=> {
    setIsFocused (false);
  };
    
  const [inputFields, setInputFields] = useState({
    fistname: "",
    lastname: "",
    email: "",
    msg: "",
  });

  const [errors, setErrors] =useState ({});

  const[submitting, setSubmitting] =useState (false);

  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const validateValues = (inputValues) => {
    let errors={};
    if (inputValues.firstname.length < 2) {
      errors.firstname="The first name is too short"
    }
    if (inputValues.lastname.length < 2) {
      errors.lastname="The last name is too short"
    }
    if (inputValues.email.length < 7) {
      errors.email="The email is too short"
    }
    if (inputValues.msg.length > 50) {
      errors.msg="The message is too long"
    }
    return errors;
  };

  const handleChange=(e)=>{
    setInputFields ({...inputFields, [e.target.name]: e.target.value});
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors (validateValues (inputFields));
    setSubmitting (true);
  };

  const finishSubmit=()=>{
    console.log(inputFields);    
  };

  useEffect ( ()=> {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit ();
    }
  }, [errors]

  );

  return (

  <div className="FormInfo">
    {Object.keys(errors).length===0 && submitting ? (
      <span children="success">Successfully submitted ✓</span>
    ): null}

    
    <form onSubmit={handleSubmit}>     
            
      <label for="firstname">First name</label>
        <input
         type="text"
         name="firstname"
         value={inputFields.firstname}
         onChange={handleChange}
         onFocus={handleOnFocus}
         onBlur={handleOnBlur}
         style={
          {
              backgroundColor: isFocused ?
                  'lightgreen' : 'white',
              border: errors.firstname ? "3px solid red" : null                               
          }                 
         }         
         placeholder="Enter your first name."
         required
         />      
        {errors.firstname ? (
            <p className="error">The first name should be at least 2 characters long</p>
          ) : null}

      <label for="lastname">Last name</label>
        <input
         type="text"
         name="lastname"
         value={inputFields.lastname}
         onChange={handleChange}
         onFocus={handleOnFocus}
         onBlur={handleOnBlur}
         style={
          {
              backgroundColor: isFocused ?
                  'lightgreen' : 'white',
              border: errors.lastname ? "3px solid red" : null                               
          }                 
         }    
         placeholder="Enter your last name."
         required
         />      
        {errors.lastname ? (
            <p className="error">The last name should be at least 2 characters long</p>
          ) : null}
        
      <label for="email">Email</label>
        <input
         type="email"
         name="email"
         value={inputFields.email}
         onChange={handleChange}
         onFocus={handleOnFocus}
         onBlur={handleOnBlur}
         style={
          {
              backgroundColor: isFocused ?
                  'lightgreen' : 'white',
              border: errors.email ? "3px solid red" : null                               
          }                 
         }    
         placeholder="Enter your email."
         required
         />      
        {errors.email ? (
            <p className="error">The email should be at least 7 characters long</p>
          ) : null}
      
      <br />

      <label for="message">Message</label>
      <textarea 
      rows="5" cols="40" 
      type="text"
      name="msg"
      value={inputFields.msg}
      onChange={handleChange}
      onFocus={handleOnFocus}
         onBlur={handleOnBlur}
         style={
          {
              backgroundColor: isFocused ?
                  'lightgreen' : 'white',
              border: errors.msg ? "3px solid red" : null                               
          }                 
         }    
      placeholder="Enter your message" 
      required>
      </textarea>
      {errors.msg ? (
            <p className="error">The maximum characters of message is 50</p>
          ) : null}
      
       <br />

       <label For="checkbox">Check all blanks are filled
       <input
        type="checkbox"
        name="checkbox"
        className="CheckBox"
        checked={isChecked}
        onChange={checkHandler}
      />
      </label>
      {isChecked  ? (<p style={{color:"lightgreen"}}>Information ready for submition</p>) : null}
      

      <br />              

      <button type="submit">Submit</button>

    </form>

  </div>  

  )
 
}

export default FormInfo;