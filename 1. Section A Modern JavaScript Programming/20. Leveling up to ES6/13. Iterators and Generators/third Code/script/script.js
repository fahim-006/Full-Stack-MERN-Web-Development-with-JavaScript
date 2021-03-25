let names = ["R", "k", "s"];

function customIterator(arr){
    let i = 0;

    return{
        next: function(){
            return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
        }
    };

    

}
let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);