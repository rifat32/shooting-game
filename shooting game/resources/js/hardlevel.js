document.getElementById("game-stop").style.display= "none"; 
function hide1(){
    
    document.getElementById("click1").style.visibility = "hidden";
                                                      
                                                                          
}
function hide2(){
    
      document.getElementById("click2").style.visibility = "hidden";                                                 
                                                                          
}
function hide3(){
    
      document.getElementById("click3").style.visibility = "hidden";                                                 
                                                                          
}
function hide4(){
    
      document.getElementById("click4").style.visibility = "hidden";                                                 
                                                                          
}
function hide5(){
    
      document.getElementById("click5").style.visibility = "hidden";                                                 
                                                                          
}
function hide6(){
    
      document.getElementById("click6").style.visibility = "hidden";                                                 
                                                                          
}
function hide7(){
    
      document.getElementById("click7").style.visibility = "hidden";                                                 
                                                                          
}
function hide8(){
    
      document.getElementById("click8").style.visibility = "hidden";                                                 
                                                                          
}
function startTime() {
    /*randoms*/
    var x, y, a, b , c, d, e , f ;
 x = Math.floor(Math.random() * 10) + 1;
   y = Math.floor(Math.random() * 15) + 1;
    a = Math.floor(Math.random() * 20) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 15) + 1;
      d = Math.floor(Math.random() * 20) + 1;
     e = Math.floor(Math.random() * 10) + 1;
    f = Math.floor(Math.random() * 15) + 1;
    /*visibility*/
    if( x == 7 ){
        document.getElementById("click1").style.visibility = "visible";  
        
    }
    if( y == 7 ){
        document.getElementById("click2").style.visibility = "visible";  
       
    }
   if( a == 7 ){
        document.getElementById("click3").style.visibility = "visible";  
       
    }
    if( b == 7 ){
        document.getElementById("click4").style.visibility = "visible";  
       
    }
     if( c == 7 ){
        document.getElementById("click5").style.visibility = "visible";  
       
    }
      if( d == 7 ){
        document.getElementById("click6").style.visibility = "visible";  
       
    }
    if( e == 7 ){
        document.getElementById("click7").style.visibility = "visible";  
       
    }
     if( f == 7 ){
        document.getElementById("click8").style.visibility = "visible";  
       
    }
  
  
  var t = setTimeout(startTime, 500);
   
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

   
   function counti(){
var x = document.getElementById("score").innerHTML;
   var z = parseInt(x);
    var m = z+5;
    document.getElementById("score").innerHTML = m;
    
}
function hide9(){
         document.getElementById("game-box").style.display= "none"; 
   
    document.getElementById("game-stop").style.display= "block"; 
}

  
  




