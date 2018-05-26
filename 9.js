function palin(){
    var n=document.getElementById("no6").value;
    document.getElementById("ans5").innerHTML=pal(n);
}
function pal(n)
{
var i,l=n.length;
var flag=0;
for(i=0;i<l/2;i++)
{
    if(n.charAt(i)!=n.charAt(l-i-1))
    {
        flag=1;
        break;
    }
}
if(flag==1)
return "false";
else
return "true";
}