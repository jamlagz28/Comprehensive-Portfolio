const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');



menuBtn.addEventListener('click', () => {
navMenu.classList.toggle('show');
});

// Animate skill bars when scrolled into view
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillFills = document.querySelectorAll('.skill-fill');

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos - 50){ // triggers slightly before fully in view
        skillFills.forEach(fill => {
            const percent = fill.getAttribute('data-percent');
            fill.style.width = percent;
            fill.textContent = percent;
        });
        // Remove the scroll listener after animation to avoid re-triggering
        window.removeEventListener('scroll', animateSkills);
    }
}

// Listen for scroll
window.addEventListener('scroll', animateSkills);

// Optional: trigger in case it's already in view on load
window.addEventListener('load', animateSkills);
