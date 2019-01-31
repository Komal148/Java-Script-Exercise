function listProperties()
{
    for( var property in student )
    {
        console.log(property);
    }
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
    
listProperties();