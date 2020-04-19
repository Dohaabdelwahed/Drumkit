// document.getElementsByTagName("button").foreach(addEventListener("click",function (){
//   alert("I got Clicked!");
// }))

// adding listening event to buttons
let number = document.querySelectorAll(".drum").length;
for (let i=0 ; i < number ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    touchDown(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })

}
// adding keydown function
document.addEventListener("keydown", function(event)
{touchDown(event.key);
 buttonAnimation(event.key);
})

// adding sounds for each button
function touchDown(key){
  switch (key) {
    case "w":
    let tom1 = new Audio ('sounds/tom-1.mp3');
    tom1.play();
      break;
    case"a":
    let tom2 = new Audio ('sounds/tom-2.mp3');
    tom2.play();
    break;
    case"s":
    let tom3 = new Audio ('sounds/tom-3.mp3');
    tom3.play();
    break;
    case"d":
    let tom4 = new Audio ('sounds/tom-4.mp3');
    tom4.play();
    break;
    case"j":
    let snare = new Audio ('sounds/snare.mp3');
    snare.play();
    break;
    case"k":
    let crash = new Audio ('sounds/crash.mp3');
    crash.play();
    break;
    case"l":
    let kick = new Audio ('sounds/kick-bass.mp3');
    kick.play();
    break;
    default: concole.log(this.innerHTML);
  }
}

// adding animation
function buttonAnimation(currentKey){
let activeKey = document.querySelector("." + currentKey);
activeKey.classList.add("pressed");
setTimeout(function(){
  activeKey.classList.remove("pressed");
}, 100);
}
