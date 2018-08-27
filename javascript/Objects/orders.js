var form = document.getElementById('ordersForm');

function addObject(chairs, tables, shoeracks){
    var ul = document.createElement('ul');
    var chair = document.createElement('li');
    var table = document.createElement('li');
    var shoerack = document.createElement('li');
    ul.appendChild(chair);
    ul.appendChild(table);
    ul.appendChild(shoerack);
    form.appendChild(ul);

    chair.innerText = chairs;
    table.innerText = tables;
    shoerack.innerText = shoeracks;
}

function createObject(){
    var chairName = document.getElementById('chairName').value;
    var tableName = document.getElementById('tableName').value;
    var shoerackName = document.getElementById('shoerackName').value;

    new addObject(chairName, tableName, shoerackName);
}