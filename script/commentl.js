document.getElementById("btn_1").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Fix Mobile Button Issue" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})

// The part of box 2
document.getElementById("btn_2").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Add Dark Mode" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})

// The part of box 3
document.getElementById("btn_3").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Optimize Home page" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})
// The part of box 4
document.getElementById("btn_4").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Add new emoji 🤲" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})
// The part of box 5
document.getElementById("btn_5").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Integrate OpenAI AP" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})
// The part of box 6
document.getElementById("btn_6").addEventListener("click",function(event){
    event.preventDefault();
    
    // the comment for pass 
    const newComent = "Improve Job searching" ;
    // get the coment pas contenar 
    const comentContenar = document.getElementById("coment_contenar");
    // creat a coment p and set inner text 
    console.log(comentContenar);
    const creatPtag = document.createElement("p");
    creatPtag.innerText= newComent;

    // set new ptag 
    comentContenar.appendChild(creatPtag);
})


// comment clear 

document.getElementById("Clear_coment").addEventListener("click",function(){
    document.getElementById("coment_contenar").style.display="none";
})

