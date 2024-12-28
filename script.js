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

document.addEventListener("DOMContentLoaded", function() {
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml12 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
        });
});
