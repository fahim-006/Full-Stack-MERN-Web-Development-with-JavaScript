function startGame(){
    document.getElementById('ans').innerHTML=""
     function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min;
     }
     let ans;
     ans = getRandomInt(1,10);
  
     let userInput=635477;
     let i = 3;
     let flag = 0;
     userInput = prompt(`Enter a number.(You have only 3 chances to guess the number)`);
    
        
     
     
     while(i>1){
         if(userInput ==  ans){
             flag = 1;
             break;
         }else if(userInput >  ans){
             userInput = prompt(`Correct answer is Smaller!.You have ${i-1} chances left`);     
         }else if(userInput <  ans){
             userInput = prompt(`Correct answer is Greater!.You have ${i-1} chances left`);   
         }
 
         i=i-1;
     }
     if(userInput ==  ans){
         flag = 1;
     }
    
     if(flag == 1){
         document.getElementById('ans').innerHTML = `You Won! Your Last Input = ${userInput} And Random Number = ${ans}`;
         document.getElementById('startButton').innerHTML = "Restart Game";
     }else{
         document.getElementById('ans').innerHTML = `You lose! Your Last Input = ${userInput} And Random Number = ${ans}`;
         document.getElementById('startButton').innerHTML = "Restart Game";   
     }
}