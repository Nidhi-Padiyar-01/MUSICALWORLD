function Validation(values) {
    let error ={};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern  = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (values.first_name === ""){
        error.first_name  = "FirstName should not be empty"
    }
else {
        error.first_name= ""
    }

    
    if (values.last_name === ""){
        error.last_name  = "lastName should not be empty"
    }
else {
        error.last_name= ""
    }




    if (values.email_address === ""){
        error.email_address  = "Name should not be empty"
    }

    else if(!email_pattern.test(values.email_address)){
        error.email_address = "Email Did not match"
    } else {
        error.email_address= ""
    }

    if (values.password === ""){
        error.password  = "password should not be empty"
    }

    else if(!password_pattern.test(values.password)){
        error.password = "password Did not match"
    } else {
        error.password= ""
    }

    return error;



}
export default Validation;