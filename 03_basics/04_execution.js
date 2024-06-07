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

/* 

The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context


*/