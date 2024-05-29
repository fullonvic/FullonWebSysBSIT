// Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

// Add click event
menuBtn.addEventListener('click', () => {
    // Toggle menu open class
    menu.classList.toggle('menu-open');
});

// Stats Counter
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;

if (stats) {
    const sectionOffset = stats.offsetTop + stats.offsetHeight;

    window.addEventListener("scroll", () => {
        const pageOffset = window.innerHeight + window.pageYOffset;

        if (pageOffset > sectionOffset && bol === false) {
            counters.forEach((counter) => {
                function updateCount() {
                    const target = +counter.getAttribute('data-target');
                    const speed = +counter.getAttribute('data-speed');
                    const count = +counter.innerText;

                    if (count < target) {
                        counter.innerText = count + 1;
                        setTimeout(updateCount, speed);
                    } else {
                        counter.innerText = target;
                    }
                }
                updateCount();
            });
            bol = true;
        }
    });
}
