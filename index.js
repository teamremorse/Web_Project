
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
    }

    else if(result < 24.9) {
        bmisublabel.innerHTML = ("This is considered Normal weight");

    }

    else if(result < 29.9) {
        bmisublabel.innerHTML = ("This is considered Overweight");

    }

    else if(result > 30) {
        bmisublabel.innerHTML = ("This is considered Obesity");

    }

    

    console.log("ADDITION", result);

}