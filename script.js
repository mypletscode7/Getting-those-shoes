/* ==========================================
TOURMALINE X
MAIN JAVASCRIPT ENGINE
PART 1/3
========================================== */



// ==========================================
// PAGE LOADER
// ==========================================


window.addEventListener("load",()=>{


const loader =
document.querySelector(".page-loader");



if(loader){


setTimeout(()=>{


loader.style.opacity="0";


loader.style.pointerEvents="none";



setTimeout(()=>{


loader.remove();


},800);



},1200);


}



});









// ==========================================
// NAVBAR EFFECT
// ==========================================


const navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


if(!navbar)return;



if(window.scrollY > 80){


navbar.classList.add("scrolled");


}

else{


navbar.classList.remove("scrolled");


}


});









// ==========================================
// MOBILE MENU
// ==========================================


const menuButton =
document.querySelector(".menu-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");



if(menuButton){



menuButton.addEventListener("click",()=>{


mobileMenu.classList.toggle("open");


menuButton.classList.toggle("active");



});



}







document.querySelectorAll(".mobile-menu a")

.forEach(link=>{


link.addEventListener("click",()=>{


mobileMenu.classList.remove("open");


});


});









// ==========================================
// SCROLL REVEAL
// ==========================================


const revealElements =
document.querySelectorAll(

".reveal, .reveal-left, .reveal-right"

);





const revealObserver =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



entry.target.classList.add("active");



revealObserver.unobserve(entry.target);



}



});


},

{

threshold:.15

}

);






revealElements.forEach(element=>{


revealObserver.observe(element);


});









// ==========================================
// SCROLL PROGRESS BAR
// ==========================================


const progress =
document.querySelector(".scroll-progress");



window.addEventListener("scroll",()=>{


if(!progress)return;



const height =

document.documentElement.scrollHeight -

window.innerHeight;



const progressAmount =

(window.scrollY / height) * 100;



progress.style.width =

progressAmount + "%";



});









// ==========================================
// CUSTOM CURSOR
// ==========================================


const cursor =
document.querySelector(".cursor");


const follower =
document.querySelector(".cursor-follower");



let mouseX=0;

let mouseY=0;

let followerX=0;

let followerY=0;



document.addEventListener(

"mousemove",

(e)=>{


mouseX=e.clientX;

mouseY=e.clientY;



if(cursor){


cursor.style.left =
mouseX+"px";


cursor.style.top =
mouseY+"px";


}



});






function animateFollower(){


followerX +=

(mouseX-followerX)*0.15;


followerY +=

(mouseY-followerY)*0.15;



if(follower){


follower.style.left=

followerX+"px";


follower.style.top=

followerY+"px";


}



requestAnimationFrame(

animateFollower

);


}



animateFollower();









// Cursor hover effect


const cursorTargets =

document.querySelectorAll(

"a,button,.room-card,.gallery-grid div"

);



cursorTargets.forEach(item=>{


item.addEventListener(

"mouseenter",

()=>{


if(follower){


follower.style.transform=

"translate(-50%,-50%) scale(1.8)";


}


}

);




item.addEventListener(

"mouseleave",

()=>{


if(follower){


follower.style.transform=

"translate(-50%,-50%) scale(1)";


}


}

);



});
/* ==========================================
BOOKING MODAL SYSTEM
========================================== */


const bookingButtons =
document.querySelectorAll(

".booking-open, .luxury-button[href='#booking']"

);



const bookingModal =
document.querySelector(".booking-modal");



const closeModal =
document.querySelector(".close-modal");





bookingButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


if(button.getAttribute("href")==="#booking"){

e.preventDefault();

}



if(bookingModal){

bookingModal.classList.add("active");


document.body.style.overflow="hidden";


}



});


});





if(closeModal){


closeModal.addEventListener("click",()=>{


bookingModal.classList.remove("active");


document.body.style.overflow="";


});


}






if(bookingModal){


bookingModal.addEventListener(

"click",

(e)=>{


if(e.target===bookingModal){


bookingModal.classList.remove("active");


document.body.style.overflow="";


}


}

);


}









// ==========================================
// REVIEW SLIDER
// ==========================================



const reviews=[


{


text:

"Beautiful rooms and wonderful hospitality. A peaceful experience.",


author:

"Sarah — Germany"


},



{


text:

"The perfect place to begin our Namibian adventure.",


author:

"Michael — South Africa"


},



{


text:

"Friendly service and a very comfortable stay.",


author:

"Anna — Netherlands"


},



{


text:

"An unforgettable experience in Windhoek.",


author:

"David — United Kingdom"


}



];






let reviewIndex=0;



const reviewText=

document.querySelector("#review-text");


const reviewAuthor=

document.querySelector("#review-author");



const nextReview=

document.querySelector(".review-arrow.next");



const previousReview=

document.querySelector(".review-arrow.previous");







function updateReview(){



if(!reviewText || !reviewAuthor)return;



const reviewContainer=

document.querySelector(".review-content");



reviewContainer.style.opacity="0";

reviewContainer.style.transform=

"translateY(30px)";




setTimeout(()=>{


reviewText.textContent=

reviews[reviewIndex].text;



reviewAuthor.textContent=

reviews[reviewIndex].author;




reviewContainer.style.opacity="1";


reviewContainer.style.transform=

"translateY(0)";



},400);



}







if(nextReview){


nextReview.onclick=()=>{


reviewIndex++;



if(reviewIndex >= reviews.length){


reviewIndex=0;


}



updateReview();



};


}





if(previousReview){


previousReview.onclick=()=>{


reviewIndex--;



if(reviewIndex < 0){


reviewIndex=

reviews.length-1;


}



updateReview();



};


}





setInterval(()=>{


reviewIndex++;


if(reviewIndex >= reviews.length){

reviewIndex=0;

}


updateReview();



},6000);









// ==========================================
// GALLERY LIGHTBOX
// ==========================================



const galleryImages =

document.querySelectorAll(

".gallery-grid img"

);



const lightbox =

document.querySelector(".gallery-lightbox");



const lightboxImage =

document.querySelector(".lightbox-image");



const closeGallery =

document.querySelector(".close-gallery");





galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


if(!lightbox)return;



lightbox.classList.add("active");



lightboxImage.src=

image.src;



document.body.style.overflow="hidden";


});


});






if(closeGallery){


closeGallery.onclick=()=>{


lightbox.classList.remove("active");


document.body.style.overflow="";


};


}









// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================



const magneticButtons=

document.querySelectorAll(

".luxury-button"

);





magneticButtons.forEach(button=>{


button.addEventListener(

"mousemove",

(e)=>{


const rect=

button.getBoundingClientRect();



const x=

e.clientX - rect.left - rect.width/2;


const y=

e.clientY - rect.top - rect.height/2;



button.style.transform=

`

translate(

${x/8}px,

${y/8}px

)

scale(1.05)

`;



});






button.addEventListener(

"mouseleave",

()=>{


button.style.transform="";


});


});









// ==========================================
// HERO PARALLAX
========================================== */


const heroImage=

document.querySelector(".hero-image");



window.addEventListener(

"scroll",

()=>{


if(!heroImage)return;



heroImage.style.transform=

`

translateY(

${window.scrollY * .25}px

)

`;



});
/* ==========================================
BOOKING FORM HANDLING
========================================== */



const bookingForm =

document.querySelector("#booking-form");




if(bookingForm){



bookingForm.addEventListener(

"submit",

async(e)=>{


e.preventDefault();





const bookingData={



name:

document.querySelector("#guest-name").value,



email:

document.querySelector("#guest-email").value,



phone:

document.querySelector("#guest-phone").value,



room:

document.querySelector("#room-select").value,



checkIn:

document.querySelector("#check-in").value,



checkOut:

document.querySelector("#check-out").value,



guests:

document.querySelector("#guests").value,



status:

"Pending"



};






console.log(

"Booking Request:",

bookingData

);





const button =

bookingForm.querySelector("button");



button.innerHTML=

"Sending Request...";



button.disabled=true;






setTimeout(()=>{


button.innerHTML=

"✓ Request Sent";



bookingForm.reset();



},1500);





}

);


}









// ==========================================
// CONTACT FORM
// ==========================================



const contactForm=

document.querySelector("#contact-form");





if(contactForm){



contactForm.addEventListener(

"submit",

(e)=>{


e.preventDefault();



const button=

contactForm.querySelector("button");



button.innerHTML=

"Sending...";





setTimeout(()=>{


button.innerHTML=

"Message Sent ✓";


contactForm.reset();



},1200);



}

);



}









// ==========================================
// DATE VALIDATION
// ==========================================



const checkIn=

document.querySelector("#check-in");


const checkOut=

document.querySelector("#check-out");




if(checkIn && checkOut){



const today=

new Date()

.toISOString()

.split("T")[0];



checkIn.min=today;



checkIn.addEventListener(

"change",

()=>{


checkOut.min=

checkIn.value;


});


}









// ==========================================
// LAZY LOAD IMAGES
// ==========================================



const lazyImages=

document.querySelectorAll(

"img"

);





lazyImages.forEach(img=>{


img.loading="lazy";


});









// ==========================================
// SMOOTH ANCHOR SCROLL
// ==========================================



document.querySelectorAll(

'a[href^="#"]'

)

.forEach(anchor=>{


anchor.addEventListener(

"click",

function(e){


const target=

document.querySelector(

this.getAttribute("href")

);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});









// ==========================================
// GOOGLE MAPS INITIALIZATION
// ==========================================



window.initMap=function(){



const location={


lat:-22.5609,


lng:17.0658


};





const map=

new google.maps.Map(

document.getElementById("map"),

{


zoom:14,


center:location,


disableDefaultUI:true


}

);







new google.maps.Marker({


position:location,


map:map,


title:

"Tourmaline Guesthouse"


});



};









// ==========================================
// PAGE VISIBILITY OPTIMIZATION
// ==========================================



document.addEventListener(

"visibilitychange",

()=>{



if(document.hidden){


document.body.classList.add(

"inactive"

);


}

else{


document.body.classList.remove(

"inactive"

);


}



}

);









// ==========================================
// REMOVE IMAGE DRAGGING
// ==========================================



document.querySelectorAll(

"img"

)

.forEach(img=>{


img.addEventListener(

"dragstart",

(e)=>{


e.preventDefault();


});


});









// ==========================================
// CONSOLE BRANDING
// ==========================================



console.log(`

🌿 Tourmaline Guesthouse

Luxury Namibia Experience

Website Engine Loaded Successfully

`);
