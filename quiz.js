
const Quiz={
 score:0,
 index:0,
 questions:[
  {
   q:"Which protection operates first for very high fault current?",
   a:["Long Time","Ground Fault","Instantaneous","Short Time"],
   c:2
  },
  {
   q:"What must be charged before electrical closing?",
   a:["Trip Coil","Spring","CT","UV Coil"],
   c:1
  },
  {
   q:"Which coil opens the breaker remotely?",
   a:["Closing Coil","Motor","Shunt Trip","CT"],
   c:2
  },
  {
   q:"Which protection detects earth leakage?",
   a:["Ground Fault","Instantaneous","Long Time","Short Time"],
   c:0
  },
  {
   q:"What is the normal LV three-phase voltage?",
   a:["110 V","230 V","415 V","11 kV"],
   c:2
  }
 ]
};

function renderQuiz(){
 const area=document.getElementById("quizArea");
 if(!area) return;

 if(Quiz.index>=Quiz.questions.length){
   area.innerHTML="<h3>Completed</h3><h2>Score : "+Quiz.score+" / "+Quiz.questions.length+"</h2>";
   return;
 }

 const q=Quiz.questions[Quiz.index];

 let html="<h3>Question "+(Quiz.index+1)+"</h3>";
 html+="<p>"+q.q+"</p>";

 q.a.forEach((opt,i)=>{
   html+="<button class='quizBtn' onclick='answerQuiz("+i+")'>"+opt+"</button><br><br>";
 });

 area.innerHTML=html;
}

function answerQuiz(choice){
 const q=Quiz.questions[Quiz.index];

 if(choice===q.c){
   Quiz.score++;
   if(typeof speak==="function") speak("Correct");
 }else{
   if(typeof speak==="function") speak("Wrong Answer");
 }

 Quiz.index++;
 renderQuiz();
}

document.addEventListener("DOMContentLoaded",renderQuiz);
