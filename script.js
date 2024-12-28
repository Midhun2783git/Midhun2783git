document.addEventListener("DOMContentLoaded", function() {
    const text = "HI, I am MIDHUN";
    const animatedText = document.getElementById("animatedText");
    let index = 0;

    function showText() {
        if (index < text.length) {
            animatedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(showText, 200); // Adjust the speed here
        } else {
            animatedText.style.opacity = 1; // Fade in the text
        }
    }

    showText();
});
