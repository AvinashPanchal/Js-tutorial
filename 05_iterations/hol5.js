//Reduce 

const myNums = [1, 2, 3]

// const newNums = myNums.reduce(function (accumelator, currentvalue) {
//     console.log(`Acc:${accumelator} and CV: ${currentvalue}`);
//     return accumelator+currentvalue
// }, 0)
// console.log(newNums);

const myTotal = myNums.reduce ( (acc, curr)=>acc+curr, 0)

console.log(myTotal);

const shopCart = [
    {
        itemName:"JS Course",
        price:2999
    },
    {
        itemName:"PY Course",
        price:999
    },
    {
        itemName:"Mobile Development",
        price: 5999
    },
    {
        itemName:"Data Science",
        price:12999
    }
]

const cartTotal = shopCart.reduce((acc, item)=> acc+ item.price, 0)
console.log(cartTotal);
