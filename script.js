let x = Math.trunc(Math.random()*20 )+1;

let guess

let score=20

let highScore=20

let delayInMilliseconds = 3000;

btnCheck=document.getElementById('btn-check')

btnAgain=document.getElementById('btn-again')




document.querySelector('.number').textContent= "?"
document.querySelector('.score').textContent="Score: "+score
document.querySelector('.high-score').textContent="HighScore :"+highScore


console.log(x)


if(score > 1){
    btnCheck.addEventListener('click',()=>{
        document.querySelector('.number').textContent= x
        console.log("Clicked")
        document.getElementById('card-1').style.background="white"
        console.log(document.getElementById('guess').value)
        if(Number(document.getElementById('guess').value) === x){
            console.log("Match")
            
            
                document.querySelector('.output').textContent="Correct!!!"
                document.getElementById('card-1').style.background="green"
                document.body.style.backgroundImage="linear-gradient(to right, green, white)"
                console.log("Count")

            
            
            
        }
    
        else if((Number(document.getElementById('guess').value) > x)){
            document.querySelector('.output').textContent="Too High";
            score--;
            document.querySelector('.score').textContent="Score: "+score
            document.getElementById('card-1').style.background="pink"
            document.body.style.backgroundImage="linear-gradient(to right, pink, white)"

            
    
    
        }
    
        else if((Number(document.getElementById('guess').value) < x)){
            document.querySelector('.output').textContent="Too Low";
            score--;
            document.querySelector('.score').textContent="Score: "+score
            document.getElementById('card-1').style.background="red"
            document.body.style.backgroundImage="linear-gradient(to right, red, white)"

            
            
            
    
        }
        if(Number(document.getElementById('guess').value) > 20 || Number(document.getElementById('guess').value) < 1){
            console.log("Match")
            document.querySelector('.output').textContent="Please enter a value between 1 and 20"

        }


        setTimeout(()=>{
            init()
            document.querySelector('.number').textContent= "?"
            
          }, delayInMilliseconds);
    
    })

}    





function init(){
    document.body.style.backgroundImage="linear-gradient(to right, blue, violet)"
    document.getElementById('guess').value=" "
    document.getElementById('card-1').style.background="white"
    document.querySelector('.score').textContent="Score: "+score 

}

btnAgain.addEventListener('click',()=>{
    console.log("click-again")
    score=20
    init()
})