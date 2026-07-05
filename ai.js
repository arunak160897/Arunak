
const AITrainer={
 history:[]
};

function aiReply(message){
 const text=message.toLowerCase();

 if(text.includes("lsig"))
   return "LSIG = Long Time, Short Time, Instantaneous and Ground Fault protection.";

 if(text.includes("mccb"))
   return "MCCB is a molded case circuit breaker used for feeder and motor protection.";

 if(text.includes("acb"))
   return "ACB is an Air Circuit Breaker used as a main incomer for low-voltage power distribution.";

 if(text.includes("trip"))
   return "A breaker trips when a protection function detects an abnormal condition.";

 if(text.includes("spring"))
   return "The closing spring must be charged before the breaker can close.";

 return "I am the ACB Training AI. Ask about ACB, LSIG, wiring, faults or testing.";
}

function sendAI(){
 const input=document.getElementById("aiInput");
 const chat=document.getElementById("aiChat");
 if(!input || !chat) return;

 const q=input.value.trim();
 if(!q) return;

 const a=aiReply(q);

 chat.innerHTML += "<div><b>You:</b> "+q+"</div>";
 chat.innerHTML += "<div><b>AI:</b> "+a+"</div><hr>";

 if(typeof speak==="function") speak(a);

 input.value="";
 chat.scrollTop=chat.scrollHeight;
}

document.addEventListener("DOMContentLoaded",()=>{
 const main=document.querySelector("main");
 if(!main) return;

 const section=document.createElement("section");
 section.id="ai";
 section.className="page";
 section.innerHTML=`
<h2>AI Electrical Trainer</h2>
<div id="aiChat" style="height:300px;overflow:auto;border:1px solid #ccc;padding:10px;background:#fff;"></div>
<br>
<input id="aiInput" type="text" placeholder="Ask about ACB..." style="width:70%;padding:10px;">
<button id="aiSend">Send</button>
`;

 main.appendChild(section);

 const nav=document.querySelector("nav");
 if(nav){
   const b=document.createElement("button");
   b.dataset.page="ai";
   b.textContent="AI";
   nav.appendChild(b);

   b.addEventListener("click",()=>{
     document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
     document.getElementById("ai").classList.add("active");
   });
 }

 document.getElementById("aiSend").onclick=sendAI;
 document.getElementById("aiInput").addEventListener("keydown",e=>{
   if(e.key==="Enter") sendAI();
 });
});
