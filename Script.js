//variable
playRound=1
//reset function
function reset() {
  for (let i=0; i < 9; i++) {
    document.getElementsByClassName("cell")[i].innerHTML = ""
  }
}
//play function 
function play(clicked_id) {
  if (document.getElementById(clicked_id).innerHTML=="") { 
    document.getElementById(clicked_id).innerHTML=xOro()
    textBox()
    winCheck()
    playRound+=1
  }
}
// X or O
function xOro() {
  if(playRound%2==0) {
    return "O"
  }
  return "X"
}
// textbox 
function textBox(){
  if (xOro()=="X"){
    document.getElementById("textBox").innerHTML ="O's turn"
  }
  else{
    document.getElementById("textBox").innerHTML ="X's turn"

  }  
}
// win check 
function winCheck(){
  if (document.getElementById(1).innerHTML==document.getElementById(2).innerHTML 
  && document.getElementById(1).innerHTML==document.getElementById(3).innerHTML 
  && document.getElementById(3).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(1).innerHTML+"'s victory"}

  else if(document.getElementById(1).innerHTML==document.getElementById(4).innerHTML 
  && document.getElementById(1).innerHTML==document.getElementById(7).innerHTML 
  && document.getElementById(1).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(1).innerHTML+"'s victory"}

  else if(document.getElementById(1).innerHTML==document.getElementById(5).innerHTML 
  && document.getElementById(1).innerHTML==document.getElementById(9).innerHTML 
  && document.getElementById(1).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(1).innerHTML+"'s victory"}

  else if(document.getElementById(4).innerHTML==document.getElementById(5).innerHTML 
  && document.getElementById(4).innerHTML==document.getElementById(6).innerHTML 
  && document.getElementById(4).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(4).innerHTML+"'s victory"}

  else if(document.getElementById(2).innerHTML==document.getElementById(5).innerHTML 
  && document.getElementById(2).innerHTML==document.getElementById(8).innerHTML 
  && document.getElementById(2).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(2).innerHTML+"'s victory"}

  else if(document.getElementById(3).innerHTML==document.getElementById(5).innerHTML 
  && document.getElementById(3).innerHTML==document.getElementById(7).innerHTML 
  && document.getElementById(3).innerHTML !=="" ) 
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(3).innerHTML+"'s victory"}

  else if(document.getElementById(7).innerHTML==document.getElementById(8).innerHTML 
  && document.getElementById(7).innerHTML==document.getElementById(9).innerHTML 
  && document.getElementById(7).innerHTML !=="" ) 
  {alert("it's "+document.getElementById(7).innerHTML+"'s victory")}

  else if(document.getElementById(3).innerHTML==document.getElementById(6).innerHTML 
  && document.getElementById(3).innerHTML==document.getElementById(9).innerHTML 
  && document.getElementById(3).innerHTML !=="" )
  {document.getElementById("textBox").innerHTML =
  "it's "+document.getElementById(3).innerHTML+"'s victory"}

  else if(document.getElementById(1).innerHTML !=="" && document.getElementById(2).innerHTML !==""
  && document.getElementById(3).innerHTML !=="" && document.getElementById(4).innerHTML !==""
  && document.getElementById(5).innerHTML !==""&& document.getElementById(6).innerHTML !==""
  && document.getElementById(7).innerHTML !=="" && document.getElementById(8).innerHTML !==""
  && document.getElementById(9).innerHTML !=="")
  {document.getElementById("textBox").innerHTML =
  "it's a draw"}
}
//on-off switch for the overlay [Add Book form]
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
} 