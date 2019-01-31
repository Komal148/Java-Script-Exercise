//This function finds largest of five no. given
(function (){
    var num=[3,8,4,6,7];
    var max=0;
    var i;
    for(i=0; i<num.length ; i++ )
    {
        if( max < num[i] )
        {
            max=num[i];
        }
    }
    console.log(max);
})();