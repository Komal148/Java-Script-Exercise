function findDifference()
{
    var diffArray= new Array();
    if( array1.length != array2.length )
    {
        console.log("Both arrays are of different size.");
        return;
    }
    else
    {
        var i;
        var j=0;
        for ( i = 0 ;i < array1.length ; i++ )
        {
            diffArray[i]=Math.abs(array1[i]-array2[i]);
        }
    }
    console.log(diffArray);
}

var array1=[23,45,67,78,90];
var array2=[90,45,83,54,23];

findDifference();