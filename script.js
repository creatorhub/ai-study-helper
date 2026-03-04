/* ===================================
   AI STUDY HELPER - MAIN SCRIPT
   FINAL STABLE VERSION
=================================== */


/* ===================================
   LOGIN PAGE
=================================== */

if (window.location.pathname.includes("login.html")) {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const email = document.querySelector("input[type='email']").value;
const password = document.querySelector("input[type='password']").value;

if(email === "" || password === ""){

alert("Please fill all fields");
return;

}

alert("Login Successful");

window.location.href = "dashboard.html";

});

}



/* ===================================
   SIGNUP PAGE
=================================== */

if (window.location.pathname.includes("signup.html")) {

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector("input[type='text']").value;
const email = document.querySelector("input[type='email']").value;

if(name === "" || email === ""){

alert("Please fill all fields");
return;

}

alert("Account created successfully");

window.location.href = "login.html";

});

}



/* ===================================
   NOTES SUMMARIZER (DEMO)
=================================== */

if (window.location.pathname.includes("notes.html")) {

const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const summary = document.querySelector(".summary-box p");

button.addEventListener("click", function(){

const text = textarea.value;

if(text === ""){

alert("Please enter notes");
return;

}

const shortText = text.substring(0,150);

summary.innerText = shortText + "...";

});

}



/* ===================================
   HOMEWORK HELPER (DEMO)
=================================== */

if (window.location.pathname.includes("homework.html")) {

const button = document.querySelector("button");
const textarea = document.querySelector("textarea");
const answer = document.querySelector(".answer-box p");

button.addEventListener("click", function(){

const question = textarea.value;

if(question === ""){

alert("Please type a question");
return;

}

answer.innerText =
"AI Explanation: This is a demo answer. When AI integration is added, the real answer will appear here.";

});

}



/* ===================================
   STUDY PLANNER
=================================== */

if (window.location.pathname.includes("planner.html")) {

const button = document.querySelector("button");
const taskInput = document.querySelector("input[type='text']");
const dateInput = document.querySelector("input[type='date']");
const taskList = document.querySelector(".task-list");

button.addEventListener("click", function(){

const task = taskInput.value;
const date = dateInput.value;

if(task === ""){

alert("Enter a task");
return;

}

const div = document.createElement("div");

div.className = "task";

div.innerHTML = `
<span>${task} - ${date}</span>
<button class="done">✔</button>
<button class="delete">✖</button>
`;

taskList.appendChild(div);

taskInput.value = "";

});


taskList.addEventListener("click", function(e){

if(e.target.classList.contains("delete")){

e.target.parentElement.remove();

}

if(e.target.classList.contains("done")){

e.target.parentElement.style.textDecoration = "line-through";

}

});

}



/* ===================================
   MOCK TEST SYSTEM
=================================== */

if (window.location.pathname.includes("test.html")) {

const questions = [

{ q:"What is 5 + 7?", a:"12" },
{ q:"Capital of India?", a:"Delhi" },
{ q:"2 x 6 = ?", a:"12" }

];

let current = 0;
let score = 0;

const questionTitle = document.querySelector(".quiz-box h3");
const questionText = document.querySelector(".quiz-box p");
const result = document.querySelector(".result");
const button = document.querySelector(".quiz-box button");

function loadQuestion(){

questionText.innerText = questions[current].q;

}

button.addEventListener("click", function(){

const userAnswer = prompt("Enter your answer");

if(userAnswer === questions[current].a){

score++;

}

current++;

if(current < questions.length){

loadQuestion();

}else{

result.innerText =
"Your Score: " + score + " / " + questions.length;

}

});

loadQuestion();

}



/* ===================================
   DASHBOARD QUICK TOOLS
=================================== */

if (window.location.pathname.includes("dashboard.html")) {

const tools = document.querySelectorAll(".tool");

tools.forEach((tool,index)=>{

tool.addEventListener("click",function(){

if(index === 0){

window.location.href="notes.html";

}

if(index === 1){

window.location.href="homework.html";

}

if(index === 2){

window.location.href="planner.html";

}

if(index === 3){

window.location.href="test.html";

}

});

});

}



/* ===================================
   DASHBOARD STATS
=================================== */

if (window.location.pathname.includes("dashboard.html")) {

const cards = document.querySelectorAll(".card p");

if(cards.length >= 3){

cards[0].innerText = Math.floor(Math.random()*6+2) + " hours today";
cards[1].innerText = Math.floor(Math.random()*10) + " tasks completed";
cards[2].innerText = Math.floor(Math.random()*3) + " upcoming exams";

}

}
