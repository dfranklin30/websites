document.addEventListener("DOMContentLoaded", function () {
    // Example animation logic
    function animateElement(element, animation) {
        element.classList.add("animated", animation);
        element.addEventListener("animationend", function () {
            element.classList.remove("animated", animation);
        });
    }

    const animation1 = document.getElementById("animation1");
    const animation2 = document.getElementById("animation2");

    animateElement(animation1, "bounce");
    animateElement(animation2, "fadeIn");
});
