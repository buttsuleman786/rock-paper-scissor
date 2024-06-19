const rockbutton=document.querySelector(".rock-button");
const paperbutton=document.querySelector(".paper-button");
const scissorbutton=document.querySelector(".scissor-button");
const rockimage = getComputedStyle(document.querySelector(".rock-image")).backgroundImage;
const paperimage = getComputedStyle(document.querySelector(".paper-image")).backgroundImage;
const scissorimage = getComputedStyle(document.querySelector(".scissor-image")).backgroundImage;
const playerChoiceDiv = document.querySelector(".player-choice");
const enemyChoiceDiv = document.querySelector(".enemy-choice");


const randomArray = [rockimage, paperimage, scissorimage];



rockbutton.addEventListener("click",function()
 {
    console.log(" rock button clicked");
    playerChoiceDiv.style.backgroundImage = rockimage; 
    const randomNumber = Math.floor(Math.random() * 3);
    enemyChoiceDiv.style.backgroundImage = randomArray[randomNumber];
    resultcheck();

})

paperbutton.addEventListener("click",function()
 {
    console.log(" paper button clicked");
    playerChoiceDiv.style.backgroundImage = paperimage; 
    const randomNumber = Math.floor(Math.random() * 3);
    enemyChoiceDiv.style.backgroundImage = randomArray[randomNumber];
    resultcheck();
})

scissorbutton.addEventListener("click",function()
 {
    console.log(" rock button clicked");
    playerChoiceDiv.style.backgroundImage = scissorimage; 
    const randomNumber = Math.floor(Math.random() * 3);
    enemyChoiceDiv.style.backgroundImage = randomArray[randomNumber];
    resultcheck();
})

function resultcheck() {
    if (playerChoiceDiv.style.backgroundImage == enemyChoiceDiv.style.backgroundImage) {
        setTimeout(function() {
            alert("Try Again");
        }, 250);
    }
    else if (playerChoiceDiv.style.backgroundImage == rockimage && enemyChoiceDiv.style.backgroundImage == scissorimage)
    {
        setTimeout(function() {
            alert("You win");
        }, 250);
    }
    else if (playerChoiceDiv.style.backgroundImage == paperimage && enemyChoiceDiv.style.backgroundImage == rockimage)
    {   
        setTimeout(function() {
            alert("You win");
        }, 250);
    }
    else if (playerChoiceDiv.style.backgroundImage == scissorimage && enemyChoiceDiv.style.backgroundImage == paperimage)
    {
           setTimeout(function() {
            alert("You win");
        }, 250);
    }
    else 
    {
        setTimeout(function() {
            alert("You lose");
        }, 250);
    }
}