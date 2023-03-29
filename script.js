function getComputerschoice(){
    let num=3;
    let computerchoice;
    let Random = Math.floor(Math.random()*3);
    if (Random==0){
        computerchoice = "Rock";
    }
    else if (Random == 1){
        computerchoice = "Paper";
    }
    else{
        computerchoice = "Scissor"
    }
    return "Computer choose" + computerchoice;
}


let Rock = document.querySelector(".Rock-btn");
Rock.addEventListener("click",playerselectrock)
function playerselectrock(){
    ;

}

