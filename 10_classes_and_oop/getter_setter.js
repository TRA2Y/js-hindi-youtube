class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}paggo`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const paggo = new User("paggo@paggo.ai", "123")
console.log(paggo.password);
