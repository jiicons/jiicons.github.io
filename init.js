function toggleNav(e) {
  e.stopPropagation();
  e.preventDefault();
  const menu = document.querySelector("nav ul.right");
  if (menu !== null) {
    const style = getComputedStyle(menu);
    // console.log(style.display);
    // console.log(menu.style.display);
    if (style.display === "none") {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }
}
function hideMenu() {
  const menu = document.querySelector("nav ul.right");
  const toggle = document.querySelector(".right-toggle");
  const style = getComputedStyle(toggle);
  if (menu && style.display === 'block') {
    menu.style.display = 'none';
  }
}
function bodyClick() {
  hideMenu();
}
function bodyLoad() {
  const toggle = document.querySelector(".right-toggle");
  if (toggle !== null) {
    toggle.addEventListener('click', toggleNav);
  }
  window.addEventListener('scroll', function() {
    hideMenu();
  });
  window.addEventListener('resize', function() {
    const menu = document.querySelector("nav ul.right");
    menu.style.removeProperty('display')
  })
  document.body.addEventListener("click", bodyClick);
}