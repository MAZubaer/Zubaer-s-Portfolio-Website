// ====================================================================
// 1. HOMEPAGE FUNCTIONS (Toggle, Scroll)
// ====================================================================

// Toggle Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) { // ONLY run if element exists
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}

// Scroll Logic (Header Sticky and Nav Link Activation)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Sets the active state of sections in index.html
                const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });

            sec.classList.add('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon (If menuIcon exists)
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
    
    // footer animation (for index.html)
    let footer = document.querySelector('footer');
    if(footer) {
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    }
}

// ====================================================================
// 2. CV Download Buttons (ONLY Run If Exists)
// ====================================================================

const downloadCvBtn = document.getElementById('downloadCv');
if (downloadCvBtn) { // if downloadCv element exists
    downloadCvBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('Do you want to download the CV file?')) {
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

const downloadCv2Btn = document.getElementById('downloadCv2');
if (downloadCv2Btn) { // if downloadCv2 element exists
    downloadCv2Btn.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('Do you want to download the CV file?')) {
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

