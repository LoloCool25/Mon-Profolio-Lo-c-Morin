document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider_container");

  sliders.forEach((slider, sliderIndex) => {
    const images = slider.querySelectorAll("img");
    let currentIndex = 0;

    const boxImg = slider.closest(".box_img");
    const dotsContainer = boxImg.querySelector(".dots");

    // Créer les points
    images.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    };

    const nextBtn = boxImg.querySelector(".next");
    const prevBtn = boxImg.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });

    // Clic sur les points
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
      });
    });

    updateSlider();
  });
});
