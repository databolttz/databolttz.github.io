/* =====================================================
   DATABOLTTZ WEBSITE V2.0
   JavaScript Functions
===================================================== */


// Website loading confirmation

console.log(
    "Databolttz Research & Statistical Consulting Services website loaded successfully"
);




// ===============================
// Animated Counters
// ===============================


const counters = document.querySelectorAll(".stat h2");


const startCounter = (counter) => {

    const target = parseInt(
        counter.innerText.replace("+","")
    );

    let current = 0;

    const increment = target / 100;


    const updateCounter = () => {


        if(current < target){

            current += increment;

            counter.innerText =
            Math.ceil(current) + "+";


            setTimeout(
                updateCounter,
                20
            );


        }

        else {

            counter.innerText =
            target + "+";

        }


    };


    updateCounter();

};



// Activate counters when visible

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

    startCounter(entry.target);

    observer.unobserve(entry.target);

}


});


},
{
threshold:0.6
}
);



counters.forEach(counter=>{

observer.observe(counter);

});







// ===============================
// Smooth scrolling
// ===============================


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


e.preventDefault();


document
.querySelector(
this.getAttribute("href")
)

.scrollIntoView({

behavior:"smooth"

});


});


});







// ===============================
// Scroll Reveal Animation
// ===============================


const revealElements =
document.querySelectorAll(
".card, .stat, .section"
);



const revealObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = 1;

entry.target.style.transform =
"translateY(0)";


}

});


},

{
threshold:0.15
}

);



revealElements.forEach(element=>{


element.style.opacity=0;

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .8s ease";


revealObserver.observe(element);


});







// ===============================
// Mobile Navigation
// ===============================


const navLinks =
document.querySelector(".nav-links");


const menuButton =
document.querySelector(".menu-toggle");



if(menuButton){


menuButton.addEventListener(
"click",
()=>{


navLinks.classList.toggle(
"active"
);


});

}
