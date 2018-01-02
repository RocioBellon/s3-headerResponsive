'use strict';

console.log('>> Ready :)');

function init(){
  var menu = document.querySelector('.button-menu');
  menu.addEventListener('click', menuTrigger);
}

function menuTrigger(){
  var menuHidden = document.querySelector('.menu');
  menuHidden.classList.toggle('hidden');
}

init();
