function LoginValidation(values){
  let error = {}
  const email_pattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
  
  if(values.email === ""){
    error.email = "Email should not be empty";
  }
  // else if(values.email =! email_pattern){
    // error.email = "Enter a proper Email";
  // }
  else{
    error.email = ""
  }
  if(values.password ===""){
    error.password = "Password should not be empty";
  }
  // else if(values.password !== password_pattern){
    // error.password = "Enter a proper Password";
  // }
  else{
    error.password = ""
  }
  return error;
 }


 export default LoginValidation;