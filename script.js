function getComputerschoice(){
    let num=3;
    let computerchoice;
    let Random = Math.floor(Math.random()*3);
    
    return Random;
}


function compchoice(cschoice){

    if (cschoice==0){
        document.getElementById("CompResult").innerHTML = "Computer's choice :- ROCK";
    }
    else if (cschoice==1){
        document.getElementById("CompResult").innerHTML = "Computer's choice :- PAPER";
    }
    else if (cschoice==2){
        document.getElementById("CompResult").innerHTML = "Computer's choice :- SCISSOR";
    }
}

let Rock = document.querySelector(".Rock-btn");
let Paper = document.querySelector(".Paper-btn");
let Scissor = document.querySelector(".Scissor-btn");

Rock.addEventListener("click",playerselectrock)
function playerselectrock(){
    cschoice = getComputerschoice();
    if (cschoice==0){
        compchoice(cschoice);
        tied();
    }
    else if (cschoice==1){
        compchoice(cschoice);
        loose();
    }
    else if (cschoice==2){
        compchoice(cschoice);
        win();
    }

}

Paper.addEventListener("click",playerselectpaper)
function playerselectpaper(){
    cschoice = getComputerschoice();
    if (cschoice==0){
        compchoice(cschoice);
        win();
    }
    else if (cschoice==1){
        compchoice(cschoice);
        tied();
    }
    else if (cschoice==2){
        compchoice(cschoice);
        loose();
    }

}

Scissor.addEventListener("click",playerselectscissor)
function playerselectscissor(){
    cschoice = getComputerschoice();
    if (cschoice==0){
        compchoice(cschoice);
        loose();
    }
    else if (cschoice==1){
        compchoice(cschoice);
        win();
    }
    else if (cschoice==2){
        compchoice(cschoice);
        tied();
    }

}

function tied(){
    document.getElementById("Result").innerHTML = "You both tied";
}
function loose(){
    document.getElementById("Result").innerHTML = "You loose";
}
function win(){
    document.getElementById("Result").innerHTML = "You Win";
}

