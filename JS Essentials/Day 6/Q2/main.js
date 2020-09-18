document.addEventListener('DOMContentLoaded', () => {
    var busDetails = [{
        bno: 001,
        bname: 'Maharaja Express',
        bsrc: 'KYN',
        bdest: 'DEL',
        pascap: 499
    }]
    window.onload = () => {
        if (localStorage.getItem('busDB') == null) {
            localStorage.setItem('busDB', JSON.stringify(busDetails))
        };
    }

    function displayBusTT(newArray) {
        let chart = '',
            busInfo;
        if (newArray == undefined) {
            busInfo = JSON.parse(localStorage.getItem('busDB'))
        } else {
            busInfo = newArray;
        };

        busInfo.forEach(function(busdetail, i) {
            let currentRow = `<tr>
        <td>${busdetail.bno}</td>
        <td>${busdetail.bname}</td>
        <td>${busdetail.bsrc}</td>
        <td>${busdetail.bdest}</td>
        <td>${busdetail.pascap}</td>
        </tr>`;
            chart += currentRow;
        });
        document.getElementsByClassName("busChart")[0].innerHTML = chart;
    };
    displayBusTT();


    document.getElementById('add').addEventListener('click', () => {
        let busDetail = {
            bno: parseInt(document.forms['q2']['bno'].value),
            bname: document.forms['q2']['bname'].value,
            bsrc: document.forms['q2']['bsrc'].value,
            bdest: document.forms['q2']['bdest'].value,
            pascap: parseInt(document.forms['q2']['pascap'].value)
        };
        busDetails = JSON.parse(localStorage.getItem('busDB'));
        busDetails.push(busDetail);
        busDetails.sort(function(a, b) { return a.bno - b.bno });
        localStorage.setItem('busDB', JSON.stringify(busDetails));
        displayBusTT();

        document.forms['q2']['bno'].value = "";
        document.forms['q2']['bname'].value = "";
        document.forms['q2']['bsrc'].value = "";
        document.forms['q2']['bdest'].value = "";
        document.forms['q2']['pascap'].value = "";
    });


    document.getElementById('search').addEventListener('click', () => {
        let busDetails = JSON.parse(localStorage.getItem('busDB'));
        let srcsearch = document.forms['q2']['ssrc'].value;
        let destsearch = document.forms['q2']['sdest'].value;
        revisedChart = busDetails.filter(function(item) {
            return item.bsrc == srcsearch || item.bdest == destsearch
        });
        displayBusTT(revisedChart);
    });
})