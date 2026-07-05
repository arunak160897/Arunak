
const Faults={
 active:false,
 type:"",
 current:0,
 ground:0
};

function simulateFault(type){
 Faults.active=true;
 Faults.type=type;

 switch(type){
  case "overload":
    Faults.current=1500;
    Faults.ground=0;
    break;

  case "short":
    Faults.current=12000;
    Faults.ground=0;
    break;

  case "ground":
    Faults.current=800;
    Faults.ground=1500;
    break;

  case "undervoltage":
    breakerClosed=false;
    if(typeof update==="function") update();
    if(typeof breakerAnimation==="function") breakerAnimation(false);
    alert("Undervoltage Trip");
    return;
 }

 if(typeof evaluateProtection==="function"){
   evaluateProtection(Faults.current,Faults.ground);
 }
}

function clearFault(){
 Faults.active=false;
 Faults.type="";
 Faults.current=0;
 Faults.ground=0;
}

document.addEventListener("DOMContentLoaded",()=>{
 const btns=document.querySelectorAll("#faults button");
 if(btns.length>=4){
   btns[0].onclick=()=>simulateFault("overload");
   btns[1].onclick=()=>simulateFault("short");
   btns[2].onclick=()=>simulateFault("ground");
   btns[3].onclick=()=>simulateFault("undervoltage");
 }
});
