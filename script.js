var turn= true;
var pxChoice;
var pzChoice;
//Functia 1
let alege1 = function(){
    if(turn === true){
        document.getElementsByClassName("unu")[0].innerText =  "❌"
       turn = false;
    }else{
        document.getElementsByClassName("unu")[0].innerText =  "⭕️"
        turn = true;
    }
    pxChoice = turn;
   
    
}


//Functia 2
let alege2 = function(){
    if(turn === false){
        document.getElementsByClassName("doi")[0].innerText =  "⭕️"
        turn = true;
    }else{
        document.getElementsByClassName("doi")[0].innerText =  "❌"
        turn = false;
    }
    pzChoice = turn;
   
}

//Functia 3
let alege3 = function(){
    if(turn === true){
        document.getElementsByClassName("trei")[0].innerText =  "❌"
        turn = false;
    }else{
        document.getElementsByClassName("trei")[0].innerText =  "⭕️"
        turn = true;
    }
    pxChoice = turn;
   
}

//Functia 4
let alege4 = function(){
    if(turn === false){
        document.getElementsByClassName("patru")[0].innerText =  "⭕️"
      turn = true;
    }else{
        document.getElementsByClassName("patru")[0].innerText =  "❌"
       turn = false;
    }
    pzChoice = turn;
}

//Functia 5
let alege5 = function(){
    if(turn === true){
        document.getElementsByClassName("cinci")[0].innerText =  "❌"
       turn = false;
    }else{
        document.getElementsByClassName("cinci")[0].innerText =  "⭕️"
        turn = true;
    }
    pxChoice = turn;
}

//Functia 6
let alege6 = function(){
    if(turn === false){
        document.getElementsByClassName("sase")[0].innerText =  "⭕️"
       turn = true;
      
    }else{
        document.getElementsByClassName("sase")[0].innerText =  "❌"
        turn = false;
    }
    pzChoice = turn;
}

//Functia 7
let alege7 = function(){
    if(turn === true){
        document.getElementsByClassName("sapte")[0].innerText =  "❌"
        turn = false;
    }else{
        document.getElementsByClassName("sapte")[0].innerText =  "⭕️"
      turn = true;
    }
    pxChoice = turn;
}

//Functia 8
let alege8 = function(){
    if(turn === false){
        document.getElementsByClassName("opt")[0].innerText =  "⭕️"
        turn = true;
      
    }else{
        document.getElementsByClassName("opt")[0].innerText =  "❌"
       turn = false;
    }
    pzChoice = turn;
}

//Functia 9
let alege9 = function(){
    if(turn === true){
        document.getElementsByClassName("noua")[0].innerText =  "❌"
        turn = false;
    }else{
        document.getElementsByClassName("noua")[0].innerText =  "⭕️"
        turn = true;
    }
    pxChoice = turn;
  
}


//.........................................................................


