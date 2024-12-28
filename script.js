// document.addEventListener("DOMContentLoaded", function() {
//     const text = "HI, I am MIDHUN";
//     const animatedText = document.getElementById("animatedText");
//     let index = 0;

//     function showText() {
//         if (index < text.length) {
//             animatedText.innerHTML += text.charAt(index);
//             index++;
//             setTimeout(showText, 200); // Adjust the speed here
//         } else {
//             animatedText.style.opacity = 1; // Fade in the text
//         }
//     }

//     showText();
// });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
