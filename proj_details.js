document.addEventListener("DOMContentLoaded", function (){
    const projects = [
        {
            id: 1,
            title: "Skinwise: Your Agentic AI Skincare Assistant",
            longDescription: "Skinwise is an interactive, full-stack AI skincare assistant developed using multi-agent orchestration (PhiData + Groq), tailored to answer questions reagrding skincare. It feature automated query classification and agent routing via Wikipedia, SerpAPI and web crawler agents to provide tailored insights. The React framework provides it a sleek UI along with a FLask backend.",
            image: "skincare_5.png",
            github: "https://github.com/arjumand252/Skinwise_Agentic_AI",
            // video: "skincare_5.png"
        },
        {
            id: 2,
            title: "ToxNet: A Multi-layer Network approach to Toxicity Analysis",
            longDescription:"ToxNet is a deep learning model based on the Graph Neural Networks Architecture, capable of categorizing tweets into their correct toxicity label. It constructs a multi-layered network out of the tweets to exploit their syntactic and semantic information. The research paper for this project has been accepted and presented in the Sixth International Conference on Soft Computing and its Engineering Applications, 2024.",
            image: "proj1_img.jpeg",
            github: "https://github.com/raj248/toxnet_research_code"
        },
        {
            id: 3,
            title: "Drowsy Driver Detection",
            longDescription: "This project employes Computer vision for the task of detecting whether a driver is drowsy or alert by evaluating their image. It employe the powerful HAAR Cascade Classifier for image segmentation task and a deep CNN model to determine the alertness of the driver.",
            image: "proj2_img.png",
            github: "https://github.com/arjumand252/Drowsy-Driver-Detection-using-CNN-and-HAAR-Cascade-Classifier"
        },
        {
            id: 4,
            title: "Mental Health Condition Prediction using Social Media Analysis",
            longDescription: "This project provides users with a convinient interface consisting of a basic questionnaire regarding their social media usage. Based on the user's answers, the projects employs an ensemble of 3 models: Fully Connected Nerual Network, AutoEncoder and ResNet. These models provide a multi-label classification of the user's mental health condition.",
            image: "images/project3.jpg",
            github: "https://github.com/your-username/project3",
            video: "proj3_vid.mp4"
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
        // if (project.video) {
        //     const videoElement = document.getElementById("project-video");
        //     videoElement.src = project.video;
        //     videoElement.style.display = "block";
        //     document.getElementById("project-img").style.display = "none";
        // } else {
        //     const imgElement = document.getElementById("project-img");
        //     imgElement.src = project.image;
        //     imgElement.style.display = "block";
        //     document.getElementById("project-video").style.display = "none";
        // }
        const projectMediaContainer = document.getElementById("project-media-container");

        if (project.video) {
            // Create a video element dynamically
            const videoElement = document.createElement("video");
            videoElement.src = project.video;
            videoElement.controls = true; // Enable controls
            videoElement.autoplay = true; // Auto-play the video
            videoElement.loop = true; // Loop the video
            videoElement.muted = true; // Required for autoplay in some browsers
            videoElement.classList.add("project-media"); // Apply styling

            // Replace existing image with video
            projectMediaContainer.innerHTML = ""; // Clear previous content
            projectMediaContainer.appendChild(videoElement);
        } else {
            // Display the image
            const imgElement = document.createElement("img");
            imgElement.src = project.image;
            imgElement.alt = project.title;
            imgElement.classList.add("project-media");

            projectMediaContainer.innerHTML = "";
            projectMediaContainer.appendChild(imgElement);
        }
    } else {
        document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
    }
});