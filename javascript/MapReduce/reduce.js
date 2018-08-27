var container = document.getElementById('container');


var li = document.createElement('li');
var array = [];

function printTable(){       
    var orders = obj.map(function(objects){
        div = addElement('div');
        h3 = addElement('h3');
        ul = addElement('ul');
        div.appendChild(h3);
        div.appendChild(ul);
        h3.innerText = objects.firstName;
        container.appendChild(div);
        
        return objects.orders;                
    })
    var itemCostArray = orders.map(function(items){
        var cost = items.reduce(function(cost1, itemx){ 
            li = addElement('li');
            label1 = addElement('label');
            label2 = addElement('label');
            label1.innerText = itemx.productName;
            label2.innerText = itemx.itemCost;
            li.appendChild(label1);
            li.appendChild(label2);
            div.appendChild(li);

            li.style.
            console.log("Product Name: " +itemx.productName+", Product Cost: "+itemx.itemCost);

            return cost1+itemx.itemCost;
        },0)
        listOfItemCosts.push("Total cost: "+cost);
        console.log(cost);
    })        
    console.log(listOfItemCosts);

}

function addElement(element){
    return document.createElement(element);    
}



