
function occupationFiltering()
{
    for( var property in myObj )
    {
        if( myObj[property].occupation == "Programmer" )
        {
            console.log(myObj[property]);
        }
    }
}

function sortAccAge()
{
    myObj.sort(function(item1,item2){
        if(item1.age < item2.age )
            return -1;
        else if( item1.age > item2.age )
            return 1;
        return 0;
    });
    console.log("\nSort according to age");
    console.log(myObj);
}


var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


occupationFiltering();
sortAccAge();

console.log("\nObjects of Object:");
var temp={};
for(let i=0;i<myObj.length;i++){
    temp2={};
    list=[];
    temp2.name=myObj[i].name;
    temp2.age=myObj[i].age;
    list.push(temp2);
    if(myObj[i].occupation in temp){
        temp[myObj[i].occupation].push(temp2);
    }else{
    temp[myObj[i].occupation]=list;
    }
 }
 console.log(temp);

 
function getName(item,index){
    var names=item.name;
    return names;
 }
 
 console.log("\nGetName:")
 console.log(myObj.map(getName));
