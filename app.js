
const pages=document.querySelectorAll(".page");
document.querySelectorAll("nav button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    pages.forEach(p=>p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
  });
});

let breakerClosed=false;
let springCharged=false;

const breaker=document.getElementById("breakerState");
const spring=document.getElementById("springState");
const current=document.getElementById("currentValue");

function update(){
  breaker.textContent=breakerClosed?"CLOSED":"OPEN";
  breaker.style.color=breakerClosed?"green":"red";

  spring.textContent=springCharged?"Charged":"Discharged";
  spring.style.color=springCharged?"green":"orange";

  current.textContent=breakerClosed?"1250 A":"0 A";
}

document.getElementById("chargeBtn").onclick=()=>{
  springCharged=true;
  update();
};

document.getElementById("closeBtn").onclick=()=>{
  if(!springCharged){
    alert("Charge spring first.");
    return;
  }
  breakerClosed=true;
  springCharged=false;
  update();
};

document.getElementById("openBtn").onclick=()=>{
  breakerClosed=false;
  update();
};

document.getElementById("tripBtn").onclick=()=>{
  breakerClosed=false;
  alert("Breaker Tripped");
  update();
};

document.getElementById("darkMode").onchange=(e)=>{
  if(e.target.checked){
    document.body.style.background="#111";
    document.body.style.color="#fff";
  }else{
    document.body.style.background="#eef2f7";
    document.body.style.color="#222";
  }
};

document.getElementById("voiceMode").onchange=(e)=>{
  if(e.target.checked && "speechSynthesis" in window){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Voice enabled"));
  }
};

update();
