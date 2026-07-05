
const Voice = {
 enabled:false,
 language:"en-US"
};

function speak(text){
 if(!Voice.enabled) return;
 if(!("speechSynthesis" in window)) return;

 speechSynthesis.cancel();

 const msg=new SpeechSynthesisUtterance(text);
 msg.lang=Voice.language;
 msg.rate=1;
 msg.pitch=1;
 speechSynthesis.speak(msg);
}

function setLanguage(lang){
 Voice.language=lang;
}

document.addEventListener("DOMContentLoaded",()=>{

 const voice=document.getElementById("voiceMode");
 if(voice){
   voice.onchange=(e)=>{
      Voice.enabled=e.target.checked;
      if(Voice.enabled) speak("Voice enabled");
   };
 }

 const settings=document.getElementById("settings");
 if(settings){
   const select=document.createElement("select");

   [
     ["en-US","English"],
     ["ta-IN","Tamil"],
     ["hi-IN","Hindi"]
   ].forEach(v=>{
      const o=document.createElement("option");
      o.value=v[0];
      o.textContent=v[1];
      select.appendChild(o);
   });

   select.onchange=()=>setLanguage(select.value);

   settings.appendChild(document.createElement("br"));
   settings.appendChild(select);
 }

 ["closeBtn","openBtn","tripBtn","chargeBtn"].forEach(id=>{
   const b=document.getElementById(id);
   if(!b) return;

   b.addEventListener("click",()=>{
      switch(id){
        case "closeBtn":
          speak("Breaker Closed");
          break;
        case "openBtn":
          speak("Breaker Open");
          break;
        case "tripBtn":
          speak("Breaker Tripped");
          break;
        case "chargeBtn":
          speak("Spring Charged");
          break;
      }
   });
 });

});
