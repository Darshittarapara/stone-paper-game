let computer_value;
function Games(){
computer_value=check()
console.log(computer_value)
let uservalue=document.getElementById('text').value 
uservalue=uservalue.toLowerCase() 
 if(uservalue==''){
     alert('please Enter anyone')
 }

else{
    if(computer_value=='stone'){
        if(uservalue=='paper'){
            document.getElementById("display").innerHTML='You win'
            document.getElementById("display").style.color='green'
            document.getElementById("display").style.fontWeight='bolder'
           
        }
        else if(uservalue=='scissors'){
            document.getElementById("display").innerHTML='You lose'
            document.getElementById("display").style.color='red'
        }
        else {
            document.getElementById("display").innerHTML='Draw'
            document.getElementById("display").style.color='white'   
        }
    }
    
    if(computer_value=='paper'){
        if(uservalue=='stone'){
            document.getElementById("display").innerHTML='You lose'
            document.getElementById("display").style.color='red'
        }
        else if(uservalue=='scissors'){
            document.getElementById("display").innerHTML='You win'
            document.getElementById("display").style.color='green'
            document.getElementById("display").style.fontWeight='bolder'
        }
        else {
            document.getElementById("display").innerHTML='draw'
            document.getElementById("display").style.color='white'
         
        }
}

}


if(computer_value=='scissors'){
    if(uservalue=='paper'){
        document.getElementById("display").innerHTML='You lose'
        document.getElementById("display").style.color='red'
    }
    else if(uservalue=='stone'){
        document.getElementById("display").innerHTML='You win'
        document.getElementById("display").style.color='green'
        document.getElementById("display").style.fontWeight='bolder'
    }
    else {
        document.getElementById("display").innerHTML='draw'
        document.getElementById("display").style.color='white'
    }
}
}







let computer_input
function check(){
    let result =Math.random()
    console.log(result)
   if(result<=0.3){
     computer_input='stone'
     return computer_input
   }   
   else if(result>0.3 && result<0.7){
    computer_input='paper'
    return computer_input
  }  
  else if(result>=0.7 && result<=1){
    computer_input='scissors'
    return computer_input
  }   
}
