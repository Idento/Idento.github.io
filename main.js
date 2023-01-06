let menu = document.getElementsByClassName('menulow');

function updateMenu() {
  if (window.matchMedia("(max-width: 600px)").matches && menu[0].style.display === 'none') {
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.display = 'flex';
      menu[i].style.visibility = 'visible';
    }
  } else {
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.display = 'none';
      menu[i].style.visibility = 'hidden';
    }
  }
}
function forcereset() {
  if (!window.matchMedia('(max-width: 600px)').matches){
    for (let i = 0; i < menu.length; i++){
    menu[i].style.display = 'none';
    menu[i].style.visibility = 'hidden';
    }
  }
}

updateMenu();

window.addEventListener('resize', forcereset);
document.getElementById('menubar').addEventListener('click', updateMenu);