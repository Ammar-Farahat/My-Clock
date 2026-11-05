function clock() {
 let date = new Date();
 let hours = date.getHours(); // 0 -23
 let minutes = date.getMinutes(); // 0 - 59
 let secondes = date.getSeconds(); // 0 - 59
 let flag = "AM"
 if(hours == 0) { // morning
    hours = 12
 }
 if(hours > 12) { // the sun time
    hours = hours - 12;
    flag = "PM"
 }
 // 01:12:06
if(hours < 10) hours = "0" + hours;

if(minutes < 10) minutes = "0" + minutes;

if(secondes < 10) secondes = "0" + secondes
document.querySelector('.clock').innerText = `${hours}: ${minutes}: ${secondes}: ${flag}`
setTimeout(function() {
   clock()

}, 1000)


}
clock()


