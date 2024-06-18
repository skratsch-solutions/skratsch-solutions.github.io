

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

function sendEmail(email) {
        const data = JSON.stringify({
        "Messages": [{
            "From": {"Email": "steve@skratsch.com", "Name": "Steve Kaschimer"},
            "To": [{"Email": "steve@skratsch.com", "Name": "Steve Kaschimer"}],
            "Subject": "New Subscriber",
            "TextPart": "You have a new Skratsch subscriber: " + email
        }]
        });
    
        const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: {'Content-Type': 'application/json'},
        auth: {username: '<API Key>', password: '<Secret Key>'},
        };
    
        fetch(config.url, config);
    }