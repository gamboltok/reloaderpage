document.addEventListener('DOMContentLoaded', ()=>{
    "use strict";
    const shadowtab = document.querySelector('.shadowtab a');

    shadowtab.addEventListener('click', (event) => {
        window.open('index2.html');
    });
});