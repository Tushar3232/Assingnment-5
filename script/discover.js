
// show date in web site 
const color=["#eccf74 ","#eca174","#bfe78a","#8ae7d5","#8ac8e7","#c18ae7 ","#efdae1","#81816d","#8795a5"];
document.getElementById("bg_btn").addEventListener("click",function(event){
    event.preventDefault();
    let randomColor= color[Math.floor(Math.random()*color.length)];
    document.body.style.background=randomColor;

})

document.getElementById("new_today").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="./discover.html";

})

document.getElementById("currentDate").innerText = new Date().toLocaleDateString('en-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

