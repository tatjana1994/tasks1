class AuthPrompter {
    constructor(authprompter){
        this.authprompter = new AuthValidator();           
    }

hasAccount(){
    confirm("Do you already have an account?");
    }

enterEmail(){
    let email = prompt("Enter your Email: ");
    this.AuthValidator.validateEmail(email);  
    }

enterPassword(){
    let password = prompt("Enter your password: ");
    this.AuthValidator.validatePassword(password);
    }

enterFirstName(){ 
    let firstName = prompt("Enter your name: ");
    this.AuthValidator.validateFirstName(firstName);
    }
}




