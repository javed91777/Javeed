let firstName='Ravi';
console.log(firstName);

const numerical1 = 30;
console.log(numerical1);

let cb = function(i){
    console.log(i);
}

for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },2000)
}