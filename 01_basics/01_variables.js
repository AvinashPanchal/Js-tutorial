const accountId = 12345
let accountEmail="avinash@cefnogi.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;


// accountId = 245 // Not allowed (TypeError: Assignment to constant variable.)

/* 
prefer not to use var
because of issue in block and functional scope
*/

accountEmail = "abc@gmail.com"
accountPassword = "212121"
accountCity = "Noida"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

