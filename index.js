const toggle = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const header = document.querySelector(".stickheader");

function searchPlaylist() {

    var filter_text = document.getElementById("search_bar").value.toUpperCase();
    var card = document.getElementsByClassName("card");

    for (var i = 0; i < card.length; i++) {

        var title = card[i].getElementsByClassName("title")[0];
        var str = title.innerText || title.textContent;

        if (str.toUpperCase().indexOf(filter_text) > -1) {

            card[i].style.display = "";
        } else {

            card[i].style.display = "none";
        }
    }
}
if (localStorage.getItem("light-mode") == "true") {
    body.classList.add("light-mode");
    header.classList.add("light-mode-header");
    document.querySelector(`.moon`).style.display = "inline-block";
    document.querySelector(`.sun`).style.display = "none";
  }

  toggle.addEventListener("click", function (e) {
    const nextIcon = e.target.getAttribute("data-set");
    e.target.style.display = "none";
    console.log(nextIcon);
    //   document.querySelector("")
    if (nextIcon === "moon") {
      body.classList.add("light-mode");
      header.classList.add("light-mode-header");
      document.querySelector(`.${nextIcon}`).style.display = "inline-block";
      localStorage.setItem("light-mode", true);
    } else {
      body.classList.remove("light-mode");
      header.classList.remove("light-mode-header");
      document.querySelector(`.${nextIcon}`).style.display = "inline-block";
      localStorage.setItem("light-mode", false);
    }
  });
// function darkMode() {
//     bodyChange.style.backgroundColor = "rgb(0 0 0 / 50%)";
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
// }
// function lightMode() {
//     bodyChange.style.backgroundColor = "rgb(255 255 255 / 50%)";
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
// }
// function switchTheme(event) {
//     if (event.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//         darkMode();
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//         lightMode();
//     }
// }

// // event listner
// toggleSwitch.addEventListener('change', switchTheme);

// // check local storage for theme
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//         darkMode();
//     }
// }