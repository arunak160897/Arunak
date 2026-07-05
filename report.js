
const Report={
 start:new Date(),
 events:[]
};

function logEvent(event){
 Report.events.push({
   time:new Date().toLocaleTimeString(),
   event:event
 });
}

["closeBtn","openBtn","tripBtn","chargeBtn"].forEach(id=>{
 document.addEventListener("DOMContentLoaded",()=>{
   const b=document.getElementById(id);
   if(b){
     b.addEventListener("click",()=>logEvent(id));
   }
 });
});

function downloadReport(){
 let text="";
 text+="ACB TRAINING REPORT\n";
 text+="===========================\n";
 text+="Date : "+new Date().toLocaleString()+"\n\n";

 text+="Quiz Score : ";
 if(typeof Quiz!=="undefined")
   text+=Quiz.score+" / "+Quiz.questions.length+"\n\n";
 else
   text+="N/A\n\n";

 text+="Events\n";
 text+="---------------------------\n";

 Report.events.forEach(e=>{
   text+=e.time+"  "+e.event+"\n";
 });

 const blob=new Blob([text],{type:"text/plain"});
 const url=URL.createObjectURL(blob);

 const a=document.createElement("a");
 a.href=url;
 a.download="ACB_Training_Report.txt";
 a.click();

 URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded",()=>{
 const settings=document.getElementById("settings");
 if(!settings) return;

 settings.appendChild(document.createElement("hr"));

 const btn=document.createElement("button");
 btn.textContent="Download Training Report";
 btn.onclick=downloadReport;

 settings.appendChild(btn);
});
