const mole=document.querySelector('#mole');
const start=document.querySelector('#start');
let score=0;
const scoretable=document.querySelector('#score');
const table= document.querySelector('.container');
const restart=document.querySelector('#restart')
let gameend=false;

function generateMole(){
    let rand=Math.floor(Math.random() * 9)+1;
    let active=document.querySelector('#h'+rand);
    if(!gameend){
    active.appendChild(mole);}

    mole.addEventListener('click',scoreMore);    
}



function scoreMore(){
    score++;
    scoretable.innerText=score;
    
}

function timer(){
    timeLeft = 30;

    function countdown() {
        timeLeft--;
        document.querySelector(".counter").innerHTML = String( timeLeft );
        if (timeLeft > 0) {
            setTimeout(countdown, 1000);
        }
        if(timeLeft==0){
            endGame();
        }
    };

    setTimeout(countdown, 1000);
            
}

function endGame(){

    table.innerHTML='<div class="gameover"><b>GAME OVER</b><br><p>SCORE: ' + score + '</p></div>';
    score=0;
    gameend=true;
}

function game(){
    
    document.getElementById("start").disabled = true;
    timer();
    if(!gameend){
    setInterval(generateMole, Math.floor(Math.random() * 500)+600);}
    
    
}


start.addEventListener('click',game);


