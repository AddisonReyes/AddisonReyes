const projectListElement = document.getElementById("project-list");
const urlProjects = "projects.json";

function createProjectHTML(project) {
  return `
    <article class="project">
      <div class="project-media">
        <img src="${project.image}" alt="${project.alt}" />
        <h3>${project.title}</h3>
      </div>
      <div class="project-description">
        <p>${project.description}</p>
      </div>
    </article>
  `;
}

fetch(urlProjects)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((projects) => {
    for (project of projects) {
      const projectHTML = createProjectHTML(project);
      projectListElement.innerHTML += projectHTML;
    }
  })
  .catch((error) => {
    console.error("Hubo un problema al cargar los proyectos:", error);
    projectListElement.innerHTML =
      "<p>Lo sentimos, no se pudieron cargar los proyectos.</p>";
  });
