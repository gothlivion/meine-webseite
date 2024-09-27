// Funktionen von sub-containern
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('#skills ul li, #project ul li, #experience ul li, #education ul li, #lzk ul li, #download ul li, #contact ul li, #impressum ul li');
        
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const subContainer = this.querySelector('.sub-container');
            if (subContainer) {
                subContainer.classList.toggle('open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selektiere sowohl die Listenelemente unter #skills als auch unter #project
    const listItems = document.querySelectorAll('#skills ul li, #project ul li');
    
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Lese die URL aus dem data-url Attribut des geklickten Listenelements
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

// Dark Light Mode
const toggleButton = document.getElementById('toggleTheme');
let isDarkMode = true;

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isDarkMode = !isDarkMode;
    toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});




// Funktion zum Umschalten von "collapsible"-Elementen
document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName('collapsible');

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Funktion zum Berechnen des Durchschnitts
    function calculateAverage() {
        const scores = document.querySelectorAll('.score');
        let total = 0;
        let count = 0;

        scores.forEach(scoreElement => {
            const text = scoreElement.textContent;
            const match = text.match(/(\d+,\d+) %/);
            if (match) {
                total += parseFloat(match[1].replace(',', '.'));
                count++;
            }
        });

        if (count > 0) {
            return (total / count).toFixed(2);
        } else {
            return '0.00';
        }
    }

    // Funktion zum Aktualisieren des Durchschnitts
    function updateAverage() {
        const averageScoreElement = document.getElementById('average-score');
        const average = calculateAverage();
        averageScoreElement.textContent = `Durchschnittsbewertung aller Lernzielkontrollen - ${average} %`;
    }

    // Durchschnitt aktualisieren, wenn die Seite geladen wird
    updateAverage();
});

// Scroll nach oben
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Password
document.addEventListener('DOMContentLoaded', function () {
    const correctPassword = "0000"; // Hier das gewünschte Passwort festlegen
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');
    const passwordSection = document.getElementById('password-section');
    const protectedContent = document.getElementById('protected-content');
    const contactSection = document.getElementById('contact-section');

    // Funktion zur Passwortüberprüfung
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordSection.style.display = 'none'; // Passwort-Eingabe ausblenden
            contactSection.style.display = 'none'; // Kontakt Formular ausblenden
            protectedContent.style.display = 'block'; // Geschützten Inhalt anzeigen
        } else {
            errorMessage.style.display = 'block'; // Fehlermeldung anzeigen
        }
    }

    // Klick auf den Bestätigen-Button
    submitButton.addEventListener('click', checkPassword);

    // Enter-Taste im Passwortfeld auslösen
    passwordInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
});
