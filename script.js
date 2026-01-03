// PROJECT DATA
const projects = [
    {
        title: "AI-Powered Dress Search",
        cat: "ai",
        status: "Open",
        tags: ["Node.js", "JavaScript", "HTML/CSS", "Computer Vision"],
        color: "#8E44AD",
        description: "Intelligent visual search engine helping users find matching dresses from photos. Features real-time pattern recognition and price comparison.",
        image: "projects/ai-powered-dress-search/image.png",
        url: "projects/ai-powered-dress-search/index.html"
    }
];

// SHARED DOM ELEMENTS
const grid = document.getElementById('projectGrid');
const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModal');
const detailsContainer = document.getElementById('projectDetails');


// PAGE ROUTUTER LOGIC
if (grid) {
    // We are on index.html
    initHomePage();
} else if (detailsContainer) {
    // We are on project-details.html
    initDetailsPage();
}

// --- HOME PAGE FUNCTIONS ---
function initHomePage() {
    renderProjects();

    // Modal Event Listeners
    if (openBtn) {
        openBtn.onclick = () => {
            alert("project is still under the development so within this month every funcationality will be added");
        };
    }
}

function renderProjects() {
    grid.innerHTML = "";

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = "pointer";
        card.onclick = (e) => {
            window.location.href = p.url;
        };

        const bgStyle = p.image
            ? `background: url('${p.image}') center/cover no-repeat;`
            : `background: linear-gradient(45deg, ${p.color}, #21262d);`;

        card.innerHTML = `
            <div class="card-img" style="${bgStyle} position: relative;">
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.3);"></div>
                <span class="status-tag ${p.status === 'Open' ? 'status-open' : 'status-progress'}">${p.status}</span>
            </div>
            <div class="card-body">
                <small style="color: var(--cyan); text-transform: uppercase;">${p.cat}</small>
                <h3>${p.title}</h3>
                <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 15px;">${p.description || 'No description available.'}</p>
                <div class="tags">
                    ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                    <span style="font-size: 0.8rem; color: var(--text-dim);">👥 3/5 members</span>
                    <span style="color: var(--cyan);">View Details →</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- DETAILS PAGE FUNCTIONS ---
function initDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        // Placeholder for user's WhatsApp number
        const whatsappNumber = "9071249859";
        const message = encodeURIComponent(`Hi, I'm interested in joining the team for "${project.title}".`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        const heroImageStyle = project.image
            ? `background: linear-gradient(to bottom, rgba(13,17,23,0), rgba(13,17,23,0.9)), url('${project.image}') center/cover no-repeat; height: 300px;`
            : `background: linear-gradient(45deg, ${project.color}, #21262d); height: 200px;`;

        detailsContainer.innerHTML = `
            <a href="index.html" class="back-link">← Back to Projects</a>
            
            <div style="${heroImageStyle} border-radius: 12px; margin-bottom: 30px; position: relative;"></div>

            <div style="display: flex; align-items: start; justify-content: space-between; margin-bottom: 20px;">
                <h1 style="margin: 0;">${project.title}</h1>
                 <span class="status-tag ${project.status === 'Open' ? 'status-open' : 'status-progress'}" style="position: static;">${project.status}</span>
            </div>
            
            <div class="project-meta">
                <span>Category: <strong style="color:white; text-transform:uppercase;">${project.cat}</strong></span>
                <span>Team: <strong>3/5 Members</strong></span>
            </div>

            <div class="tech-stack">
                ${project.tags.map(t => `<span class="tag" style="font-size: 0.9rem; padding: 6px 12px;">${t}</span>`).join('')}
            </div>

            <div style="margin-top: 30px; line-height: 1.8;">
                <h3 style="color: var(--cyan);">About the Project</h3>
                <p>${project.description}</p>
                <p style="color: var(--text-dim);">
                    This project aims to revolutionize the way users shop for clothes by leveraging computer vision. 
                    We are looking for frontend developers and data scientists to help improve our model accuracy and UI responsiveness.
                </p>
            </div>

            <a href="${whatsappUrl}" target="_blank" class="whatsapp-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style="margin-right:8px;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c1.02.592 1.974.885 3.091.885h.001c3.181 0 5.768-2.586 5.768-5.766.001-3.181-2.587-5.767-5.767-5.767zm6.524 9.807c-2.435 2.884-7.013 3.654-10.793 1.343l-1.077 1.185-1.009-1.096 1.05-1.157c-1.465-3.694.047-7.904 3.75-9.37 3.695-1.465 7.905.047 9.371 3.75.461 1.166.49 2.378.136 3.497 2.226-1.571 2.059-1.789 2.012-1.731-.19-.24-.606-.285-.843-.095-.24.19-.285.606-.095.843.058.071 1.009-1.123-2.502 2.831zm-6.524-11.979c-4.407 0-7.993 3.586-7.993 7.992 0 1.487.412 2.894 1.139 4.103l-1.666 6.082 6.255-1.644c1.192.658 2.559 1.003 3.961 1.003 4.407 0 7.994-3.586 7.994-7.992s-3.587-7.992-7.994-7.992z"/></svg>
                Request to join 
            </a>
        `;
    } else {
        detailsContainer.innerHTML = '<p>Project not found.</p> <a href="index.html" class="back-link">Back to Home</a>';
    }
}
