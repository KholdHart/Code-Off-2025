  const slider = document.getElementById("slider");
    const container = document.getElementById("container");

    slider.addEventListener("mouseenter", () => {
      const maxX = container.clientWidth - slider.clientWidth;
      const maxY = container.clientHeight - slider.clientHeight;
      slider.style.left = Math.random() * maxX + "px";
      slider.style.top = Math.random() * maxY + "px";
    });

    slider.addEventListener("input", () => {
      if (Math.random() < 0.3) {
        slider.value = Math.floor(Math.random() * 100);
        alert("Oops! Volume reset ");
      }
    });