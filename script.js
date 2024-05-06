function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function newsTicker() {
  const ticker = document.querySelector('.news-ticker ul');
  const tickerItems = document.querySelectorAll('.news-ticker li');
  let currentIndex = 0;

  setInterval(() => {
    tickerItems[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % tickerItems.length;
    tickerItems[currentIndex].style.opacity = '1';
  }, 3000); // Adjust the interval (in milliseconds) to control the speed of the ticker
}

// Call the function when the page loads
window.onload = newsTicker;
