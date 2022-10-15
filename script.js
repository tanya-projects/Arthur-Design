'use strict';

//// MAIN VARIABLES
const scrollElements = document.querySelectorAll('.scroll');
const btnShowProjects = document.querySelector('.btn__show');
const projectPart2 = document.querySelector('.project__content-2');
const questions = document.querySelectorAll('.faq__question');
const answers = document.querySelectorAll('.faq__answer');

//// FUNCTIONS

const scrollToSection = function (e, item) {
  e.preventDefault();
  // href is equal to section ID in HTML
  let sectionID;
  // check if we scroll to section using link or scroll up to top
  if (item.closest('.navigation__logo')) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    sectionID = item.attributes.href.nodeValue.slice(1);
    document
      .getElementById(`${sectionID}`)
      .scrollIntoView({ behavior: 'smooth' });
  }
};

// NAVIGATION SCROLLING

scrollElements.forEach((link) =>
  link.addEventListener('click', function (e) {
    scrollToSection(e, link);
  })
);

// LOADIN MORE/LESS PROJECTS
console.log(btnShowProjects);
btnShowProjects.addEventListener('click', function () {
  projectPart2.classList.toggle('hidden');

  if (btnShowProjects.textContent === 'Show more') {
    btnShowProjects.textContent = 'Show less';
  } else if (btnShowProjects.textContent === 'Show less') btnShowProjects.textContent = 'Show more';
});
