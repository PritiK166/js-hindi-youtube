// singleton
// Object.create

// Object literals
const mySym = Symbol("key1")


const jsObject = {
    name: "hema",
    age: 18,
    [mySym]: "mykey1",
    "full name": "hema shah",
    location: "Jaipur",
    email: "a@gmail.com",
    isLoedIn: false,
    lastLoggedinDays: ["Monday", "Friday"]
}

// console.log(jsObject.name)
// console.log(jsObject["name"])
// console.log(jsObject["full name"])
// console.log(jsObject[mySym])

jsObject.email = "hiii@gmail.com"

console.log(jsObject["email"])

// Object.freeze(jsObject)

jsObject.email = "hello@gamil.com"
console.log(jsObject)

jsObject.greeting = function(){
    console.log("Hello JS User");
    
}
jsObject.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
console.log(jsObject.greetingTwo());
