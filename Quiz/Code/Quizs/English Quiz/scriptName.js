var choice = 0; 
var data = 1;
let num = 0;
let counter = 11;
document.querySelector(".questionNo").innerHTML = `Question ${data}/<span>5</span>`;



questions=[
    
    {
        "question":'The baby boy saw ..... in the mirror and started to cry.',
        "choices": [ 'itself',  'herself',  'himself',  'themselves'],
        "correct": "himself",
        "choice": ''
        
      },
    
    
    
        {
            "question":'A lot of trains ... late today due to the heavy storms.',
            "choices": [ 'are run', 'run', 'are running', 'ran'],
            "correct": "are running",
            "choice": ''
          },

          {
            "question":'... was a strong wind last night.',
            "choices": [ 'There', 'Here',  'This', 'That' ],
            "correct": "There",
            "choice":  ''
          },
            {
                "question":'The children thought they were ... when they saw the bull.',
                "choices": [ 'in a danger', 'in danger', 'in the danger','none of the above'],
                "correct": "in danger",
                "choice":''
            
                },
                {
                    "question":'You ... clean your teeth twice a day to avoid having problems.',
                    "choices":
                    [
                         'can', 'should','will','may'],
                      
                    
                    "choice":'',
                    "correct": "should",
                    }

    ]



count = 0
function next() {
    count++;


    if (data < 5) {
        data = data + 1;

    }

    if(choice == 1){
        questions[num].choice = document.getElementById("op1").value;
    }else if(choice == 2){
        questions[num].choice = document.getElementById("op2").value;
    }else if(choice == 3){
        questions[num].choice = document.getElementById("op3").value;
    }else if(choice == 4){
        questions[num].choice = document.getElementById("op4").value;
    }


   
    
    myJSON = JSON.stringify(questions[num]);
    localStorage.setItem("questions" + counter, myJSON);
    counter++
    num++;

    firstQuestion()
    
    document.querySelector(".questionNo").innerHTML = `Question ${data}/<span>5</span>`;
}

function prev() {
count--;

    if (data >= 2 && data <= 5) {
        --data;
        console.log(data);
    }
    lastQuestion()
  
    document.querySelector(".questionNo").innerHTML = `Question ${data}/<span>5</span>`;
    if(count<4){
        document.getElementById('next').style.display="inline-block"
    }
   
}





    var i=0;
    document.querySelector('.question').innerHTML=`${questions[0].question}<div class="answers " >
    <input type="submit"  class="options " onclick="returnAnswer1()" id="op1"  value=" ${questions[0].choices[0]}"  >
    <input type="submit"   class="options " onclick="returnAnswer2()" id="op2" value=" ${questions[0].choices[1]}"  >
    <br>
    <input type="submit"  class="options " onclick="returnAnswer3()"  id="op3"  value =" ${questions[0].choices[2]}">
    <input type="submit"  class="options "  onclick="returnAnswer4()" id="op4"  value =" ${questions[0].choices[3]} " >
</div>`; 
    function firstQuestion(){
    
        i++; 
        document.querySelector('.question').innerHTML=`${questions[i].question} <div class="answers " >
        <input type="submit" onclick="returnAnswer1()" class="options "  id="op1"  value=" ${questions[i].choices[0]}"  >
        <input type="submit" onclick="returnAnswer2()"  class="options "  id="op2" value="${questions[i].choices[1]} "  >
        <br>
        <input type="submit" onclick="returnAnswer3()"  class="options "  id="op3" value=" ${questions[i].choices[2]}"   >
        <input type="submit" onclick="returnAnswer4()" class="options "  id="op4"  value=" ${questions[i].choices[3]}"  >
    </div>`; 
          
       }

      
   
    function lastQuestion(){
    
        i--; 
        document.querySelector('.question').innerHTML=`${questions[i].question} <div class="answers " id="opt" >
        <input type="submit" class="options " onclick="returnAnswer1()" id="op1"  value="  ${questions[i].choices[0]} " >
        <input type="submit" class="options " onclick="returnAnswer2()" id="op2"  value="${questions[i].choices[1]} " >
        <br>
        <input type="submit" class="options " onclick="returnAnswer3()"  id="op3"  value=" ${questions[i].choices[2]}" >
        <input type="submit"  class="options " onclick="returnAnswer4()" id="op4"  value=" ${questions[i].choices[3]}" >
    </div>`; 
         
       }




function returnAnswer1(){
    choice = 1;
    document.querySelector("#op1").style.background='#98C1D9'
        document.querySelector("#op2").style.background='#E5E5E5'
        document.querySelector("#op3").style.background='#E5E5E5'
        document.querySelector("#op4").style.background='#E5E5E5'
}
function returnAnswer2(){
    choice = 2;
    document.querySelector("#op1").style.background='#E5E5E5'
        document.querySelector("#op2").style.background='#98C1D9'
        document.querySelector("#op3").style.background='#E5E5E5'
        document.querySelector("#op4").style.background='#E5E5E5'
}
function returnAnswer3(){
    choice = 3;
    document.querySelector("#op1").style.background='#E5E5E5'
        document.querySelector("#op2").style.background='#E5E5E5'
        document.querySelector("#op3").style.background='#98C1D9'
        document.querySelector("#op4").style.background='#E5E5E5'
}
function returnAnswer4(){
    choice = 4;
    document.querySelector("#op1").style.background='#E5E5E5'
        document.querySelector("#op2").style.background='#E5E5E5'
        document.querySelector("#op3").style.background='#E5E5E5'
        document.querySelector("#op4").style.background='#98C1D9'
}
       



        



function submit(){
    localStorage.setItem("sections1",true);
window.location.href('')
  

}




var moon=document.querySelector('.dark')
function dark(){
 moon.classList.toggle('active')
 let dark=document.querySelector('section')
 let moon1=document.querySelector('.moon')
 moon1.classList.toggle('active')

dark.classList.toggle('active')
let shape1=document.querySelector('.shape')
shape1.classList.toggle('active')
let shape2=document.querySelector('.shape2')
shape2.classList.toggle('active')
let mainL=document.querySelector('lll')
let logo=document.querySelector('.logo')
logo.classList.toggle()



}

document.getElementById("moon").onclick = function icon(){
    document.getElementById('logo').style.display='block';
    document.getElementById('logo2').style.display='none';}
    document.getElementById("sun").onclick = function icon(){
    document.getElementById('logo').style.display='none';
   document.getElementById('logo2').style.display='block';}
   