fetch('https://transport.opendata.ch/v1/stationboard?station=Riehen, Weilstrasse')
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
        var departureTime = data['stationboard'][index]['stop']['departure'];

        whatCategory(lineCategory);

        document.querySelector(".timetable").innerHTML += "<div class=depElement><div class=line"+lineNumber+" line>" + lineNumber + "</div>"+
        "<br>" + departureTime + "<br>" + lineCategoryPrepare +"</div><br>";
    }
})
