document.getElementById("download-resume").addEventListener("click", () => {
    window.location.href = "AR_s_Resume.pdf";
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { title: "ToxNet: A Multi-layer Network approach to Toxicity Analysis", image: "proj1_img.jpeg", link: "project.html?id=1" },
        { title: "Drowsy Driver Detection using Computer Vision", image: "proj2_img_index.png", link: "project.html?id=2" },
        { title: "Mental Health Prediction using Social Media Analysis", image: "proj3_img_index.png", link: "project.html?id=3" }
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
class CosmicBackground {
    constructor() {
        this.cosmicBg = document.getElementById('cosmicBg');
        this.scrollProgress = document.getElementById('cosmicScrollProgress');
        this.ticking = false;
        
        // Color transitions for different scroll positions
        this.colorStops = [
            { position: 0, colors: ['#000000', '#0a0a1a', '#1a0a2e', '#16213e', '#0f3460', '#533483'] },
            { position: 0.2, colors: ['#0a0a1a', '#1a0a2e', '#16213e', '#0f3460', '#533483', '#8a2be2'] },
            { position: 0.4, colors: ['#1a0a2e', '#16213e', '#0f3460', '#533483', '#8a2be2', '#4b0082'] },
            { position: 0.6, colors: ['#16213e', '#0f3460', '#533483', '#8a2be2', '#4b0082', '#191970'] },
            { position: 0.8, colors: ['#0f3460', '#533483', '#8a2be2', '#4b0082', '#191970', '#000080'] },
            { position: 1, colors: ['#533483', '#8a2be2', '#4b0082', '#191970', '#000080', '#1e1e3f'] }
        ];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateBackground();
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => {
            this.requestTick();
        });
        
        // Update on resize
        window.addEventListener('resize', () => {
            this.requestTick();
        });
    }
    
    requestTick() {
        if (!this.ticking) {
            requestAnimationFrame(() => this.updateBackground());
            this.ticking = true;
        }
    }
    
    interpolateColor(color1, color2, factor) {
        const c1 = this.hexToRgb(color1);
        const c2 = this.hexToRgb(color2);
        
        if (!c1 || !c2) return color1;
        
        const r = Math.round(c1.r + (c2.r - c1.r) * factor);
        const g = Math.round(c1.g + (c2.g - c1.g) * factor);
        const b = Math.round(c1.b + (c2.b - c1.b) * factor);
        
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    updateBackground() {
        this.ticking = false;
        
        if (!this.cosmicBg) return;
        
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);
        
        // Update scroll progress indicator if it exists
        if (this.scrollProgress) {
            this.scrollProgress.style.height = `${scrollPercent * 100}%`;
        }
        
        // Find the appropriate color stops to interpolate between
        let currentStop = this.colorStops[0];
        let nextStop = this.colorStops[1];
        
        for (let i = 0; i < this.colorStops.length - 1; i++) {
            if (scrollPercent >= this.colorStops[i].position && scrollPercent <= this.colorStops[i + 1].position) {
                currentStop = this.colorStops[i];
                nextStop = this.colorStops[i + 1];
                break;
            }
        }
        
        // Calculate interpolation factor
        const range = nextStop.position - currentStop.position;
        const factor = range === 0 ? 0 : (scrollPercent - currentStop.position) / range;
        
        // Interpolate between color stops
        const interpolatedColors = [];
        for (let i = 0; i < currentStop.colors.length; i++) {
            interpolatedColors.push(
                this.interpolateColor(currentStop.colors[i], nextStop.colors[i], factor)
            );
        }
        
        // Apply the new gradient
        const gradientStops = interpolatedColors.map((color, index) => 
            `${color} ${(index / (interpolatedColors.length - 1)) * 100}%`
        ).join(', ');
        
        this.cosmicBg.style.background = `linear-gradient(180deg, ${gradientStops})`;
    }
    
    // Public method to manually trigger update
    refresh() {
        this.updateBackground();
    }
    
    // Public method to destroy event listeners
    destroy() {
        window.removeEventListener('scroll', this.requestTick);
        window.removeEventListener('resize', this.requestTick);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if the cosmic background element exists
    if (document.getElementById('cosmicBg')) {
        window.cosmicBackground = new CosmicBackground();
    }
});