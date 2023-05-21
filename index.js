function handleClick(){
    var buttonInnerHTML= this.innerHTML;//selecting button
   makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
    
//************************************* 
   function handlePress(event){ //handling keyboard
    makeSound(event.key);
    buttonAnimation(event.key);
}
//*************************************

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// *************************************
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); //adding audio
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3"); //adding audio
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3"); //adding audio
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3"); //adding audio
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3"); //adding audio
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3"); //adding audio
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3"); //adding audio
            snare.play();
            break;
        
        default:
            console.log(buttonInnerHTML)
            break;
    }
}

//********************************* 

var numOfButton=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfButton ;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)}

//********************************** 

document.addEventListener("keypress",handlePress)