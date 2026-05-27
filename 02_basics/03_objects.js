// singleton
//objects.create

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "paggo",
    "full name": "paggo shubham",
    [mySym] : "mykey1",

    age:25,
    location:"sherghati",
    email: "paggo@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "paggo@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "paggo@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);

    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





