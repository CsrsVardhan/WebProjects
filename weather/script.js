let input = document.querySelector("input");
let btn = document.querySelector("button");
let tem = document.getElementById("tech");
let humi = document.getElementById("huch");
let h1 = document.getElementById("h1");
let image = document.querySelector("img");
btn.addEventListener("click",async ()=>{
    let city = input.value;
    let key = `10af1af4916fc704fce79ca5bdfeade5`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let wea1 = await fetch(url);
    let wea2 = await wea1.json();
    let wetemp = Math.floor(wea2.main.temp-273);
    let wehum = wea2.main.humidity;
    let we = wea2.weather[0].description
    tem.innerHTML = `${wetemp} <sup>0</sup> C`
    humi.innerHTML = `${wehum} %`
    h1.innerHTML=`${we}`;
    switch (we) {
        case `haze`:
            image.src=`./images.jpeg`;
            break;
    
        default:
            image.src=`./unnamed.png`
            break;
    }
})