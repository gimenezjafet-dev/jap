const navLinks = document.querySelectorAll('.nav-link');
const sectionViews = document.querySelectorAll('.section-view');
const pageTitle = document.getElementById('pageTitle');
const roleSelector = document.getElementById('roleSelector');
const roleStatus = document.getElementById('roleStatus');
const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

function showSection(sectionId) {
  sectionViews.forEach((section) => {
    section.classList.toggle('active', section.id === sectionId);
  });

  navLinks.forEach((link) => {
    const isActive = link.dataset.section === sectionId;
    link.classList.toggle('active', isActive);
    if (isActive) {
      pageTitle.textContent = link.textContent;
    }
  });

  sidebar.classList.remove('open');
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => showSection(link.dataset.section));
});

roleSelector.addEventListener('change', () => {
  roleStatus.textContent = `Signed in as ${roleSelector.value}`;
});

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
