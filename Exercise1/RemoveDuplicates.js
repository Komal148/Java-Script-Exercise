(function (){
    var arrNum=[ 23,45,23,56,70,45,56,70];
    var sortArr=arrNum.sort();
    var i;
    var tempArr=new Array();
    var j=0;
    for( i= 0 ; i< sortArr.length-2 ;i++ )
    {
        if( sortArr[i] != sortArr[i+1] )
        {
            tempArr[j++]=sortArr[i];
        }
    }
    tempArr[j]=sortArr[i];
    console.log(tempArr);
}())

