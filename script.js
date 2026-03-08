// Scroll to projects button

document.getElementById("projectBtn").onclick = function(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
};


// Mobile menu toggle

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

menuBtn.onclick = function(){
if(nav.style.display === "block"){
nav.style.display = "none";
}else{
nav.style.display = "block";
}
};