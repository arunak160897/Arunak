
document.addEventListener("DOMContentLoaded",()=>{

const scripts=[
"wiring.js",
"breaker.js",
"lsig.js",
"fault.js",
"multimeter.js",
"voice.js",
"quiz.js",
"ai.js",
"report.js"
];

scripts.forEach(src=>{
  if(document.querySelector(`script[src="${src}"]`)) return;
  const s=document.createElement("script");
  s.src=src;
  s.defer=true;
  document.body.appendChild(s);
});

const footer=document.createElement("footer");
footer.style.marginTop="40px";
footer.style.padding="15px";
footer.style.textAlign="center";
footer.style.background="#005eb8";
footer.style.color="white";
footer.innerHTML=
"ACB Simulator Pro v6.0 | Modular Training Platform";
document.body.appendChild(footer);

console.log("Modules loaded.");

});
