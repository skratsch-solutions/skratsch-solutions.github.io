function toggleDark() {
    const element = document.body;
    const toggle = document.getElementById('toggle');

    const currentTheme = localStorage.getItem('theme') || null

    if(!currentTheme) {
        currentTheme = "light";
    }

    var nextTheme = currentTheme === "dark" ? "light" : "dark";

    if(nextTheme === "dark") {
        element.dataset.theme = nextTheme;
        //element.classList.add(nextTheme);
        localStorage.setItem('theme',nextTheme);
        toggle.classList.remove('fa-moon');
        toggle.classList.add('fa-sun');
    } else {
        element.dataset.theme = nextTheme;
        //element.classList.remove('dark')
        localStorage.setItem('theme',nextTheme);
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon');
    }
}

function checkTheme() {
    const toggle = document.getElementById('toggle');
    const currentTheme = localStorage.getItem('theme') || null

    if(!currentTheme) {
        currentTheme = "light";
    }
    if (currentTheme === 'dark') {
        //document.body.classList.add('dark');
        localStorage.setItem('theme',currentTheme)
        toggle.classList.remove('fa-moon');
        toggle.classList.add('fa-sun');
    } else {
        //document.body.classList.remove('dark');
        localStorage.setItem('theme',currentTheme)
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon');
        //console.log("light");
    }
}