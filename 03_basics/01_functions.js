function sayMyName (){
    console.log("P");
    console.log("A");
    console.log("G");
    console.log("G");
    console.log("O");

    
}
// sayMyName()

// function addTwoNumbers (number1, number2){  // parameter
//     console.log( number1 + number2);


function addTwoNumbers (number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumbers(5, 8)
    // console.log( "result:" , result);

    function loginUserMessage(username = "sam"){
        if(!username){
            console.log("please enter a username")
            return
        }
        return `${username} just logged in `
    }

    // console.log(loginUserMessage("paggo"))
    // console.log(loginUserMessage("paggo"))

    function calculateCartPrice(val1, val2,...num1){
        return num1
    }

    // console.log(calculateCartPrice(200,400,800,600));

    const user = {
        username: "paggo",
        price: 199
    }

    function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        
    }

    // handleObject(user)
     handleObject({
        username: "paggo",
        price:499
     })

     const myNewArray = [200, 300, 400, 500]

     function returnSecondValue(getArray){
        return getArray[1]
     }
    //   console.log(returnSecondValue(myNewArray));
      console.log(returnSecondValue([200, 300, 400, 500]));
      
    
    


