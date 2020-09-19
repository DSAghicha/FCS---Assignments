let udetails = [{
        uname: "ABC",
        uage: 22,
        ucity: "Thane",
        usalary: 25200
    },
    {
        uname: "DEF",
        uage: 25,
        ucity: "Ulhasnagar",
        usalary: 48000
    },
    {
        uname: "GHI",
        uage: 19,
        ucity: "Badlapur",
        usalary: 18210
    },
    {
        uname: "JKL",
        uage: 38,
        ucity: "Kalyan",
        usalary: 108210
    },
    {
        uname: "MNO",
        uage: 30,
        ucity: "Badlapur",
        usalary: 90210
    }
]


//Display Chart
function showChart(someArray) {
    let chart = "";

    someArray.forEach(function(udetail, i) {
        let currentRow = `<tr>
        <td>${i + 1}</td>
        <td>${udetail.uname}</td>
        <td>${udetail.uage}</td>
        <td>${udetail.ucity}</td>
        <td>${udetail.usalary}</td>
        <td><svg onclick='deleteDetails(${i})' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></td>
        </tr>`;

        chart += currentRow;
    });
    document.getElementsByClassName("chartBox")[0].innerHTML = chart;
}
showChart(udetails);


//Add User Information
function addUDetails(q) {
    let udetail = {
        uname: document.forms['q1']['name'].value,
        uage: parseInt(document.forms['q1']['age'].value),
        ucity: document.forms['q1']['city'].value,
        usalary: parseInt(document.forms['q1']['salary'].value)
    }
    udetails.push(udetail);
    showChart(udetails);
    document.forms['q1']['name'].value = "";
    document.forms['q1']['age'].value = "";
    document.forms['q1']['city'].value = "";
    document.forms['q1']['salary'].value = "";

}


// Search
function findbyName() {
    let nameSearch = document.forms['q1']['sname'].value;
    let revisedChart = udetails.filter(function(detail) {
        return (detail.uname.toUpperCase().indexOf(nameSearch.toUpperCase()) != -1);
    });
    showChart(revisedChart);
}


//Search
function findbyCity() {
    let citySearch = document.forms['q1']['scity'].value;
    let revisedChart = udetails.filter(function(detail) {
        return (detail.ucity.toUpperCase().indexOf(citySearch.toUpperCase()) != -1);
    });
    showChart(revisedChart);
}


//Delete
function deleteDetails(i) {
    udetails.splice(i, 1);
    showChart(udetails)

}
