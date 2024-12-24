document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('p');

  const sections = document.querySelectorAll("section");

  // Scroll Animation for Sections
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show");
          }
      });
  }, { threshold: 0.1});

  // hover animation for each paragraph
  sections.forEach((section) => observer.observe(section));
  paragraphs.forEach(p => {
    const lines = p.textContent.split('. ');
    p.innerHTML = ''; 

    lines.forEach(line => {
      if (line.trim().length > 0) {
        const span = document.createElement('span');
        span.textContent = line.trim() + '.';
        span.style.display = 'inline-block';
        span.style.transition = 'transform 0.3s, color 0.3s'; 

        p.appendChild(span);

        span.addEventListener('mouseover', function() {
          span.style.transform = 'scale(1.04)';
          // span.style.boxShadow = '0 0 2px rgb(255, 255, 255)';
          // span.style.color = '#ff4500';
        });

        span.addEventListener('mouseout', function() {
          span.style.transform = 'scale(1)';
          span.style.boxShadow = 'none';
        });
      }
    });
  });
});









