
var i = 0;
let counter = 16;

start_btn = document.getElementById("start-btn");
rules_container = document.getElementById("rules-container");
quit_btn = document.getElementById("quit-btn");
Continue_btn = document.getElementById("Continue-btn");
quit_btn1 = document.getElementById("quit-btn1");
Continue_btn1 = document.getElementById("Continue-btn1");
answer = document.getElementsByClassName("answer");
quit_btn2 = document.getElementById("quit-btn2");
Continue_btn2 = document.getElementById("Continue-btn2");
quit_btn3 = document.getElementById("quit-btn3");
Continue_btn3 = document.getElementById("Continue-btn3");
quit_btn4 = document.getElementById("quit-btn4");
Continue_btn4= document.getElementById("Continue-btn4");
quit_btn5 = document.getElementById("quit-btn5");
submit = document.getElementById("submit-btn5");

flag = false;
selected = false;
document.querySelector("body").addEventListener("click" , function(event){

    id = event.target.id;
    
   
           
        if(id[0] == "q" && id[3] == 'a' ){
            if(flag){

            document.getElementById(temp).style.background = "#E5E5E5";
            }

            document.getElementById(id).style.background = "#EC8757";
            
            flag = true;
            index = Number(id[4]);
            temp = id;
            temp[4] = index
            selected = true;
        }
    
        if(id.indexOf("Continue") >= 0 && id.length == 13){
            num = Number(id[12]) - 1;
            qustions[num].choice = document.getElementById(temp).innerHTML;
            myJSON = JSON.stringify(qustions[num]);
            localStorage.setItem("questions" + (counter), myJSON);
            selected = false;
            counter++;
            
            
        }else if(id.indexOf("submit") >= 0){
            num = 4;
            qustions[num].choice = document.getElementById(temp).innerHTML;
            myJSON = JSON.stringify(qustions[num]);
            localStorage.setItem("questions20", myJSON);
        }


        
       



})

quistion1 = false , quistion2 = false , quistion3 = false , quistion4 = false , quistion5 = false;
finish = false;
quit_btn.addEventListener("click" , function(){
    rules_container.classList.remove("active");
    start_btn.classList.remove("disable-btn");
})

start_btn.addEventListener("click" , function(){

if(!finish){
    if(quistion5){
        document.getElementsByClassName("question-5")[0].classList.add("active");
    }
    else if(quistion4){
        document.getElementsByClassName("question-4")[0].classList.add("active");
    }
    else if(quistion3){
        document.getElementsByClassName("question-3")[0].classList.add("active");
    } else if(quistion2){
        document.getElementsByClassName("question-2")[0].classList.add("active");
    } else if(quistion1){
        document.getElementsByClassName("question-1")[0].classList.add("active");
    } else{
        rules_container.classList.add("active");
        start_btn.classList.add("disable-btn");
    }

}
})

Continue_btn.addEventListener("click" , function(){
    quistion1 = true; 
    start_btn.innerHTML = "Resume"
    document.getElementsByClassName("question-1")[0].classList.add("active");
    rules_container.classList.remove("active");
});

quit_btn1.addEventListener("click" , function(){
    document.getElementsByClassName("question-1")[0].classList.remove("active");
    start_btn.classList.remove("disable-btn");
})

Continue_btn1.addEventListener("click" , function(){
    quistion2 = true; 
    if(selected){
    document.getElementsByClassName("question-1")[0].classList.remove("active");
    document.getElementsByClassName("question-2")[0].classList.add("active");}
});

quit_btn2.addEventListener("click" , function(){
    document.getElementsByClassName("question-2")[0].classList.remove("active");
    start_btn.classList.remove("disable-btn");
})

Continue_btn2.addEventListener("click" , function(){
    quistion3 = true; 
    if(selected){
    document.getElementsByClassName("question-2")[0].classList.remove("active");
    document.getElementsByClassName("question-3")[0].classList.add("active");}
});

quit_btn3.addEventListener("click" , function(){
    document.getElementsByClassName("question-3")[0].classList.remove("active");
    start_btn.classList.remove("disable-btn");
})

Continue_btn3.addEventListener("click" , function(){
    quistion4 = true; 
    if(selected){
    document.getElementsByClassName("question-3")[0].classList.remove("active");
    document.getElementsByClassName("question-4")[0].classList.add("active");}
});

quit_btn4.addEventListener("click" , function(){
    document.getElementsByClassName("question-4")[0].classList.remove("active");
    start_btn.classList.remove("disable-btn");
})

Continue_btn4.addEventListener("click" , function(){
    quistion5 = true; 
    if(selected){
    document.getElementsByClassName("question-4")[0].classList.remove("active");
    document.getElementsByClassName("question-5")[0].classList.add("active");}
});

quit_btn5.addEventListener("click" , function(){
    document.getElementsByClassName("question-5")[0].classList.remove("active");
    start_btn.classList.remove("disable-btn");
})
submit.addEventListener("click" , function(){
    finish = true;
    document.getElementById("main-btn").classList.add("active-btn");
    document.getElementsByClassName("question-5")[0].classList.remove("active");
   
    
    
});

document.getElementById("main-btn").addEventListener("click" , function(){
    localStorage.setItem("sections2",true)
})



qustions = [
    {
        "question" : "Which number should come next in the pattern? 37, 34, 31, 28" ,
        "choices" : [
            "25",
            "23",
            "15",
            "27"
        ] ,
        "correct" : "25",
        "choice" : "",
    },{
        "question" : "Find the answer that best completes the analogy: Book is to Reading as Fork is to:" ,
        "choices" : [
            "drawing",
            "writing",
            "stirring",
            "eating"
        ] ,
        "correct" : "eating",
        "choice" : "",
    },{
        "question" : "What number best completes the analogy: 8:4 as 10:" ,
        "choices" : [
            "3",
            "7",
            "24",
            "5"
        ] ,
        "correct" : "5",
        "choice" : "",
    } , 
    {
        "question" : "Sequential reasoning is often tested in IQ exams. 3, 7, 13, 21, 31. What number comes next in the sequence?" ,
        "choices" : [
            "37",
            "45",
            "39",
            "43"
        ] ,
        "correct" : "43",
        "choice" : "",
    },{
        "question" : "A, B, D, G, K. Which letter comes next in the sequence?" ,
        "choices" : [
            "P",
            "N",
            "M",
            "O"
        ] ,
        "correct" : "P",
        "choice" : "",
    }
]

