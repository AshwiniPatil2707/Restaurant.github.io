// page loader
document.querySelector(".page-loader").classList.add("fade-out");
setTimeout(function(){
    document.querySelector(".page-loader").style.display="none";
})


// screen animation
window.addEventListener("load", function(){
    AOS.init();
} );


// navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav()
{
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking 
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

// sticky header
window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

// menu tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active"))
    {
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        AOS.init();
    }
});