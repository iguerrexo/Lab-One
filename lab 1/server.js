
console.log("Hello NodeJS");


var name = "Nora";
var lastname = 'Guerrero';
var age = 20;
var found = false;
var avrage = 12.3211;

if(age < 60){
    console.log('you are still young');
}

else{
    console.log('Sorry, you are getting older');
}

//Print Numbers from 3-12 except 9
for(let i=3; i<13; i++){
    if(i !=9){
    console.log(i);
    }
}

//arrays
var names= [];
names.push("Terri");
names.push("Nora");
names.push("Trevor");
names.push("Shay");

console.log(names[0]); //1st element

for(var j=names.length -1; j >= 0; j--) {
    console.log(names[j]);
}

//terminal
//node filename | node server.js
// win:cls
//win:CMDER