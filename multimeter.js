
const Meter={
 mode:"Voltage",
 value:0
};

function setMeterMode(mode){
 Meter.mode=mode;
 updateMeter();
}

function measureVoltage(){
 Meter.value=breakerClosed?415:0;
 updateMeter();
}

function measureCurrent(){
 Meter.value=breakerClosed?1250:0;
 updateMeter();
}

function measureResistance(){
 Meter.value=breakerClosed?0.02:999999;
 updateMeter();
}

function measureContinuity(){
 Meter.value=breakerClosed?1:0;
 updateMeter();
}

function updateMeter(){
 const d=document.getElementById("meterDisplay");
 if(!d) return;

 switch(Meter.mode){
   case "Voltage":
     d.innerHTML=Meter.value.toFixed(1)+" V";
     break;
   case "Current":
     d.innerHTML=Meter.value.toFixed(1)+" A";
     break;
   case "Resistance":
     d.innerHTML=(Meter.value>1000?"OL":Meter.value.toFixed(2)+" Ω");
     break;
   case "Continuity":
     d.innerHTML=Meter.value?"BEEP":"OPEN";
     break;
 }
}

document.addEventListener("DOMContentLoaded",()=>{
 const meter=document.getElementById("meter");
 if(!meter) return;

 const bar=document.createElement("div");
 bar.style.marginBottom="15px";

 ["Voltage","Current","Resistance","Continuity"].forEach(mode=>{
   const b=document.createElement("button");
   b.textContent=mode;
   b.onclick=()=>{
      setMeterMode(mode);
      if(mode==="Voltage") measureVoltage();
      if(mode==="Current") measureCurrent();
      if(mode==="Resistance") measureResistance();
      if(mode==="Continuity") measureContinuity();
   };
   bar.appendChild(b);
 });

 meter.insertBefore(bar,meter.firstChild);
 measureVoltage();

 setInterval(()=>{
   if(Meter.mode==="Voltage") measureVoltage();
   if(Meter.mode==="Current") measureCurrent();
 },500);
});
