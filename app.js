let userScore = 1;
let compScore = 1;
const choices = document.querySelectorAll(".choice");
let para = document.querySelector("#msg");
let userScore1 = document.querySelector('#user-score');
let compScore2 = document.querySelector("#comp-score");


const compChoice = ()=>{
     let arr =  ["rock","paper","scissor"]
     let ranIdx = Math.floor(Math.random() * 3)
     return arr[ranIdx];
}


 choices.forEach((input)=>{
    input.addEventListener("click",()=>{
      const userChoice =  input.getAttribute("id");
      const randCompChoice = compChoice();
      compChoice();

         if(userChoice === randCompChoice){
             draw()
         }else{
            let userwinner = true;

             if(userChoice === "rock" && randCompChoice === "paper" ){
                userwinner = false;
                
             }else if(userChoice === "paper" && randCompChoice === "rock") {
                userwinner = true;
                
            }else if(userChoice === "paper" && randCompChoice === "scissor"){
                userwinner = false;
                
             }else if(userChoice === "rock" && randCompChoice === "scissor"){
                userwinner = true;
                
             }else if(userChoice === "scissor" && randCompChoice === "rock"){
                userwinner = false;
                
             }else if(userChoice === "scissor" && randCompChoice === "paper"){
                userwinner = true;
                
             }else{
                userwinner = true;
              
             }
    
    
             if(userwinner === true){
                para.innerText = `Congratulation! your '${userChoice}' beats '${randCompChoice}'`
                para.style.backgroundColor = "green";
                userScore1.innerText = userScore++;
            }else{
                para.innerText = `oops! ,comp '${randCompChoice}' beats your '${userChoice}'`
                para.style.backgroundColor = "red";
                compScore2.innerText = compScore++;
            }
         }
       

    })

    let draw = ()=>{
        para.innerText = `Game is been draw!`
        para.style.backgroundColor = "brown"

}})

