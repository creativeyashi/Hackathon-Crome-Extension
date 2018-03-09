//Declare variables
const storage = window.localStorage; 
const bing = new Audio("ding.mp3"); 
const keydown = new Audio("keydown.mp3"); 
const doorClose = new Audio("doorClose.mp3");


//Check if storage is empty before adding new []; 
if(storage.getItem("myStorage")===null){
  storage.setItem("myStorage", JSON.stringify([]));
}

//Beep when typing name
$("#people").on("keydown",()=>{
  keydown.play(); 
})

//Add names to queue
$("#add").on("click",function(e){ 
  doorClose.play(); 
  $("#container").empty(); 
  let name = $("#people").val();
  
  //Pull out local storage array
  let storageArr = JSON.parse(storage.getItem("myStorage")); 
  storageArr.push(name); 

  //Append to container
  for (let i = 0; i < storageArr.length; i++){
    $("#container").append(`<li>${storageArr[i]}</li>`); 
  }

  //Put storage array back in local storage
  storage.setItem("myStorage", JSON.stringify(storageArr));

  //Empty input text
  $("#people").val('');
});

//Remove one name from queue
$("#remove").on("click",function(){
  bing.play();
  
  //Pull out storage 
  let removalArr = JSON.parse(storage.getItem("myStorage"));
  
  //Remove first item 
  removalArr.shift(); 
  
  //empty the container and repopulate with remaining items
  $("#container").empty(); 
  for (let i = 0; i < removalArr.length; i++){
    $("#container").append(`<li>${removalArr[i]}</li>`); 
  }
  
  //Put storage array back. 
  storage.setItem("myStorage", JSON.stringify(removalArr));
});