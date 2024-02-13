function ajaxCall(url, method, data, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };

    xhttp.open(method, url, true);

    if (method === "POST") {
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
    } else {
        xhttp.send();
    }
}

function giris() {
    const usernameInp = document.getElementById("username");
    const passwordInp = document.getElementById("password");

    ajaxCall("/araba/login?username=" + usernameInp.value + "&password=" + passwordInp.value, "GET", null, function (araba) {
        document.getElementById("login-div").style.display = "none";
        document.getElementById("user-div").style.display = "block";

        const markaInp = document.getElementById("marka");
        const modelInp = document.getElementById("model");
        const yilInp = document.getElementById("yil");
        const fiyatInp = document.getElementById("fiyat");
        const renkInp = document.getElementById("renk");

        markaInp.value = araba.marka;
        modelInp.value = araba.model;
        yilInp.value = araba.yil;
        fiyatInp.value = araba.fiyat;
        renkInp.value = araba.renk;
    });
}

function getAllData() {
    ajaxCall("/araba/", "GET", null, function (arabalar) {
        renderHtml(arabalar);
    });
}

function renderHtml(arabalar) {
    let tableHtml = '<table border="1" class="tblAraba">';
    tableHtml += '<tr id="tblID"><th>ID</th><th>Marka</th><th>Model</th><th>Yıl</th></tr>';

    for (let i = 0; i < arabalar.length; i++) {
        tableHtml += '<tr>';
        tableHtml += '<td name="ID">' + arabalar[i].id + '</td>';
        tableHtml += '<td name="marka">' + arabalar[i].marka + '</td>';
        tableHtml += '<td name="model">' + arabalar[i].model + '</td>';
        tableHtml += '<td name="yil">' + arabalar[i].yil + '</td>';
        tableHtml += '<td><button onclick="deleteRow(this,' + i + ')">Delete</button></td>';
        tableHtml += '<td><button onclick="duzeltSatir(this,' + i + ')">Düzelt</button></td>';
        tableHtml += '</tr>';
    }

    tableHtml += '</table>';
    document.getElementById('carTable').innerHTML = tableHtml;
}

function duzeltSatir(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    var form = document.createElement("form");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");

    for (var i = 0; i < cells.length - 1; i++) {
        var th = document.createElement("th");
        th.textContent = cells[i].getAttribute("name");
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    table.appendChild(thead);
    form.appendChild(table);

    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    var inputElements = [];

    for (var i = 0; i < cells.length - 1; i++) {
        var td = document.createElement("td");
        var input = document.createElement("input");
        input.type = "text";
        input.value = cells[i].textContent;
        td.appendChild(input);
        tr.appendChild(td);
        inputElements.push(input);
    }

    tbody.appendChild(tr);
    table.appendChild(tbody);

    var kaydetButton = document.createElement("button");
    kaydetButton.textContent = "Kaydet";
    kaydetButton.onclick = function () {
        for (var i = 0; i < cells.length - 1; i++) {
            cells[i].textContent = inputElements[i].value;
        }
        form.remove();
    };

    var iptalButton = document.createElement("button");
    iptalButton.textContent = "İptal";
    iptalButton.onclick = function () {
        form.remove();
    };

    form.appendChild(kaydetButton);
    form.appendChild(iptalButton);
    document.body.appendChild(form);
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
