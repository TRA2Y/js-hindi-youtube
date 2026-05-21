const accountId = 144553
let accountEmail = "rohit@google.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountstate;

// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountcity = "bengluru"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope

*/
console.table([accountId, accountEmail,accountPassword,accountcity,accountstate])