
const LSIG = {
  L:{pickup:1.0,time:10},
  S:{pickup:5.0,time:0.3},
  I:{pickup:10.0},
  G:{pickup:0.5,time:0.2}
};

function setLSIG(type,value){
  if(type==="L") LSIG.L.pickup=value;
  if(type==="S") LSIG.S.pickup=value;
  if(type==="I") LSIG.I.pickup=value;
  if(type==="G") LSIG.G.pickup=value;
}

function evaluateProtection(current,groundCurrent=0){
  if(current>=LSIG.I.pickup*1000){
    tripBreaker("Instantaneous");
    return;
  }

  if(current>=LSIG.S.pickup*1000){
    setTimeout(()=>tripBreaker("Short Time"),LSIG.S.time*1000);
    return;
  }

  if(current>=LSIG.L.pickup*1000){
    setTimeout(()=>tripBreaker("Long Time"),LSIG.L.time*1000);
    return;
  }

  if(groundCurrent>=LSIG.G.pickup*1000){
    setTimeout(()=>tripBreaker("Ground Fault"),LSIG.G.time*1000);
  }
}

function tripBreaker(reason){
  breakerClosed=false;

  if(typeof update==="function"){
    update();
  }

  if(typeof breakerAnimation==="function"){
    breakerAnimation(false);
  }

  alert("LSIG Trip : " + reason);
}

document.addEventListener("DOMContentLoaded",()=>{
  const sliders=document.querySelectorAll("#lsig input[type=range]");
  sliders.forEach((s,index)=>{
    s.min=0.5;
    s.max=15;
    s.step=0.5;
    s.value=index===0?1:index===1?5:index===2?10:0.5;

    s.addEventListener("input",()=>{
      ["L","S","I","G"].forEach((k,i)=>{
        if(i===index) setLSIG(k,parseFloat(s.value));
      });
    });
  });
});
