
document.getElementById("ButtonSubmit").onclick = function(){

    var textWeight = document.getElementById("Weight").value;
    var textHeight = document.getElementById("Height").value;

    //var squareofHeight = parseFloat(textHeight) * 2;
    var result = parseFloat(textWeight) / (textHeight**2);

    var bmiLabel= document.getElementById("bmiLabel");
    var unorderlist = document.getElementsByTagName("ul")[0]
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");
    var list3 = document.getElementById("list3");
    var list4 = document.getElementById("list4");

    var ol = document.createElement("ol");


    var bmisublabel = document.getElementById("bmisublabel");
    
    bmiLabel.innerHTML = ("Your Body Mass Index is " + result.toFixed(2));

    if (result < 18) {

        
        bmisublabel.innerHTML = ("YOU ARE UNDERWEIGHT");
        unorderlist.style.display = "";
        list1.innerHTML = ("Avoid fried and oily foods.");
        list2.innerHTML = ("Avoid taking Fat's like butter,ghee because they increase the level of cholesterol in thier blood.");
        list3.innerHTML = ("Stop eating between meals.");
        list4.innerHTML = ("Eat something healthy.");
        bmisublabel.style.color = "#fdc310";
        
    }

    else if(result < 24.9) {
        bmisublabel.innerHTML = ("YOU ARE FIT");
        unorderlist.style.display = "none";
        bmisublabel.style.color = "#05f5e8";
    }

    else if(result < 29.9) {
        bmisublabel.innerHTML = ("YOU ARE OVERWEIGHT");
        unorderlist.style.display = "none";
        bmisublabel.style.color = "#1289a8";
    }

    
    else if(result > 30) {
        bmisublabel.innerHTML = ("YOU ARE OBESE");
        unorderlist.style.display = "";
        list1.innerHTML = ("Eat more frequently. When you're underweight, you may feel full faster.");
        list2.innerHTML = ("Choose nutrient-rich foods.");
        list3.innerHTML = ("Make every bite count.");
        list4.innerHTML = ("Exercise");

        bmisublabel.style.color = "#ed4d63";
    }

    

    console.log("ADDITION", result);

}

let imageBox1 = document.getElementById("imageBox1");

function galleryFunction1(smallImg) {
  imageBox1.src = smallImg.src;
}

// Get the modal image tag
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementById("modal-image");

// When the user clicks the big picture, set the image and open the modal
imageBox1.onclick = function (e) {
  var src = e.srcElement.src;
  modal.style.display = "block";
  modalImage.src = src;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

