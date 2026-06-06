const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 80));

  const update = () => {
    current += increment;

    if (current >= target) {
      counter.textContent = target + "+";
      return;
    }

    counter.textContent = current;
    requestAnimationFrame(update);
  };

  update();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.7,
  }
);

counters.forEach((counter) => observer.observe(counter));

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {
    navbar.style.background = "rgba(5, 8, 22, 0.94)";
    navbar.style.padding = "10px 8%";
  } else {
    navbar.style.background = "rgba(5, 8, 22, 0.72)";
    navbar.style.padding = "14px 8%";
  }
});