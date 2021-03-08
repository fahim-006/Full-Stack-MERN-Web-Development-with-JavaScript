document.getElementById('sample-btn').addEventListener('dblclick', message);


function message(e) {
    let val = e;
    val = e.target; // this
    console.log(val);
    val = e.target.id;

    val = e.timeStamp;
    val = e.type;

    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX;


    //console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);

}

document.querySelector(".container").addEventListener('mouseover', message1);

document.querySelector('.container').style.background = "red";

function message1(e){
    let val = e;
    console.log(`e = ${val}`);

    console.log(`e.offsetX = ${e.offsetX}`);
    console.log(`e.offsetY = ${e.offsetY}`);

    //change color
    val = this;
    this.style.background = `#${e.offsetX}`;
}

document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup', test2);

function test(e){
    this.style.background = 'pink';
}

function test2(e){
    document.getElementById("demo").innerText = this.value; //writing the value automatic
}