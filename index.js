
function showtimer(){
    var timer = 60;
   var interval = setInterval(function(){
        --timer;
        document.querySelector("#time>h3").textContent = timer;
        if(timer<1){
          clearInterval(interval);
          gameover();
        }
    }, 1000);
}

function showbubbles(){
   
    var clutter = '';
    for(var i=0; i<102; i++)
    {
        var rn = Math.floor(Math.random()*10);
        clutter += ` <div class = "bubble" id="${i}">${rn}</div>`;
    }
    document.querySelector("#bottom").innerHTML = clutter;
}
function gameover(){
    document.querySelector("#over").style.display = "flex";
}
var score = 0;
function incscore(){
    score += 10;
    document.querySelector("#scoreno>h3").innerHTML = score;
}
var hitno ;
function hit(){
    hitno = Math.floor(Math.random()*10);
    document.querySelector("#clickno>h3").innerHTML = hitno;
}

function close(){
    document.querySelector("#over>button").addEventListener("click",function(){
        document.querySelector("#over").style.display = "none";
        location.reload();
        // hit();
        // showtimer();
        //   document.querySelector("#scoreno>h3").innerHTML = 0;
    })
}
var no = 3;
document.querySelector("#lifeno>h3").innerHTML = "❤"+"❤"+"❤";
function bubbleclick(){
     document.querySelector("#bottom").addEventListener("click",function(dets){
          if(Number(dets.target.textContent) === hitno){
            showbubbles();
            hit();
            incscore();
          }
          else{
            no= no-1;
           if(no == 2){
            document.querySelector("#lifeno>h3").innerHTML = "❤"+"❤";
           }
           else if( no == 1){
            document.querySelector("#lifeno>h3").innerHTML = "❤";
          
           }
            if(no === 0){
                document.querySelector("#lifeno>h3").innerHTML = "";
          
                gameover();
            }
          }
     })
}
bubbleclick();
showbubbles();
showtimer();
hit();
close();
