function sum(){
    var n=document.getElementById("no2").value;
    var n=parseInt(n);
    document.getElementById("ans2").innerHTML=summ(n);
}
function summ(n)
{
    var sum=0
    if(n<1000){
    for(var i=0;i<n;i++)
    {
        if(i%3==0 || i%5==0)
        {
            sum+=i;
        }
    }
}

    return sum;
}