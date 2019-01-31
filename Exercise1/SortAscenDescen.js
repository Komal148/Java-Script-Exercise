// This method reads input String from User and sort it ascending and descending order.
( function(){
    var readline = require('readline-sync');
    var inputString= readline.question("Enter String");
    var arrString= inputString.split('');
    var sortedString=arrString.sort();
    console.log("Ascending order: "+ sortedString.join(''));
    console.log("Descending order: "+ sortedString.reverse().join(''));
}())