// var body = document.querySelector('body')
// var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
// var menuContainer = document.querySelector('#main-menu-mobile');

// menuTrigger.onclick = function() {
//     menuContainer.classList.toggle('open');
//     menuTrigger.classList.toggle('is-active')
//     body.classList.toggle('lock-scroll')
// }

function toggleDark() {
    const element = document.body;
    const toggle = document.getElementById('toggle');

    const currentTheme = localStorage.getItem('theme') || null

    if (!currentTheme) {
        currentTheme = "light";
    }

    var nextTheme = currentTheme === "dark" ? "light" : "dark";

    if (nextTheme === "dark") {
        setDark();
    } else {
        setLight();
    }
}

function checkTheme() {
    const toggle = document.getElementById('toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const element = document.body;

    if (currentTheme === 'dark') {
        setDark();
    } else {
        setLight();
    }
}

function setDark() {
    const element = document.body;
    const toggle = document.getElementById('toggle-text');
    element.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
    toggle.classList.remove('fa-moon');
    toggle.classList.add('fa-sun');
}

function setLight() {
    const element = document.body;
    const toggle = document.getElementById('toggle-text');
    element.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');
}