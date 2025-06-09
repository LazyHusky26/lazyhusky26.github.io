function f1(x){
    //return "f1 function";
    // return Promise.resolve("f1 function");
    // return Promise.reject("error");

    if (x < 0) {
        return Promise.reject("Something went wrong");
    } else {
        return Promise.resolve(x);
    }
}

function f2(v){
    //console.log("f2 function");
    console.log(v);
}

f1(-10)
    .then((v) => f2(v))
    .catch((err) => console.log(err));

// const result1 = f1();
// const result2 = f2(result1);

// console.log(result1);
// console.log(result2);