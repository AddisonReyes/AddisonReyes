// ===================================
// Navigation
// ===================================
const navLinkItems = document.querySelectorAll('.nav-link');

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinkItems.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===================================
// Projects Data
// ===================================
// Edit this array to add, remove, or modify your projects
const projectsData = [
    // {
    //     "title": "Example Project 1",
    //     "description": "A scalable backend system built with modern technologies. This project demonstrates best practices in API design and data management.",
    //     "technologies": ["Python", "FastAPI", "PostgreSQL", "Docker"],
    //     "image": "",
    //     "github": "https://github.com/yourusername/project1",
    //     "demo": "https://project1-demo.com"
    // },
    // {
    //     "title": "Example Project 2",
    //     "description": "Data pipeline for processing large-scale datasets with efficient ETL operations and real-time analytics.",
    //     "technologies": ["Python", "Apache Spark", "Kafka", "AWS"],
    //     "image": "",
    //     "github": "https://github.com/yourusername/project2",
    //     "link": "https://project2.com"
    // },
    // {
    //     "title": "Example Project 3",
    //     "description": "Microservices architecture implementing clean code principles and comprehensive testing strategies.",
    //     "technologies": ["Node.js", "Express", "MongoDB", "Redis"],
    //     "image": "",
    //     "github": "https://github.com/yourusername/project3"
    // },
];

// ===================================
// Projects Loading
// ===================================
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsData.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: var(--color-text-secondary); font-size: 1.125rem;">
                    No projects yet.
                </p>
            </div>
        `;
        return;
    }

    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // Create image element
    const imageHtml = project.image 
        ? `<img src="${project.image}" alt="${project.title}" class="project-image">`
        : `<div class="project-image"></div>`;

    // Create tech tags
    const techTags = project.technologies
        ? project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')
        : '';

    // Create links
    let linksHtml = '';
    if (project.github || project.demo || project.link) {
        linksHtml = '<div class="project-links">';
        if (project.github) {
            linksHtml += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>`;
        }
        if (project.demo) {
            linksHtml += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo</a>`;
        }
        if (project.link) {
            linksHtml += `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a>`;
        }
        linksHtml += '</div>';
    }

    card.innerHTML = `
        ${imageHtml}
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            ${techTags ? `<div class="project-tech">${techTags}</div>` : ''}
            ${linksHtml}
        </div>
    `;

    return card;
}

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    updateActiveNavLink();
});

// ===================================
// Parallax Effect for Hero Orbs
// ===================================
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});
