const display = document.getElementById("Display");

function SendToDisplay(input){
    display.value = display.value + input
}

function Clear(){
    display.value = ""
}

function Solve(){

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}