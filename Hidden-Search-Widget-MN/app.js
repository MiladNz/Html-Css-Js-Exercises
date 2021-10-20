const container = document.querySelector('.container');
const searchbtn = document.querySelector('.search-btn');
const inp = document.querySelector('.inp');

searchbtn.addEventListener('click' , showFunction);

function showFunction(){
        container.classList.toggle('active');
        inp.focus();
}
