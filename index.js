
document.getElementById("ButtonSubmit").onclick = function(){

    var textWeight = document.getElementById("Weight").value;
    var textHeight = document.getElementById("Height").value;

    //var squareofHeight = parseFloat(textHeight) * 2;
    var result = parseFloat(textWeight) / (textHeight**2);

    var bmiLabel= document.getElementById("bmiLabel");
    var bmisublabel = document.getElementById("bmisublabel");
    
    bmiLabel.innerHTML = ("Your Body Mass Index is " + result.toFixed(2));

    if (result < 18) {
        bmisublabel.innerHTML = ("This is considered Underweight");
        bmisublabel.style.color = "#fdc310";
        
    }

    else if(result < 24.9) {
        bmisublabel.innerHTML = ("This is considered Normal Weight");
        bmisublabel.style.color = "#13cac0";
    }

    else if(result < 29.9) {
        bmisublabel.innerHTML = ("This is considered Overweight");
        bmisublabel.style.color = "#1289a8";
    }

    
    else if(result > 30) {
        bmisublabel.innerHTML = ("This is considered Obesity");
        bmisublabel.style.color = "#ed4d63";
    }

    

    console.log("ADDITION", result);

}