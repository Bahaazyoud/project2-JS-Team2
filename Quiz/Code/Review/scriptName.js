data = [{}]
score = 0;

var Data ='';




function reviewResult() {
for(i = 0 ; i < 20 ; i++){
  if(i == 13){
    data[13] = JSON.parse(localStorage.getItem("questions14"));
  }else {
    string = localStorage.getItem("questions" + (i+1));
    data[i] = JSON.parse(string);
  }
 
    Data += '<div class="cards appear">'  + '<div class="cardsquestion">' + '<p>' + data[i].question + '</p>' + "</div>" +  '<div class="cardsanswer">' + '<p>' + data[i].choices[0]  + '</p>' + '<p>' + data[i].choices[1]  + '</p>' + '<p>' + data[i].choices[2]  + '</p>'+'<p>' + data[i].choices[3]  + '</p>'+ '</div>' +'</div>';
  }

  localStorage.setItem("score",score);
  document.getElementById("container").insertAdjacentHTML('beforeend' , Data);
}






  reviewResult();