var button = document.querySelector("button");
var h3 = document.querySelector("h3");
var add = (a,b)=> Math.floor(a+b);
var sub = (a,b)=> Math.floor(a-b);
var mul = (a,b)=> Math.floor(a*b);
var div = (a,b)=> Math.floor(a/b);
button.addEventListener("click",()=>{
    var val1 = Number.parseInt(document.getElementById("val1").value);
    var val2 = Number.parseInt(document.getElementById("val2").value);
    var select = document.querySelector("select").value;
    switch (select) {
        case 'add':
            h3.innerHTML=`${add(val1,val2)}`;
            break;
        case 'sub':
            h3.innerHTML=`${sub(val1,val2)}`;
            break;
        case 'mul':
            h3.innerHTML=`${mul(val1,val2)}`;
            break;
        case 'div':
            h3.innerHTML=`${div(val1,val2)}`;
            break;
        default:
            alert("please select the operation");
            break;
    }
});
var color = document.getElementById("color");
var body = document.querySelector("body");
var section = document.querySelector("section");
color.addEventListener("change",()=>{
    body.style.backgroundColor=color.value;
    section.style.backgroundColor="white"
});