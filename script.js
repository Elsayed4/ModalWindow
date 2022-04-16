'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// open model function
const openModels = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// close model function
let closeModels = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i = 0; i< btnShowModal.length ; i++)
    btnShowModal[i].addEventListener('click',openModels)
    btnCloseModal.addEventListener('click',closeModels);
    overlay.addEventListener('click',closeModels);

 // handling scape btn   
document.addEventListener('keyup',function(e){
   if(e.key==='Escape'  && !modal.classList.contains('hidden')){
       console.log("ESC");
       closeModels();
   }
})