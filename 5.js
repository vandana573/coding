function listofno(){
    var n=document.getElementById("no4").value;
    var n=parseInt(n);
    document.getElementById("ans4").innerHTML=num(n);
}
function num(n)
{
    var arr=[],i,j;
for(i=0,j=0;i<=n;i++,j++)
{
    if(i%3==0 && i%5==0)
    arr[j]="FIZZBUZZ";
    else if(i%5==0)
    arr[j]="BUZZ";
    else if(i%3==0)
    arr[j]="FUZZ";
    else
    arr[j]=i;
}

    return arr;
}