// Student data
const students = [
    {
        name: 'Tony Renold',
        specialization: 'Web Developer - Business Analyst - MLops Engineer',
        skills: ['Python', 'R', 'SQL', 'MongoDB', 'Docker', 'Power BI'],
        impact: 'Developed an Oil and Fuel Analysis and Forecasting system using Machine Learning.',
        rollNumber: '24pds040',
        profileImage: 'assets/profile/24pds040.jpg',
        linkedin: 'https://www.linkedin.com/in/tony-renold-3549a9234/',
        github: 'https://github.com/tony5536'
    },
    {
        name: 'Sahid S',
        specialization: 'Python Developer - Data Scientist - AI/ML Engineer',
        skills: ['Python', 'SQL', 'Scikit-learn', 'TensorFlow', 'React - React Native', 'Flask'],
        impact: 'Developed an AI-integrated IPL win prediction system using Machine Learning and an enhanced fan engagement Chatbot.',
        rollNumber: '24pds029',
        profileImage: 'assets/profile/24pds029.jpg',
        linkedin: 'https://www.linkedin.com/in/sahid-dev/',
        github: 'https://github.com/Sahid-S'
    },
    {
        name: 'Jayasurya B M',
        specialization: 'AI/ML Engineer - GEN AI Specialist - Agentic AI Developer',
        skills: ['Python', 'SQL', 'Power BI', 'scikit-learn', 'NumPy', 'Pandas'],
        impact: 'Developed Hospital Readmission Prediction system using Machine Learning.',
        rollNumber: '24pds016',
        profileImage: 'assets/profile/24pds016.jpg',
        linkedin: 'https://linkedin.com/in/jayasurya-b-m-77b272281',
        github: 'https://github.com/Jayasurya07-hub'
    },
    {
        name: 'Bavitha Sree V',
        specialization: 'Business Intelligence Analyst - Data Analyst - AI Driven Healthcare Solutions',
        skills: ['Python', 'SQL', 'Power BI', 'Excel', 'Html'],
        impact: 'Developed Customer Churn Prediction using Machine Learning & Power BI.',
        rollNumber: '24pds006',
        profileImage: 'assets/profile/24pds006.jpg',
        linkedin: 'https://www.linkedin.com/in/bavithasree-v',
        github: 'https://github.com/BavithaSree-V'
    },
    {
        name: 'Naveen Prashad R J',
        specialization: 'Data Scientist - Business Analyst - ML Engineer',
        skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel'],
        impact: 'Developed Gym Data Analysis and Calories Burned Prediction system using Machine Learning.',
        rollNumber: '24pds022',
        profileImage: 'assets/profile/24pds022.jpg',
        linkedin: 'https://www.linkedin.com/in/naveen-prashad-1342a3358',
        github: 'https://github.com/NaveenShakthi07'
    },
    {
        name: 'Ajith Kumar T',
        specialization: 'Web Developer - Data Scientist - MLops Engineer',
        skills: ['Python', 'Django', 'HTML', 'Tailwind CSS', 'Hugging Face', 'Linux', 'Figma'],
        impact: 'Developed Stock Price Prediction System using Machine Learning.',
        rollNumber: '24pds004',
        profileImage: 'assets/profile/24pds004.jpg',
        linkedin: 'https://www.linkedin.com/in/ajithkumar-t-developer/',
        github: 'https://github.com/ajithkumart445'
    },
    {
        name: 'Akshaya Sri S',
        specialization: 'Data Scientist - Business Analyst - ML Engineer',
        skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel'],
        impact: 'Developed a system for Hybe Entertainment K-pop analysis using Machine Learning.',
        rollNumber: '24pds005',
        profileImage: 'assets/profile/24pds005.jpg',
        linkedin: 'https://www.linkedin.com/in/akshaya-sri-558795347',
        github: 'https://github.com/AKSHAYAS7'
    }
];

// Function to create a student card
function createStudentCard(student, index) {
    const card = document.createElement('div');
    card.className = 'student-card';

    const skillsHTML = student.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

    card.innerHTML = `
        <div class="card-header">
            <div class="student-photo">
                <img src="${student.profileImage}" alt="${student.name}">
            </div>
            <div class="student-info">
                <h3>${student.name}</h3>
                <div class="specialization">${student.specialization}</div>
            </div>
        </div>
        <div class="skills">
            ${skillsHTML}
        </div>
        <div class="impact">
            ${student.impact}
        </div>
        <div class="card-actions">
            <button class="btn-resume" onclick="downloadResume(event, ${index})">Download Full Resume (PDF)</button>
            <div class="social-links">
                <a href="${student.linkedin || '#'}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                </a>
                <a href="${student.github || '#'}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                </a>
            </div>
        </div>
    `;

    return card;
}

// Function to render all student cards
function renderStudentCards() {
    const container = document.getElementById('cards-container');
    if (container) {
        students.forEach((student, index) => {
            const card = createStudentCard(student, index);
            container.appendChild(card);
        });
    }
}

// Initialize the cards when the page loads
document.addEventListener('DOMContentLoaded', renderStudentCards);

// Mobile navigation toggle
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    console.log('Form submitted:', Object.fromEntries(formData));

    alert('Thank you for your interest! The placement coordinator will contact you within 24 hours.');
    form.reset();
}

// Download resume handler
function downloadResume(event, index) {
    event.preventDefault();
    const student = students[index];

    const link = document.createElement('a');
    link.href = `assets/resume/${student.rollNumber}.pdf`;
    link.download = `${student.name.replace(' ', '_')}_Resume.pdf`;
    link.target = '_blank';

    fetch(link.href)
        .then(response => {
            if (response.ok) {
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                alert(`Resume download started for ${student.name} (Roll No: ${student.rollNumber})`);
            } else {
                alert(`Resume for ${student.name} (Roll No: ${student.rollNumber}) is not available yet.\n\nPlease contact the placement coordinator for resume requests.`);
            }
        })
        .catch(error => {
            console.error('Error downloading resume:', error);
            alert(`Resume for ${student.name} (Roll No: ${student.rollNumber}) is not available yet.\n\nPlease contact the placement coordinator for resume requests.`);
        });
}

// Download all resumes handler
function downloadAllResumes(event) {
    event.preventDefault();

    const zipFilePath = 'assets/resume/all-resumes.zip';
    const link = document.createElement('a');
    link.href = zipFilePath;
    link.download = 'MSc_Data_Science_Resumes.zip';
    link.target = '_blank';

    fetch(zipFilePath, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                alert('Download started: MSc Data Science Resumes (ZIP)\n\nThe ZIP file contains all available student resumes.');
            } else {
                alert('Resume collection is not available yet.\n\nPlease contact the placement coordinator for bulk resume requests.');
            }
        })
        .catch(error => {
            console.error('Error downloading ZIP file:', error);
            alert('Resume collection is not available yet.\n\nPlease contact the placement coordinator for bulk resume requests.');
        });
}
