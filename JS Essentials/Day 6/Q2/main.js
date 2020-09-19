var busDetails = new Array()
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

    busInfo.forEach((busdetail, i) => {
        let currentRow = `<tr>
        <td>${busdetail.bno}</td>
        <td>${busdetail.bname}</td>
        <td>${busdetail.bsrc}</td>
        <td>${busdetail.bdest}</td>
        <td>${busdetail.pascap}</td>
        <td><svg onclick='deleteBDetails(${i})' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></td>
        </tr>`;
        chart += currentRow;
    });
    document.getElementsByClassName("busChart")[0].innerHTML = chart;
};
displayBusTT();


// Add Bus Details to DataBase
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


// Search Bus Information
document.getElementById('search').addEventListener('click', () => {
    let busDetails = JSON.parse(localStorage.getItem('busDB'));
    let srcsearch = document.forms['q2']['ssrc'].value;
    let destsearch = document.forms['q2']['sdest'].value;
    revisedChart = busDetails.filter((item) => {
        return item.bsrc == srcsearch || item.bdest == destsearch
    });
    displayBusTT(revisedChart);
});


// Delete Bus Details
function deleteBDetails(i) {
    let busdetails = JSON.parse(localStorage.getItem("busDB"));
    busdetails.splice(i, 1);
    localStorage.setItem("busDB", JSON.stringify(busdetails))
    displayBusTT()
}
