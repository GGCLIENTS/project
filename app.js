var inpt = document.getElementsByTagName('input')[0];
var year = document.getElementsByTagName('h2')[0]
var crrt = 2023, age;
console.log(inpt)
console.log(year)
function clik(){
    age = crrt - inpt.value;
    console.log(inpt.value);
    year.innerText = "Tanii Tursun On Bol: " + age;
}