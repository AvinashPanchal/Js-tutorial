// For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 Is Best Number");
    }
    //console.log(element);
        
    }

    //console.log(element);

    // for (let i = 0; i <= 10; i++) {
    //     console.log(`Outer Loop value: ${i}`);
    //     for (let j = 0; j <= 10; j++) {
    //         //console.log(`Inner Loop Values:${j} and ${i}`);
    //        console.log(i + 'x' + j + '=' + i*j);
    //     }  
    // }

//     let myArray = ["flash", "batman", "superman"]
    
//    console.log(myArray.length);

//     for (let index = 0; index < myArray.length; index++) {
//         const element = myArray[index];
//         console.log(element);
//     }

// Break and Continue
 
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log("Detected 5");
//         break
//     }
//    console.log(`Value of I is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("Detected 5");
        continue
    }
   console.log(`Value of I is ${index}`);
}

