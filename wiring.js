
const svgContainer=document.getElementById("svgContainer");

function createWiringDiagram(){
if(!svgContainer) return;

svgContainer.innerHTML=`
<svg viewBox="0 0 1200 700" width="100%" height="100%">
<line x1="100" y1="100" x2="100" y2="600" stroke="red" stroke-width="4"/>
<line x1="180" y1="100" x2="180" y2="600" stroke="yellow" stroke-width="4"/>
<line x1="260" y1="100" x2="260" y2="600" stroke="blue" stroke-width="4"/>

<rect id="acb" x="420" y="180" width="260" height="220"
fill="#ffffff" stroke="#000" stroke-width="3"/>

<text x="550" y="210" text-anchor="middle"
font-size="24">HYW3 ACB</text>

<circle class="terminal" cx="420" cy="250" r="8"/>
<circle class="terminal" cx="420" cy="300" r="8"/>
<circle class="terminal" cx="420" cy="350" r="8"/>

<circle class="terminal" cx="680" cy="250" r="8"/>
<circle class="terminal" cx="680" cy="300" r="8"/>
<circle class="terminal" cx="680" cy="350" r="8"/>

<line id="flow1" x1="100" y1="250" x2="420" y2="250"
stroke="#444" stroke-width="3"/>
<line id="flow2" x1="680" y1="250" x2="1000" y2="250"
stroke="#444" stroke-width="3"/>
</svg>`;
}

function animateCurrent(on){
["flow1","flow2"].forEach(id=>{
const w=document.getElementById(id);
if(!w) return;
if(on){
w.style.stroke="lime";
w.style.strokeDasharray="12";
w.style.animation="dash 1s linear infinite";
}else{
w.style.stroke="#444";
w.style.animation="";
}
});
}

document.addEventListener("DOMContentLoaded",createWiringDiagram);
