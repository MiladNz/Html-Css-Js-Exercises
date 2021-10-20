const searchbtn = document.querySelector('.search');
const inp = document.querySelector('.inp');

searchbtn.addEventListener("click" , showInput);

function showInput(){
    if(inp.style.display === 'none'){
        inp.style.display = 'flex';
    }else {
        inp.style.display = 'none';
      }
}
