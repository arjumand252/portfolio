document.getElementById("download-resume").addEventListener("click", () => {
    window.location.href = "AR_s_Resume.pdf"; 
});

document.addEventListener("DOMContentLoaded", function () {
        const projects = [
        { title: "ToxNet: A Multi-layer Network approach to Toxicity Analysis", image: "proj1_img.png", link: "project.html?id=1" },
        { title: "Drowsy Driver Detection using Computer Vision", image: "proj2_img.png", link: "project.html?id=2" },
        { title: "Mental Health Prediction using Social Media Analysis", image: "proj3_img.jpg", link: "project.html?id=3" }
    ];
    
    const projectList = document.getElementById("project-list");
    
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
    
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3> <!-- Ensure title is added -->
            <img src="${project.image}" alt="${project.title}" class="circular-image">
            <a href="${project.link}" class="btn">View Details</a>
        `;
    
        projectList.appendChild(projectCard);
    });
    

}); 