function facto(){
    var n=document.getElementById("no").value;
    var n=parseInt(n);
    document.getElementById("ans").innerHTML=fact(n);
}
function fact(n)
{
    if(n==0||n==1)
        return 1;
    else
        return n*fact(n-1);
}