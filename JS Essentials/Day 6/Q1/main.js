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


function findbyName() {
    let nameSearch = document.forms['q1']['sname'].value;
    let revisedChart = udetails.filter(function(detail) {
        return (detail.uname.toUpperCase().indexOf(nameSearch.toUpperCase()) != -1);
    });
    showChart(revisedChart);
}


function findbyCity() {
    let citySearch = document.forms['q1']['scity'].value;
    let revisedChart = udetails.filter(function(detail) {
        return (detail.ucity.toUpperCase().indexOf(citySearch.toUpperCase()) != -1);
    });
    showChart(revisedChart);
}


function deleteDetails(i) {
    udetails.splice(i, 1);
    showChart(udetails)

}


//--------------------------------------------------------------------------------------------------------------



window.onload = function() {
    let busdetails = [{
        busno: 100,
        busname: 'DEVIL EXPRESS',
        bussrc: 'KYN',
        busdest: 'JAI',
        pascap: 198
    }];

    if (localStorage.getItem("busInfoChart") == null) {
        localStorage.setItem("busInfoChart", JSON.stringify(busdetails));
    }
};



function displayBusTT(someArray = undefined) {
    let chart = "";
    let busInfoD;
    if (someArray == undefined) {
        busInfoDetails = JSON.parse(localStorage.getItem("busInfoChart"));
    } else {
        busInfoD = someArray;
    }


    busInfoD.forEach(function(busdetail, i) {
        let currentRow = `<tr>
        <td>${busdetail.busno}</td>
        <td>${busdetail.busname}</td>
        <td>${busdetail.bussrc}</td>
        <td>${busdetail.busdest}</td>
        <td>${busdetail.pascap}</td>
        <td><svg onclick='deleteBDetails(${i})' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></td>
        </tr>`;

        chart += currentRow;
    });
    document.getElementsByClassName("busChart")[0].innerHTML = chart;
}
displayBusTT();


function addBDetails(e) {
    e.preventDefault();
    let busInfo = {
        busno: parseInt(document.forms['q2']['bno'].value),
        busname: document.forms['q2']['bname'].value,
        bussrc: document.forms['q2']['bsrc'].value,
        busdest: document.forms['q2']['bdest'].value,
        pascap: parseInt(document.forms['q2']['pascap'].value)
    }
    let busdetails = JSON.parse(localStorage.getItem("busInfoChart"));
    busdetails.push(busInfo);
    //busdetails.sort(function(a, b) { return a.busno - b.busno });
    localStorage.setItem("busInfoChart", JSON.stringify(busInfoData));
    displayBusTT();

    document.forms['q2']['bno'].value = "";
    document.forms['q2']['bname'].value = "";
    document.forms['q2']['bsrc'].value = "";
    document.forms['q2']['bdest'].value = "";
    document.forms['q2']['pascap'].value = "";
}


function findbySrc() {
    let srcSearch = document.forms['q2']['ssrc'].value;
    let busdetails = JSON.parse(localStorage.getItem("busInfoChart"));
    let revisedChart = busdetails.filter(function(detail) {
        return (detail.bussrc.toUpperCase().indexOf(srcSearch.toUpperCase()) != -1);
    });
    displayBusTT(revisedChart);
}


function findbyDest() {
    let srcSearch = document.forms['q2']['sdest'].value;
    let busdetails = JSON.parse(localStorage.getItem("busInfoChart"));
    let revisedChart = busdetails.filter(function(detail) {
        return (detail.busdest.toUpperCase().indexOf(srcSearch.toUpperCase()) != -1);
    });
    displayBusTT(revisedChart);
}


function deleteBDetails(i) {
    let busdetails = JSON.parse(localStorage.getItem("busInfoChart"));
    busdetails.splice(i, 1);
    localStorage.setItem("busInfoChart", JSON.stringify(busdetails))
    displayBusTT()
}