

let random_val = Math.trunc((Math.random() * 20)+1)
// document.querySelector('.random_value').textContent = random_val 

let checkbtn = document.querySelector('.btn-success');
let playagain_btn = document.querySelector('.btn-warning');
let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highScore').textContent;
let result_text = document.querySelector('.result_text');
let container = document.querySelector('.container');
let blink = document.querySelector('.blink');        

setInterval( function(){
    blink.style.opacity  = (blink.style.opacity == 0 ? 1 : 0)            
},1000)


//Check button code start

checkbtn.addEventListener('click',function(){
    
    let input_number = document.querySelector('.input_number').value; 

    if(!input_number){
        result_text.textContent = 'please enter a valid number';
        container.style.backgroundColor = 'orange'   
    }else{
        if(input_number == random_val){
            result_text.textContent = 'congrats you win';
            document.querySelector('.highScore').textContent = score;
            container.style.backgroundColor = 'green'
        }else if(input_number > random_val){
            result_text.textContent = 'Too High';            
            score = score -1;
            if(score <= 0 ){
                score = 0
            }
            document.querySelector('.score').textContent = score;
            container.style.backgroundColor = 'red'             
        }else if(input_number < random_val){
            result_text.textContent = 'Too Low';
            score = score -1;
            if(score <= 0 ){
                score = 0
            }
            document.querySelector('.score').textContent = score; 
            container.style.backgroundColor = 'orange'            
        }    
    }


})


//Play button code start

playagain_btn.addEventListener('click',function(){

    let random_val = Math.trunc((Math.random() * 20)+1)
    document.querySelector('.input_number').value = ''
    container.style.backgroundColor = '#1246a352'   
    document.querySelector('.score').textContent = 20; 
    document.querySelector('.highScore').textContent = 0;
    result_text.textContent = 'Start Guessing';

})
