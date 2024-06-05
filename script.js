const ham = document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");
const navItems=document.querySelectorAll(".nav-links li a")

ham.addEventListener("click", () => {
    ham.classList.toggle("fa-xmark")
    navLinks.classList.toggle("move");
});

navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        navLinks.classList.toggle("move");
        ham.classList.toggle("fa-xmark")
    })
})


