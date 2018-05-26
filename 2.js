

function natural(){
    var n=document.getElementById("no1").value;
    var n=parseInt(n);
    document.getElementById("ans1").innerHTML=nat(n);
}
function nat(n)
{
    var sum=0;
    if(n>1 && n<=500)
    {
        for(i=1;i<=n;i++)
        sum+=i; 
    }
   else{
       sum=-1;
//document.getElementById("ans1").innerHTML="not possible";
   }
   
    return sum;
}