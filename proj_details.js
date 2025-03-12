document.addEventListener("DOMContentLoaded", function (){
    const projects = [
        {
            id: 1,
            title: "ToxNet: A Multi-layer Network approach to Toxicity Analysis",
            longDescription:"ToxNet is a deep learning model based on the Graph Neural Networks Architecture, capable of categorizing tweets into their correct toxicity label. It constructs a multi-layered network out of the tweets to exploit their syntactic and semantic information. The research paper for this project has been accepted and presented in the Sixth International Conference on Soft Computing and its Engineering Applications, 2024.",
            image: "images/project1.jpg",
            github: "https://github.com/raj248/toxnet_research_code"
        },
        {
            id: 2,
            title: "Drowsy Driver Detection",
            longDescription: "This project employes Computer vision for the task of detecting whether a driver is drowsy or alert by evaluating their image. It employe the powerful HAAR Cascade Classifier for image segmentation task and a deep CNN model to determine the alertness of the driver.",
            image: "proj2_img.png",
            github: "https://github.com/arjumand252/Drowsy-Driver-Detection-using-CNN-and-HAAR-Cascade-Classifier"
        },
        {
            id: 3,
            title: "Project 3",
            longDescription: "More information about Project 3...",
            image: "images/project3.jpg",
            github: "https://github.com/your-username/project3"
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const projectID = parseInt(urlParams.get("id"));
    const project = projects.find(p=>p.id === projectID);

    if (project) {
        console.log("Project Found:", project); // Debugging

        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-img").src = project.image;
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-long-desc").innerHTML = project.longDescription;
        document.getElementById("github-link").href = project.github;
    } else {
        document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
    }
});