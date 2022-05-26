let one_hint=document.getElementById("one_hint")
let сlick_money=document.getElementById("сlick_money")
let progress=document.getElementById("progress")
let tasks=document.getElementById("tasks")
const sandwichmenu = document.querySelector('#sandwichmenu');
const js_menu = document.querySelector('.js_menu');

sandwichmenu.addEventListener('click', function(e) {
  e.preventDefault();
  sandwichmenu.classList.toggle('active');
  js_menu.classList.toggle('active');
});
let balance = 0;
сlick_money.onclick=function(){
  balance++;
  one_hint.innerHTML="Баланс: " + balance;
}
progress.onclick=function(){
  console.log("Достижения: ");
}
tasks.onclick=function(){
  console.log("Задания: ");
}