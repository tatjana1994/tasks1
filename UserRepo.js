class UserRepo {
    constructor() {
    this.users = [];
}

create(obj){  

    this.users.push(obj)

}


read(ID){

    let user = this.users.find(item => item.id == ID);
    return user;

}   

update(ID, prop, value){
    user = this.read(ID);
    user[prop] = value;
    
}

delete(ID) {
    user = this.read(ID);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);

    } 

}

let user =  {
    id : 1,
    firstName : "john",
    surname :  "smith"

}

let user1 =  {
    id : 2,
    firstName : "john",
    surname :  "smith"

}


let userRepository = new UserRepo();

// userRepository.create(user);
// userRepository.create(user1);


// console.log(userRepository.delete(1));
// console.log(userRepository);

