let btns = document.querySelectorAll(".box button");
btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let img = this.parentElement.querySelector(".box-img img");
        let imgSrc = img.src;
        // let whatsappLink = `https://wa.me/6280348611?text=${imgSrc}How_Much`;
        let url = `https://wa.me/9569374626?text=${encodeURIComponent(imgSrc + " " + "Is this available")}`;
        console.log(url);
        window.open(url, "_blank");
    });
});

let hamburger = document.getElementById('hamburger');
let navul = document.getElementById('nav-ul');
hamburger.addEventListener('click', () => {
    if (navul.style.display === 'flex') {
        navul.style.display = 'none';
    } else {
        navul.style.display = 'flex';
    }
});
navul.addEventListener('click', () => {
    navul.style.display = 'none';
});
//   if(navul.style.display="none"){
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="flex";
//     })
//   } else {
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="none";
//     })
//   }







//     let clicked = false;
//     if (clicked == false) {
//     let hamburger = document.getElementById('hamburger');
//     let navul = document.getElementById('nav-ul');
//     hamburger.addEventListener("click",() =>{
//         navul.style.display="flex";
//         clicked = true;
//         if(clicked == true){
//             hamburger.addEventListener("click",() =>{
//                 navul.style.display="none";
//                 clicked = false;
//                 console.log(clicked);
//                 return;
//             })
//         }
//         return;
//     })

// }
// hamburger.addEventListener()


document.getElementById('contact-p-email').addEventListener('click', function () {
    window.location.href = 'mailto:ayushbatham34@gmail.com?subject=Hi&body=Hello%20there';
});
document.getElementById('contact-p-instagram').addEventListener('click', () => {
    window.location.href = 'https://instagram.com/yourprofile', '_blank'
})
document.getElementById('contact-p-number').addEventListener('click', () => {
    window.open = 'www.google.com', '_blank'
})

const galleryBtn = document.getElementById("gallery-btn");
let isOpen = false;

galleryBtn.addEventListener("click", () => {
  let extraBoxes = document.querySelectorAll(".extra"); // sirf extra wale select karo

  if (isOpen) {
    // Hide only extra boxes
    extraBoxes.forEach(box => {
      box.classList.add("nobox");
      box.classList.remove("box");
    });
    galleryBtn.textContent = "Open Gallery";
    isOpen = false;
  } else {
    // Show only extra boxes
    extraBoxes.forEach(box => {
      box.classList.add("box");
      box.classList.remove("nobox");
    });
    galleryBtn.textContent = "Close Gallery";
    isOpen = true;
  }
});
document.getElementById('contact-p-email').addEventListener('click', ()=>{
    window.location.href = "mailto:ayushbatham34@gmail.com?subject=Inquiry&body=Hello Ayush, I want to know about your products.";
});
document.getElementById('contact-p-instagram').addEventListener('click', ()=>{
    window.location.href = "https://instagram.com/ayush_.ab._";
});
document.getElementById('contact-p-number').addEventListener('click', ()=>{
      window.location.href = "tel:+919876543210";
});