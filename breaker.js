
const canvas=document.getElementById("breakerCanvas");
let ctx=null;
let angle=0;

function initBreaker(){
 if(!canvas) return;
 canvas.width=900;
 canvas.height=500;
 ctx=canvas.getContext("2d");
 drawBreaker(false);
}

function drawBreaker(closed){
 if(!ctx) return;

 ctx.clearRect(0,0,canvas.width,canvas.height);

 ctx.lineWidth=6;
 ctx.strokeStyle="#000";

 ctx.beginPath();
 ctx.moveTo(220,120);
 ctx.lineTo(220,380);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(680,120);
 ctx.lineTo(680,380);
 ctx.stroke();

 angle=closed?0:35;

 ctx.save();
 ctx.translate(450,250);
 ctx.rotate(-angle*Math.PI/180);

 ctx.beginPath();
 ctx.moveTo(-180,0);
 ctx.lineTo(180,0);
 ctx.strokeStyle=closed?"green":"red";
 ctx.lineWidth=10;
 ctx.stroke();

 ctx.restore();

 ctx.font="24px Arial";
 ctx.fillStyle=closed?"green":"red";
 ctx.fillText(closed?"BREAKER CLOSED":"BREAKER OPEN",300,60);
}

function breakerAnimation(targetClosed){
 let start=breakerClosed;
 let steps=20;
 let i=0;

 const timer=setInterval(()=>{
   i++;
   const progress=i/steps;
   const state=progress>=1?targetClosed:start;
   drawBreaker(state);
   if(i>=steps){
      breakerClosed=targetClosed;
      drawBreaker(breakerClosed);
      if(typeof animateCurrent==="function"){
         animateCurrent(breakerClosed);
      }
      clearInterval(timer);
   }
 },20);
}

document.addEventListener("DOMContentLoaded",()=>{
 initBreaker();

 const c=document.getElementById("closeBtn");
 const o=document.getElementById("openBtn");
 const t=document.getElementById("tripBtn");

 if(c){
   c.addEventListener("click",()=>setTimeout(()=>breakerAnimation(true),50));
 }
 if(o){
   o.addEventListener("click",()=>setTimeout(()=>breakerAnimation(false),50));
 }
 if(t){
   t.addEventListener("click",()=>setTimeout(()=>breakerAnimation(false),50));
 }
});
