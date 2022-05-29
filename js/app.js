const sections = document.querySelectorAll('section'); //get sections
const doc = document.createDocumentFragment(); //make docFragment
let nav = document.querySelector('#navbar__list'); //get navigation

for (let i = 0; i < sections.length; i++) { // make loop for each section
    const newElement = document.createElement('li'); //createElement of li_element 
    const newElement2 = document.createElement('a'); //createElement of a_element 
    newElement.className = "navbar__menu"; //set className of li_element
    newElement2.classList.add('menu__link');
    newElement2.href = `#section${i + 1}`; //set href of section
    newElement2.textContent = `Section ${i + 1}`; //set text content of section
    newElement.appendChild(newElement2); //appendChild of li_element
    doc.appendChild(newElement);
}
nav.appendChild(doc);
// only way 
document.addEventListener('click', function(e) {
    e.preventDefault();
    const check = e.target;
    const sec = check.getAttribute('href').slice(1);
    document.getElementById(sec).scrollIntoView({ behavior: 'smooth' });
});

function sectionRunning() {
    for (let i = 0; i < sections.length; i++) {
        let sides = sections[i].getBoundingClientRect();
        if (sides.top <= 150 && sides.bottom >= 150) {
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList.remove('your-active-class');
        }
    }
}
document.addEventListener('scroll', sectionRunning);