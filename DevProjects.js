
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
  }, { threshold: 0.1 });

  // Hover animation for each paragraph
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

              span.addEventListener('mouseover', function () {
                  span.style.transform = 'scale(1.04)';
                  // span.style.boxShadow = '0 0 2px rgb(255, 255, 255)';
                  // span.style.color = '#ff4500';
              });

              span.addEventListener('mouseout', function () {
                  span.style.transform = 'scale(1)';
                  span.style.boxShadow = 'none';
              });
          }
      });
  });

  // Create a container for snowflakes
  const snowContainer = document.createElement('div');
  snowContainer.style.position = 'fixed';
  snowContainer.style.top = '0';
  snowContainer.style.left = '0';
  snowContainer.style.width = '100vw';
  snowContainer.style.height = '100vh';
  snowContainer.style.pointerEvents = 'none';
  snowContainer.style.overflow = 'hidden';
  document.body.appendChild(snowContainer);

  // Falling snow
  const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw'; 
      snowflake.style.animationDuration = Math.random() * 3 + 12 + 's'; 
      snowflake.style.opacity = Math.random(); 
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 
      snowflake.innerText = '❄️'; 
      snowContainer.appendChild(snowflake);

      setTimeout(() => {
          snowflake.remove(); 
      }, 5000); 
  };

  // Create snowflakes every 100 ms
  setInterval(createSnowflake, 100);
});
