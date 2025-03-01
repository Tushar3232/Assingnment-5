document.getElementById("btn_1").addEventListener("click",function(event){
    event.preventDefault();
    alert()
    const num= 1 ;
    // task uncomplite 
    const task = document.getElementById("task").innerText ;
    const updaTask = parseInt(task);
    const incomplet = updaTask - num ;
    document.getElementById("task").innerText = incomplet ; 

    // total task complite 
    const TotalTask = document.getElementById("Task_complet").innerText;
    const updatTotalTask = parseInt(TotalTask);
    const sum = updatTotalTask + num ;
    document.getElementById("Task_complet").innerText = sum ;
    
    this.disabled = true;

})

// The part of box 2 

document.getElementById("btn_2").addEventListener("click",function(event){
    event.preventDefault();
    alert()
    const num= 1 ;
    // task uncomplite 
    const task = document.getElementById("task").innerText ;
    const updaTask = parseInt(task);
    const incomplet = updaTask - num ;
    document.getElementById("task").innerText = incomplet ; 

    // total task complite 
    const TotalTask = document.getElementById("Task_complet").innerText;
    const updatTotalTask = parseInt(TotalTask);
    const sum = updatTotalTask + num ;
    document.getElementById("Task_complet").innerText = sum ;
    
    this.disabled = true;

})
