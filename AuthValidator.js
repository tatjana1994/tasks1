class AuthValidator {

    validateEmail(email){

        if(!(email.includes("@")) || email.length < 10){
            throw new ValidationError ("Your email is wrong! You must use @ or at least 10 characters")
        } else {
            alert(email);
    
        }
    }

    validatePassword(password) {

        let minNumberofChars = 3;
        let alpha = /[a-z0-9]+/i;
        let spec = /[!@#$%^&*(),.?":{}|<>]/;

        
        if(password.length >= minNumberofChars && alpha.test(password) && spec.test(password)){
            alert(password);
        } else {
            throw new ValidationError ("Your password is wrong!")
        } 
    }
            
    validateFirstName(name){
        if(name.length < 3){
            throw new ValidationError ("Your name is too short!")
        } else{
            alert(name);
        }
    }   
}

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}
  




// let user = new AuthValidator();

// user.validateEmail("sasasasasasasasasas");
