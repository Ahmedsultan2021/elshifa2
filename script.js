function len(str) {
    return str.length;  
}
console.log( "length  = "+  len("ahmed"));

function fr(arr) {
    return arr[0];
}

arr = [1,2,3,4,5,4,5,6,"a","b"]
console.log( "first ele  = "+  fr(arr));


function le(array) {
    return array[array.length-1];
}
x = le(arr);
// window.alert(x);


function ra(arr) {
    return arr.reverse();
}
console.log(ra(arr));

function rs(x) {
    arr = x.split("");
    reversed_arr = arr.reverse();
    reversed_str = reversed_arr.join("");
    return reversed_str;
}

console.log(rs("ahmed"));


function cv(str) {
    count = 0;
    for (let index = 0; index < str.length; index++) {

        if (str[index] == "a" || str[index] == "e" || str[index] == "o"|| str[index] == "i" || str[index] == "u") {
            count++;
        }
        
    }
    return count;
}
console.log(cv("ahmed"));
function cc(str) {
    count = 0;
    for (let index = 0; index < str.length; index++) {

        if (str[index] != "a" && str[index] != "e" && str[index] != "o"&& str[index] != "i" &&  str[index] != "u") {
            count++;
        }
        
    }
    return count;
}


console.log(cc("ahmed"));








salries = [500,5500,5400,6500,7500,4300,8500,6300,8456];


for (let index = 0; index < salries.length; index++) {
    
}

console.log("ahmed");


array = [500,5500,5400,6500,7500,4300,8500,6300,8456];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element-1000);
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}