function Validation(values) {
    let error ={};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern  = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (values.email_address === ""){
        error.email_address  = "Email should not be empty"
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