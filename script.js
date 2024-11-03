document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll('.skill-level');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const skillValue = skillLevel.getAttribute('data-skill');
                skillLevel.style.width = skillValue + '%'; 
            }
        });
    }, { threshold: 0.5 }); 

    skillLevels.forEach(skill => {
        observer.observe(skill); 
    });
});




