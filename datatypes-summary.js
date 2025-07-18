// kis taraf se data ko memory me rakha jata hai aur access kiya jata hai us basis pe data ke 2 categarisation gai

// 1. Primitive Datatype

// String
// Number
// Boolean
// Null
// undefined
// symbol
// bigInt

// 2. Non-primitive datatype (reference datatypes)

// Objects
// Array
// Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4661587952n

console.log(typeof bigNumber);

const heros = ["shaktiman", "nagraj", "doga"]

let myObj= {
    name: "hiiii",
    age: 20,
    position: "HR"
}

const myFun = function(){
    console.log("Helloo World");
    
}
myFun()

// Type of val	                                            Result
// Undefined	                                            "undefined"
// Null	                                                    "object"
// Boolean	                                                "boolean"
// Number	                                                "number"
// String	                                                "string"
// Object (native and does not implement [[Call]])	        "object"
// Object (native or host and does implement [[Call]])	    "function"
// Object (host and does not implement [[Call]])	        Implementation-defined except may not be "undefined", "boolean", "number", or "string".