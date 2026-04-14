var timer = 60;
var score= 0;
var hitrn= 0;
function makebubble(){

    var clutter = "";

    for (var i=1; i<=6 ; i++)
    {
              var rn= Math.floor(Math.random()*10)
              clutter += `<div class="bubble">${rn}</div >`
    }
    document.querySelector("#pbtm").innerHTML=clutter;

}

function runtimer ()
{
     var time =setInterval( function()
    {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").innerHTML = timer; 
        }
     else
     {
        clearInterval(time);

     }
    },1000);
    
}

function newhit ()
{
    hitrn= Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML= hitrn;
}

function increasescore()
{
    score+=10;
    document.querySelector("#scoreval").innerHTML= score;
}
 document.querySelector("#pbtm").addEventListener("click",function(a)
{
    var clickednum=  Number(a.target.textcontent);
    if(clickednum==hitrn)
    {
        increasescore();
        makebubble();
        newhit();
    }
})
newhit();
runtimer();
increasescore();
makebubble();