let form = document.querySelector("form");
let img = document.querySelector("img");
let section = document.querySelector("section");
img.style.visibility="hidden";
form.addEventListener("submit",(val)=>{
    val.preventDefault()
    let input = document.querySelector("input").value;
    if(input==""){
        alert("Please Enter the URL")
    }else{
        let qrc = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${input}`;
        img.src=qrc;
        section.style.height="inherit"
        section.style.paddingBottom="0px"
        img.style.visibility="visible";
    }
})