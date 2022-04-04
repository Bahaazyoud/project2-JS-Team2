var choice = 0;
document.getElementById('Finish').style.display = 'none';

questions = [
  {
      "question" : "How to insert a comment that has more than one line?" ,
      "choices" : [
          "//more than one line comment//",
          "/*more than one line comment*/",
          "/---more than one line comment---/",
          "/!-more than one line comment-!/"
      ] ,
      "correct" : "//more than one line comment//",
      "choice" : "",
  },{
      "question" : "How do you write 'Hello World' in an alert box?" ,
      "choices" : [
          "msg('Hello World');",
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "alert('Hello World');"
      ] ,
      "correct" : "alert('Hello World');",
      "choice" : "",
  },{
      "question" : "How do you create a function in JavaScript?" ,
      "choices" : [
          "function myFunction()",
          "function: myFunction()",
          "function= myFunction()",
          "function myFunction{}"
      ] ,
      "correct" : "function myFunction()",
      "choice" : "",
  } , 
  {
      "question" : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?" ,
      "choices" : [
          "if(i < > 5)",
          "if i=! 5 then",
          "if i <> 5",
          "if(i!=5)"
      ] ,
      "correct" : "if(i!=5)",
      "choice" : "",
  },{
      "question" : "What is the correct HTML for adding a background color?" ,
      "choices" : [
          "< cody bg='yellow' >",
          "< background>; yellow </background >",
          "< body style ='background-color:yeloow;' >",
          "< background:yellow >"
      ] ,
      "correct" : "< body style ='background-color:yeloow;' >",
      "choice" : "",
  },{
    "question" : "How can you make a numbered list?" ,
    "choices" : [
        "< ul >",
        "< dl >",
        "< ol >",
        "< list >"
    ] ,
    "correct" : "< ol >",
    "choice" : "",
},{
  "question" : "What is the correct HTML for making a checkbox?" ,
  "choices" : [
      "< input type='checkbox' >",
      "< checkbox >",
      "< input type='check' >",
      "< check >"
  ] ,
  "correct" :  "< input type='checkbox' >",
  "choice" : "",
},{
  "question" : "Where in an HTML document is the correct place to refer to an external style sheet?" ,
  "choices" : [
      "In the body",
      "At the end of the document",
      "In the < head > section",
      "In the style tag"
  ] ,
  "correct" :  "In the < head > section" ,
  "choice" : "",
},{
  "question" : "How do you select elements with class name 'test'?" ,
  "choices" : [
      "#test",
      ".test",
      "test",
      "*test"
  ] ,
  "correct" : ".test",
  "choice" : "",
},{
  "question" : "What does CSS stand for?" ,
  "choices" : [
      "Cascading Style Sheet",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets"
  ] ,
  "correct" : "Cascading Style Sheet",
  "choice" : "",
}
]


//////**********************sun moon**************************** */

document.querySelector(".dark").onclick = function icon( ) {
  let moon = document.querySelector('#moon');
  let sun = document.querySelector('#sun');
  let b1 = document.querySelector('.border1');
  let b2 = document.querySelector('.cir1')
  b2.classList.toggle('active');
  b1.classList.toggle('active');
  moon.classList.toggle('active');
  sun.classList.toggle('active');

}

document.getElementById("moon").onclick = function icon(){
  document.getElementById('logo').style.display='block';
  document.getElementById('logo1').style.display='none';
}

document.getElementById("sun").onclick = function icon(){
  document.getElementById('logo').style.display='none';
  document.getElementById('logo1').style.display='block';
}

// *********************array of object********



var num = 0;
counter = num + 1;
btn = document.getElementById("nxt").addEventListener("click",function(){

  if(counter == 9){
    document.getElementById("nxt").innerHTML = "Submet >>";
  }

  if(counter == 10){
    window.location.href = "../../Welcome Page/index.html";
    localStorage.setItem("sections3",true)
  }

  if(choice == 1){
    questions[num].choice = document.getElementById("btn1").innerHTML;
  }else if( choice == 2){
    questions[num].choice = document.getElementById("btn2").innerHTML;
  }else if(choice == 3){
    questions[num].choice = document.getElementById("btn3").innerHTML;
  }else if(choice == 4){
    questions[num].choice = document.getElementById("btn4").innerHTML;
  }
  myJSON = JSON.stringify(questions[num]);
  localStorage.setItem("questions" + counter, myJSON);
  num++;
  counter++;

  document.getElementById("Question").innerHTML = questions[num].question;
  document.getElementById("btn1").innerHTML = questions[num].choices[0];
  document.getElementById("btn2").innerHTML = questions[num].choices[1];
  document.getElementById("btn3").innerHTML = questions[num].choices[2];
  document.getElementById("btn4").innerHTML = questions[num].choices[3];
  document.getElementById("Q").innerHTML = "Q" + counter + "/10";
})


btn = document.getElementById("pre").addEventListener("click",function(){

counter--;
num--;
console.log(num)
  document.getElementById("Question").innerHTML = questions[num].question;
document.getElementById("btn1").innerHTML = questions[num].choices[0];
document.getElementById("btn2").innerHTML = questions[num].choices[1];
document.getElementById("btn3").innerHTML = questions[num].choices[2];
document.getElementById("btn4").innerHTML = questions[num].choices[3];
document.getElementById("Q").innerHTML = "Q" + counter + "/10";
})






//******************************buttons*****************

function btn1() {
  choice = 1;
  document.getElementById('btn1').style.background = '#ec8657b9';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';
  

}

 function btn2() {
  choice = 2;
  document.getElementById('btn2').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';
}
function btn3() {
  choice = 3;
  document.getElementById('btn3').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';

}
function btn4() {
  choice = 4;
  document.getElementById('btn4').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';

  }
  ///////////////////local storage////////////////////////

