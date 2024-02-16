window.addEventListener("DOMContentLoaded", function () {
  function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter }) {
    const slider = document.querySelector(container),
      slides = document.querySelectorAll(slide),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter);

    let slideIndex = 1;

    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
    } else {
      total.textContent = slides.length;
    }

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => (item.style.display = "none"));
      slides[slideIndex - 1].style.display = "block";

      if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    }

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    prev.addEventListener("click", () => {
      plusSlides(-1);

      dots.forEach((dot) => (dot.style.opacity = "0.5"));
      dots[slideIndex - 1].style.opacity = 1;
    });

    next.addEventListener("click", () => {
      plusSlides(1);

      dots.forEach((dot) => (dot.style.opacity = "0.5"));
      dots[slideIndex - 1].style.opacity = 1;
    });

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
      dots = [];
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("li");
      dot.classList.add("dot");
      dot.setAttribute("data-slide-to", i + 1);

      if (i == 0) {
        dot.style.opacity = 1;
      }

      indicators.append(dot);
      dots.push(dot);
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const slideTo = +e.target.getAttribute("data-slide-to");

        slideIndex = slideTo;
        showSlides(slideIndex);

        if (slideIndex < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = "0.5"));
        dots[slideIndex - 1].style.opacity = 1;
      });
    });
  }

  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
  });
});
