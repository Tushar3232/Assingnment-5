document.getElementById("new_today").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="./discover.html";

})

document.getElementById("currentDate").innerText = new Date().toLocaleDateString('en-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});