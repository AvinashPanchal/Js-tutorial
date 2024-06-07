//Javascipt execution context
// {code} - Global Execution Context (This Keywords)

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// {code} - memory creation phase -> Execution phase

let val1 =10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Step 1. Global Execution (this)
// Step 2. Memory Phase
/* val1 - undefind
val2 - undefind
addNum - definition
result1 - undefind
result2 - undefind
*/
// Step 3. Execution Phase
/* val1=10
val2=5
addNum -- create separate execution context - (New Variable environment+execution thread)
Each time function call 2 phase (i.e. memory phase and execution phase)

*/

// Call Stack - LIFO - last in first out