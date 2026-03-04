// ------------------------------
// LOGIN PAGE
// ------------------------------

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



// ------------------------------
// SIGNUP PAGE
// ------------------------------

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

alert("Account created successfully!");

window.location.href = "login.html";

});

}



// ------------------------------
// NOTES SUMMARIZER
// ------------------------------

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

// Demo summary logic

const short = text.substring(0,150);

summary.innerText = short + "...";

});

}



// ------------------------------
// HOMEWORK HELPER
// ------------------------------

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
"AI Explanation: This is a demo answer. When AI API is connected, the real explanation will appear here.";

});

}



// ------------------------------
// STUDY PLANNER
// ------------------------------

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

div.innerText = task + " - " + date;

taskList.appendChild(div);

taskInput.value = "";

});

}



// ------------------------------
// MOCK TEST
// ------------------------------

if (window.location.pathname.includes("test.html")) {

const submitBtn = document.querySelector(".quiz-box button");
const result = document.querySelector(".result");

submitBtn.addEventListener("click", function(){

const selected = document.querySelector("input[name='q1']:checked");

if(!selected){

result.innerText = "Please select an answer";

return;

}

const answer = selected.parentElement.innerText;

if(answer.includes("12")){

result.innerText = "Correct Answer ✅";

}else{

result.innerText = "Wrong Answer ❌";

}

});

}



// ------------------------------
// DASHBOARD QUICK TOOLS
// ------------------------------

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
