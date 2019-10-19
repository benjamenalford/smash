console.log(fighters);

var table = d3.select("#fighters");
var tableBody = table.select("tbody");
fighters.forEach(fighter => {
    var row = tableBody.append("tr");

    row.append("td").text(fighter.id);
    row.append("td").text(fighter.displayNameEn);
    row.append("td").text(fighter.series);

})