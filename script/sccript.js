let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};


const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.hero',{delay:200, origin: 'top'});
sr.reveal('.subject',{delay:450, origin: 'top'});
sr.reveal('.social',{delay:600, origin: 'left'});
sr.reveal('.buttons',{delay:800, origin: 'right'});
