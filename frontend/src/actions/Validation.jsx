function SignUpValidation(values){
  let error = {}
  
  if(values.first_name === ""){
    error.first_name = "Firstname should not be empty"
  } else {
    error.first_name = ""
  }

  if(values.sur_name === ""){
    error.sur_name = "Surname should not be empty"
  } else {
    error.sur_name = ""
  }

  if(values.email === ""){
    error.email = "Email should not be empty"
  } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
    error.email = "Use proper email pattern"
  } else {
    error.email = ""
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
    
  } else if (values.password.length < 8) {
    error.password = "Password must be at least 8 characters long";
  } else if (!/\d/.test(values.password)) {
    error.password = "Password must contain at least one digit";
  } else if (!/[a-z]/.test(values.password)) {
    error.password = "Please use at least one lowercase letter";
  } else if (!/[A-Z]/.test(values.password)) {
    error.password = "Please use at least one uppercase letter";
  } else if (!/[!@#$%^&*()_+]/.test(values.password)) {
    error.password = "Password must contain at least one special character";
  } else {
    error.password = "";
  }

  if(values.confirmPassword === ""){
    error.confirmPassword = "Confirm Password is empty"
  } else {
    error.confirmPassword = ""; // Ensure confirmPassword error is cleared
  }

  if(values.hospitalName === ""){
    error.hospitalName = "Hospital Name should not be empty"
  } else {
    error.hospitalName = ""
  }

  if(values.userType === ""){
    error.userType = "User Type should not be empty"
  } else {
    error.userType = ""
  }
  return error;
}

export default SignUpValidation;
