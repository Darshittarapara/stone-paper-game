let computer_value;
function Games(a) {
    computer_value = check()

    let  uservalue= document.getElementsByClassName("userinput")[a].value
    uservalue = uservalue.toLowerCase()
    if (uservalue == '') {
        alert('please choose anyone');
    }
    else {
        if (computer_value == 'stone') {

            document.getElementById("displays").innerHTML = computer_value
            if (uservalue == 'paper') {

                document.getElementById("display").innerHTML = 'You win'
                document.getElementById("display").style.color = 'green'
                document.getElementById("display").style.fontWeight = 'bolder'

            }
            else if (uservalue == 'scissors') {
                document.getElementById("display").innerHTML = 'You lose'
                document.getElementById("display").style.color = 'red'
            }
            else if(uservalue==computer_value){
                document.getElementById("display").innerHTML = 'draw'
                document.getElementById("display").style.color = 'white'

            }
            else {
                document.getElementById("display").innerHTML = 'Not Correct'
            }
        }

        if (computer_value == 'paper') {
            document.getElementById("displays").innerHTML = computer_value
            if (uservalue == 'stone') {
                document.getElementById("display").innerHTML = 'You lose'
                document.getElementById("display").style.color = 'red'
            }
            else if (uservalue == 'scissors') {
                document.getElementById("display").innerHTML = 'You win'
                document.getElementById("display").style.color = 'green'
                document.getElementById("display").style.fontWeight = 'bolder'
            }
            else if(uservalue==computer_value){
                document.getElementById("display").innerHTML = 'draw'
                document.getElementById("display").style.color = 'white'

            }
            else {
                document.getElementById("display").innerHTML = 'Not Correct'
            }
        }

    }


    if (computer_value == 'scissors') {
         document.getElementById("displays").innerHTML = computer_value
        if (uservalue == 'paper') {
            document.getElementById("display").innerHTML = 'You lose'
            document.getElementById("display").style.color = 'red'
        }
        else if (uservalue == 'stone') {
            document.getElementById("display").innerHTML = 'You win'
            document.getElementById("display").style.color = 'green'
            document.getElementById("display").style.fontWeight = 'bolder'
        }
        else if(uservalue==computer_value){
            document.getElementById("display").innerHTML = 'draw'
            document.getElementById("display").style.color = 'white'

        }
        else {
            document.getElementById("display").innerHTML = 'Not Correct'
        }
    }
}







let computer_input
function check() {
    let result = Math.random()
    console.log(result)
    if (result <= 0.3) {
        computer_input = 'stone'
        return computer_input
    }
    else if (result > 0.3 && result < 0.7) {
        computer_input = 'paper'
        return computer_input
    }
    else if (result >= 0.7 && result <= 1) {
        computer_input = 'scissors'
        return computer_input
    }
}
