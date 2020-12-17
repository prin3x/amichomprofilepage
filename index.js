const navbarActiveSelector = document.querySelectorAll('li.nav-item');
const ctaButton = document.querySelector('.spinner');
const websiteNav = document.querySelector('a[href="#website"]').parentElement;

// Eventlistener

function addActiveToNavItem(e) {
  navbarActiveSelector.forEach((item) => item.classList.remove('active'));
  e.target.parentElement.classList.add('active');
}

function addActiveToWebsite(e) {
  navbarActiveSelector.forEach((item) => item.classList.remove('active'));
  websiteNav.classList.add('active');
}

for (let i = 0; i < navbarActiveSelector.length; i++) {
  navbarActiveSelector[i].addEventListener('click', addActiveToNavItem);
}

ctaButton.addEventListener('click', addActiveToWebsite);
