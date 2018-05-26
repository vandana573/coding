var array=[];
function array_push(n){
    var n=parseInt(document.getElementById("no6").value);
    if(n<=0)
        alert("the number cannot be less than or equal to 0");
    else
    {
        array.push(n);
    }
    document.getElementById("no6").value=" ";

}
     

function pair()
{
  var i;
  var m=parseInt(document.getElementById("no5").value);
  for(i=0;i<array.length;i++)
{
for(var j=i+1;j<array.length;j++)
{
    if(array[i]+array[j]==m)
    document.getElementById("ans5").innerHTML += "\""+array[i]+"\""+","+"\""+array[j]+"\""+"<br>";
}

}
}