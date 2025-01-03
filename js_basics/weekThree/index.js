
/*let text = "Abdiqani Hashi"
let number = text.length*/

/*
const str = "1999";
const str2 = Number(str)
alert(str2)*/

//It take an input from the user and then checks if the number is odd or even
/*
const number= prompt("Enter number: ");


if (number % 2 == 0){
    alert(`it is a even number ${number}`)
}
else{
    alert(`It is an odd number.${number}` )
}
*/
const Name = prompt("what is your name?")
const user = prompt("How are you feeling today? :")

if (user == "happy"){
    alert(`I'm glad to hear that! ${Name}`)
}
else if( user == "sad"){
    alert(`I'm sorry, hope you feel better soon.${Name}`)
}
else if(user =="tired"){
    alert(`Make sure to get some rest.${Name}`)
}
else{
    alert(`Thank you for sharing how you feel.${Name}`)
}
