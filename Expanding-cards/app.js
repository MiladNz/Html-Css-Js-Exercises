const cards = document.querySelectorAll('.card');
cards.forEach( card => {
    card.addEventListener('click' , () => {
        remoceActiveClasses();
        card.classList.add('active');
    });
});
function remoceActiveClasses(){
    cards.forEach( c => {
        c.classList.remove('active');
    });
}