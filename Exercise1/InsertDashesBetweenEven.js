//This Method reads input from user and insert - between even Numbers
(function(){

    var readline = require('readline-sync');

    var num = readline.question("Enter Number");

    var text='';
    var i = 0;
    
    while( i< num.length-1 )
    {
        if( (Number(num[i]) % 2 == 0) && (Number(num[i+1] % 2 == 0)) )
        {
            text+=num[i]+'-';
        }
        else{
            text+=num[i];
        }
        i++;
    }
    text+=num[i];
    console.log(text);
    //console.log("Hi " + num+ ", nice to meet you.");
})();