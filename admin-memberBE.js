function addRow() {
    var myName = document.getElementById("name");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = rowCount;
    row.insertCell(1).innerHTML = myName.value;
    row.insertCell(2).innerHTML = "Normal"
    row.insertCell(3).innerHTML = '<img src="icons/padlock-ban.png" alt="padlock_ban">'
    console.log("Added new value");
}

function onClick() { //untuk padlock
    //pas click, ubah dari ban jadi unba, dan vice versa
    //ubah status dari normal ke banned, dan vice versa
}