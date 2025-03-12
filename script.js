document.getElementById("download-resume").addEventListener("click", () => {
    window.location.href = "AR_s_Resume.pdf"; 
});

document.addEventListener("DOMContentLoaded", function () {
        const projects = [
        { title: "ToxNet: A Multi-layer Network approach to Toxicity Analysis", image: "image1.png", link: "#" },
        { title: "Another Project", image: "image2.png", link: "#" },
        { title: "Third Project", image: "image3.png", link: "#" }
    ];
    
    const projectList = document.getElementById("project-list");
    
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
    
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3> <!-- Ensure title is added -->
            <img src="${project.image}" alt="${project.title}">
            <a href="${project.link}" class="btn">View Details</a>
        `;
    
        projectList.appendChild(projectCard);
    });
    

}); 