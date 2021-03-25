function* getFunction(){
    console.log("Some Code");
    yield 1;
    yield "Rahim";
    //eikhane return add korle nicher codes ar kaj korbe na

    yield 4;
    yield "Karim";
}

let iter = getFunction();

console.log(iter.next().value);
console.log(iter.next().value);