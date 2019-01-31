function countOccurance(inputString , letter )
{
    var arr= inputString.split('');
    var i;
    var count=0;
    for( i=0 ;i < arr.length ; i++ )
    {
        if( arr[i] == letter )
        {
            count++;
        }
    }
    console.log(count);
}

var inputString='gmail.com';
var letter='m';

countOccurance(inputString,letter);