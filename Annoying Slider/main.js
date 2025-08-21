var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = "linear-gradient(90deg, rgba(255, 0, 0) " + x + "%, rgba(255, 255, 255) " + x + "%)";
    slider.style.background = color;
});