function swithImage(path) {
    document.getElementById('myimg').src = path;
}

function verifydetails() {
    document.forms["q2"]["verify"].value = document.forms["q2"]["details"].value;
    document.getElementById('verifybox').style.display = "contents";
}

var udetails_db = new Array();

function createArray() {
    var udetails = {
        uname: document.forms["q3"]["uname"].value,
        uage: parseInt(document.forms["q3"]["uage"].value),
        ucountry: document.forms["q3"]["ucountry"].value,
        uhobbies: new Array(document.forms["q3"]["uhobbies"].value)
    }
    udetails_db.push(udetails)
    console.log(udetails_db);
    document.getElementById("info").innerHTML = "Check in Console.";
}

//include('./unit.js');

function classifyAge() {
    var checkage = document.forms["q4"]["checkage"].value
    for (let i = 0; i < udetails_db.length; i++) {
        if (document.getElementById("ran1").checked) {
            if (udetails_db[i].uage < checkage) {
                console.log(udetails_db[i]);
            }
        } else if (document.getElementById("ran2").checked) {
            if (udetails_db[i].uage > checkage) {
                console.log(udetails_db[i]);
            }
        } else {
            console.log("Please Select a Case");
        }
    }
}

function classifyCountry() {
    var info = document.forms["q4"]["info"].value
    for (let i = 0; i < udetails_db.length; i++) {
        if (udetails_db[i].ucountry == info) {
            console.log(udetails_db[i]);
        }
    }
}