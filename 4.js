function powerof(){
    var n=document.getElementById("no3").value;
    var n=parseInt(n);
    document.getElementById("ans3").innerHTML=close(n);
}
function close(n)
{
    var res = 1,count=0; 
    var b=isPowerOf2(n);
     if(b==0){
    while (res <= (n-1)/2)
    {
        res = res * 2;
        count++;
    }

    return count;
}
else
    return b;
}
function isPowerOf2(n)
{ var count1=0;
    while(n!=1)
    {
        if(n%2!=0)
            return 0;
        n=n/2;
        count1++;
    }
    return count1 ;
}