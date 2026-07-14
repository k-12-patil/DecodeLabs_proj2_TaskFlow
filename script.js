// Mobile Navbar

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// Dark Mode

const themeToggle =
document.getElementById("theme-toggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeToggle.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeToggle.innerHTML="🌙";

}

});

}

// Load Theme

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

if(themeToggle){

themeToggle.innerHTML="☀️";

}

}

// Customer Reviews Slider

const reviews = [

"⭐⭐⭐⭐⭐ Amazing food and excellent service!",

"⭐⭐⭐⭐⭐ Best restaurant in the city.",

"⭐⭐⭐⭐⭐ Fresh ingredients and fast delivery.",

"⭐⭐⭐⭐⭐ Loved the ambience and taste."

];

let currentReview = 0;

const reviewText =
document.getElementById("review-text");

if(reviewText){

setInterval(()=>{

currentReview++;

if(currentReview >= reviews.length){

currentReview = 0;

}

reviewText.innerText =
reviews[currentReview];

},3000);

}

// Back To Top

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

// Contact Form Validation

function validateForm(){

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let phone =
document.getElementById("phone").value.trim();

if(name === ""){

alert("Please Enter Name");

return false;

}

if(!email.includes("@")){

alert("Invalid Email");

return false;

}

if(phone.length < 10){

alert("Enter Valid Phone Number");

return false;

}

alert("Form Submitted Successfully");

return true;

}

// Menu Filter

function filterMenu(category){

let items =
document.querySelectorAll(".menu-item");

items.forEach(item=>{

if(category==="all"){

item.style.display="block";

}
else if(item.classList.contains(category)){

item.style.display="block";

}
else{

item.style.display="none";

}

});

}