var dice1 = Math.floor(Math.random() * 6) + 1;;
var dice2 = Math.floor(Math.random() * 6) + 1;;
var total = dice1 + dice2;
var score = 0;
var x = 0;
document.getElementById("evenButton").addEventListener("click", function(){
    if (total == 2 || total == 4 || total == 6 || total == 8 || total == 10 || total == 12)
    {
        document.getElementById("comments").value="You guessed right!"; 
        document.getElementById("tries").value=total;
        if (x == 0)
        {
        score = score + 1;
        x = 1;
        }
        document.getElementById("score").value=score;  
    } 
    else
    {
        document.getElementById("comments").value="You guessed wrong!";  
        document.getElementById("tries").value=total;  
        score = 0;
        document.getElementById("score").value=0;  
    }
    if (dice1 == 1)
    {
        document.getElementById("Dice1").src="media/diceOne.webp";  
    }
    else if (dice1 == 2)
    {
        document.getElementById("Dice1").src="media/diceTwo.webp";   
    } 
    else if (dice1 == 3)
    {
        document.getElementById("Dice1").src="media/diceThree.png";   
    }
    else if (dice1 == 4)
    {
        document.getElementById("Dice1").src="media/diceFour.webp";   
    }
    else if (dice1 == 5)
    {
        document.getElementById("Dice1").src="media/diceFive.jpg";   
    }
    else if (dice1 == 6)
    {
        document.getElementById("Dice1").src="media/diceSix.Png";   
    }
    if (dice2 == 1)
    {
        document.getElementById("Dice2").src="media/diceOne.webp";  
    }
    else if (dice2 == 2)
    {
        document.getElementById("Dice2").src="media/diceTwo.webp";   
    } 
    else if (dice2 == 3)
    {
        document.getElementById("Dice2").src="media/diceThree.png";   
    }
    else if (dice2 == 4)
    {
        document.getElementById("Dice2").src="media/diceFour.webp";   
    }
    else if (dice2 == 5)
    {
        document.getElementById("Dice2").src="media/diceFive.jpg";   
    }
    else if (dice2 == 6)
    {
        document.getElementById("Dice2").src="media/diceSix.Png";   
    }
});
document.getElementById("oddButton").addEventListener("click", function(){
    if (total == 3 || total == 5 || total == 7 || total == 9 || total == 11)
    {
        document.getElementById("comments").value="You guessed right!"; 
        document.getElementById("tries").value=total;
        if (x == 0)
        {
        score = score + 1;
        x = 1;
        }
        document.getElementById("score").value=score;
    } 
    else
    {
        document.getElementById("comments").value="You guessed Wrong!";  
        document.getElementById("tries").value=total; 
        score = 0; 
        document.getElementById("score").value=0; 
    }
    if (dice1 == 1)
    {
        document.getElementById("Dice1").src="media/diceOne.webp";  
    }
    else if (dice1 == 2)
    {
        document.getElementById("Dice1").src="media/diceTwo.webp";   
    } 
    else if (dice1 == 3)
    {
        document.getElementById("Dice1").src="media/diceThree.png";   
    }
    else if (dice1 == 4)
    {
        document.getElementById("Dice1").src="media/diceFour.webp";   
    }
    else if (dice1 == 5)
    {
        document.getElementById("Dice1").src="media/diceFive.jpg";   
    }
    else if (dice1 == 6)
    {
        document.getElementById("Dice1").src="media/diceSix.Png";   
    }
    if (dice2 == 1)
    {
        document.getElementById("Dice2").src="media/diceOne.webp";  
    }
    else if (dice2 == 2)
    {
        document.getElementById("Dice2").src="media/diceTwo.webp";   
    } 
    else if (dice2 == 3)
    {
        document.getElementById("Dice2").src="media/diceThree.png";   
    }
    else if (dice2 == 4)
    {
        document.getElementById("Dice2").src="media/diceFour.webp";   
    }
    else if (dice2 == 5)
    {
        document.getElementById("Dice2").src="media/diceFive.jpg";   
    }
    else if (dice2 == 6)
    {
        document.getElementById("Dice2").src="media/diceSix.Png";   
    }
});
document.getElementById("resetButton").addEventListener("click", function(){
    dice1 = Math.floor(Math.random() * 6) + 1;;
    dice2 = Math.floor(Math.random() * 6) + 1;;
    total = dice1 + dice2;
    x = 0;
    document.getElementById("comments").value=""; 
    document.getElementById("tries").value="";
});