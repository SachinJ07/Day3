let object1 ={
     name:"person 1",
     age:5
}
let object2={
    age:5,
    name:"person 1"
}


let sortedJsonString1 = JSON.stringify(object1, Object.keys(object1).sort());
let sortedJsonstring2 = JSON.stringify(object2, Object.keys(object2).sort());

if(sortedJsonString1==sortedJsonstring2)
{
 console.log("Both objects have same Data") 
}
else{
    console.log("Both objects has different Data")
}