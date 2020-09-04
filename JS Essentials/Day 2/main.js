var myArray = new Array()

function run() {
    var userString = document.forms["q1"]["userString"].value;
    var userChar = document.forms["q1"]["userChar"].value;
    var search = userString.search(userChar)
    if (search >= 0) {
        document.getElementById("value_q1").innerHTML = userChar + " is found at " + (search + 1) + " from left.";
    } else {
        document.getElementById("value_q1").innerHTML = "Value not found";
    }
}

function convert() {
    var time = document.forms["q2"]["minutes"].value;
    document.getElementById("value_q2").innerHTML = time + " minutes in second is " + (time * 60);
}

function addCars() {
    var userElem = document.forms["q3"]["addValue"].value;
    myArray.push(userElem)
    document.getElementById("value_q3").innerHTML = "Done!";
    document.forms["q3"]["addValue"].value = "";
}

function search() {
    // var cars = ["AUDI", "BMW", "PORCHES", "BUGATTI", "LAMBORGHINI"]
    var search = document.forms["q3"]["element"].value;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === search.toUpperCase()) {
            document.getElementById("value_q3").innerHTML = "Yes! I own a " + search;
        } else {
            document.getElementById("value_q3").innerHTML = "No, I don't own a " + search;
        }
    }
}

function checkElem() {
    var userElem = document.forms["q4"]["addValue"].value;
    myArray.push(userElem)
    document.getElementById("value_q4").innerHTML = "Done!";
    document.forms["q4"]["addValue"].value = "";
}

function display() {
    // var fruits = ["banana", "apple", "chickoo", "kiwi", "orange", "guava"]
    var a_fruits = []
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].indexOf('a') > 0 || myArray[i].search('A') > 0) {
            a_fruits.push(myArray[i])
            document.getElementById("value_q4").innerHTML = a_fruits;
        } else {
            document.getElementById("value_q4").innerHTML = "NO!"
        }
    }
}

function addElem() {
    var userElem = document.forms["q5"]["addValue"].value;
    myArray.push(userElem)
    document.getElementById("value_q5").innerHTML = "Done!";
    document.forms["q5"]["addValue"].value = "";
}

function reverseArr() {
    document.getElementById("value_q5").innerHTML = myArray + " in Reverse Order is " + myArray.reverse();
}