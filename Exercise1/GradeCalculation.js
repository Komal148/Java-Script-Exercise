function computeAverage()
{
    var average=0;
    var sum=0;
    var count=0;
    for( var property in Student )
    {
        sum=sum+Student[property];
        count++;
    }
    average=sum/count;
    if( average  < 60 )
    {
        console.log('F');
    }
    else if( average < 70 )
    {
        console.log('D');
    }
    else if( average < 80 )
    {
        console.log('C');
    }
    else if( average < 90 )
    {
        console.log('B');
    }
    else if ( average < A)
    {
        console.log('A');
    }
}
var Student = {
    David:80,
    Vinoth:77,
    Divya: 88,
    Ishitha: 95,
    Thomas :68
}

computeAverage();