const ham = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");
const checkInfos = document.querySelectorAll(".checkInfo"); // Use querySelectorAll
const viewInfos = document.querySelectorAll(".view-info"); // Use querySelectorAll
 

ham.addEventListener("click", () => {
    ham.classList.toggle("fa-xmark");
    navLinks.classList.toggle("move");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navLinks.classList.toggle("move");
        ham.classList.toggle("fa-xmark");
    });
});

// Add event listener to each project
checkInfos.forEach((checkInfo, index) => {
    const viewInfo = viewInfos[index]; // Match the corresponding view-info
    checkInfo.addEventListener("click", (e) => {
        e.stopPropagation();
        viewInfo.classList.toggle("showHide");
        checkInfo.querySelector(".eye").classList.toggle("fa-xmark");
    });
});
