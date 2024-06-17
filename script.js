function tabluate(){
    var tbl = document.getElementById("tableform");
    var tr = tbl.insertRow();
    var td1 = tr.insertCell();
    td1.innerHTML = document.getElementById("Name1").value;

    var td2 = tr.insertCell();
    td2.innerHTML = document.getElementById("Name2").value;

    var td3 = tr.insertCell();
    td3.innerHTML = document.getElementById("email").value;

    var td4 = tr.insertCell();
    td4.innerHTML = document.getElementById("address").value;

    var td5 = tr.insertCell();
    td5.innerHTML = document.getElementById("pincode").value;

    var td6 = tr.insertCell();
    td6.innerHTML = document.getElementById("Gender").value;

    var td7 = tr.insertCell();
    td7.innerHTML = document.getElementById("Food").value;

    var td8 = tr.insertCell();
    td8.innerHTML = document.getElementById("State").value;

    var td8 = tr.insertCell();
    td8.innerHTML = document.getElementById("Country").value;
    }