let stationQuery = 'Riehen, Weilstrasse'

fetch('https://transport.opendata.ch/v1/stationboard?station='+stationQuery)
.then(response => response.json())
//.then(data => console.log(data))

.then(data => {
    var connections = data['stationboard'];
    connections.forEach(List);

    // Determine what Category a the scheduled vehicle is
    var lineCategoryPrepare = "????"
    function whatCategory(lineCategory){
        if (lineCategory == "B"){
            lineCategoryPrepare = "Bus"
        }
        if (lineCategory == "T"){
            lineCategoryPrepare = "Tram"
        }
        return lineCategoryPrepare
    }

    function List(item ,index) {
        var lineNumber = data['stationboard'][index]['number'];
        var lineCategory = data['stationboard'][index]['category'];
        var toStop = data['stationboard'][index]['to'];

        var departureTime = data['stationboard'][index]['stop']['departure'];
        var departureTimeTrim = departureTime.split('+')[0].replace('T', ' ');

        whatCategory(lineCategory);

        document.querySelector(".timetable").innerHTML += "<div class=depElement><div class=line"+lineNumber+" line>" + lineNumber + "</div>"+
        "<br>" + toStop + "<br>" + departureTimeTrim + "<br>" + lineCategoryPrepare + "</div><br>";
        document.querySelector(".fromStop").innerHTML = "From: " + stationQuery;
    }
})

