// Load component HTML
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;

            // Set active nav link based on current page
            if (elementId === 'navbar-placeholder') {
                setActiveNavLink();
            }
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Set active class on current page's nav link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName || (pageName === '' && linkPage === 'index')) {
            link.classList.add('active');
        }
    });
}

// Load navbar and footer components
function loadComponents() {
    loadComponent('navbar-placeholder', 'components/navbar.html');
    loadComponent('footer-placeholder', 'components/footer.html');
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

// Student data
const students = [
    {
        id:1,
        name: 'Tony Renold M',
        specialization: 'Web Developer - Business Analyst - MLops Engineer',
        skills: ['Python', 'R', 'SQL', 'MongoDB', 'Docker', 'Power BI'],
        impact: 'Developed an Oil and Fuel Analysis and Forecasting system using Machine Learning.',
        rollNumber: '24pds040',
        profileImage: 'assets/profile/24pds040.jpg',
        linkedin: 'https://www.linkedin.com/in/tony-renold-3549a9234/',
        github: 'https://github.com/tony5536'
    },
    {
        id:2,
        name: 'Sahid S',
        specialization: 'Python Full Stack Developer - AI/ML Engineer - Data Scientist',
        skills: ['Python', 'Flask','Scikit-learn','JavaScript', 'React Native', 'SQL'],
        impact: 'Developed an AI-integrated IPL win prediction system using Machine Learning and an enhanced fan engagement Chatbot.',
        rollNumber: '24pds029',
        profileImage: 'assets/profile/24pds029.jpg',
        linkedin: 'https://www.linkedin.com/in/sahid-dev/',
        github: 'https://github.com/Sahid-S'
    },
    {
        id:3,
        name: 'Jayasurya B M',
        specialization: 'AI/ML Engineer - GEN AI Specialist - Agentic AI Developer',
        skills: ['Python', 'SQL', 'Power BI', 'scikit-learn', 'Tableau'],
        impact: 'Developed Hospital Readmission Prediction system using Machine Learning.',
        rollNumber: '24pds016',
        profileImage: 'assets/profile/24pds016.jpg',
        linkedin: 'https://linkedin.com/in/jayasurya-b-m-77b272281',
        github: 'https://github.com/Jayasurya07-hub'
    },
    {
        id:4,
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
        id:5,
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
        id:6,
        name: 'AjithKumar T',
        specialization: 'Data Scientist - AI/ML Engineer - Web Developer',
        skills: ['Python', 'Django', 'pandas', 'numpy' , 'Hugging Face', 'Linux', 'Figma'],
        impact: 'Developed Stock Price Prediction System using Machine Learning.',
        rollNumber: '24pds004',
        profileImage: 'assets/profile/24pds004.jpg',
        linkedin: 'https://www.linkedin.com/in/ajithkumar-t-developer/',
        github: 'https://github.com/ajithkumart445'
    },
    {
        id:7,
        name: 'Akshaya Sri S',
        specialization: 'Data Scientist - Business Analyst - ML Engineer',
        skills: ['Python', 'SQL', 'Power BI', 'Tableau', 'Excel'],
        impact: 'Developed a system for Hybe Entertainment K-pop analysis using Machine Learning.',
        rollNumber: '24pds005',
        profileImage: 'assets/profile/24pds005.jpg',
        linkedin: 'https://www.linkedin.com/in/akshaya-sri-558795347',
        github: 'https://github.com/AKSHAYAS7'
    },
    {
        id:8,
        name: 'Sudhagar R',
        specialization: 'Network Management and Administrator - Data Analyst - Web Developer',
        skills: ['Python', 'JavaScript', 'Burp Suite', 'AWS'],
        impact: 'Developed an anonymized dataset for network forensics and Intrusion Detection System (IDS) evaluation.',
        rollNumber: '24pds035',
        profileImage: 'assets/profile/24pds035.jpg',
        linkedin: 'https://www.linkedin.com/in/sudhagar-raja-4283b2298/',
        github: 'https://github.com/sudhagar-raja'
    },
    {
        id:9,
        name: 'Bharath V',
        specialization: 'Data Scientist - AI/ML Engineer - NLP Specialist',
        skills: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL'],
        impact: 'Developed a predictive maintenance system for network towers utilizing Machine Learning and Generative AI.',
        rollNumber: '24pds007',
        profileImage: 'assets/profile/24pds007.jpg',
        linkedin: 'https://www.linkedin.com/in/bharath-v-4a958028b/',
        github: 'https://github.com/bharathvelappan'
    },
    {
        id:10,
        name: 'Sulthan Alavudeen J',
        specialization: 'Data Analyst - AI/ML Engineer',
        skills: ['Python', 'Power BI', 'Excel', 'SQL'],
        impact: 'Developed a futuristic smart city model using Machine Learning.',
        rollNumber: '24pds036',
        profileImage: 'assets/profile/24pds036.jpg',
        linkedin: 'https://www.linkedin.com/in/sulthan-alavudeen-4ab361380/',
        github: 'https://github.com/alakutty'
    },
    {
        id:11,
        name: 'Yogitha M',
        specialization: 'Data Analyst - AI/ML Engineer',
        skills: ['Python','R', 'Power BI', 'Excel', 'SQL'],
        impact: 'Developed a system for fake news classification and virality prediction using Machine Learning.',
        rollNumber: '24pds042',
        profileImage: 'assets/profile/24pds042.jpg',
        linkedin: 'https://www.linkedin.com/in/yogitha-m-b3016b293/',
        github: 'https://github.com/yogitha0406'
    },
    {
        id:12,
        name: 'Abirami M',
        specialization: 'Data Analyst - Buisness Analyst - Software Engineer',
        skills: ['Python','R', 'Power BI', 'Excel', 'SQL'],
        impact: 'Developed an intelligent system for startup funding prediction and investor recommendation.',
        rollNumber: '24pds003',
        profileImage: 'assets/profile/24pds003.jpg',
        linkedin: 'https://linkedin.com/in/abirami-m-853a3437a/',
        github: 'https://github.com/Abiabi1409'
    },
    {
        id:13,
        name: 'Saravana Kumar T',
        specialization: 'Data Analyst - ML Engineer - Data Scientist',
        skills: ['Python','Power BI', 'Tableau', 'SQL'],
        impact: 'Developed a Loan Approval Prediction model using Machine Learning',
        rollNumber: '24pds039',
        profileImage: 'assets/profile/24pds039.jpg',
        linkedin: 'https://www.linkedin.com/in/saravana-kumar-88a610396/',
        github: 'https://github.com/Saravanakumar210'
    },
    {
        id:14,
        name: 'Miracline V',
        specialization: 'Data Analyst - Business Analyst - AI/ML Engineer',
        skills: ['Python','Power BI', 'Tableau', 'SQL'],
        impact: 'Developed a Diabetic Prediction model using Machine Learning.',
        rollNumber: '24pds020',
        profileImage: 'assets/profile/24pds020.jpg',
        linkedin: 'https://www.linkedin.com/in/miracline-v-a06b35398/',
        github: 'https://github.com/miracline-hub'
    },
    {
        id:15,
        name: 'Kamatchi Kannan K',
        specialization: 'Data Analyst - Business Analyst - AI/ML Engineer',
        skills: ['Python','Power BI', 'Excel', 'Word'],
        impact: 'Developed a Smart Agriculture system utilizing Real-Time Data Analysis for Precision Farming.',
        rollNumber: '24pds017',
        profileImage: 'assets/profile/24pds017.jpg',
        linkedin: 'https://www.linkedin.com/in/kamatchi-kannan-17ab9b2a8/',
        github: 'https://github.com/Kamatchi8723'
    },
    {
        id:16,
        name: 'Rajeshwari S',
        specialization: 'Data Analyst - Web Developer - ML Engineer',
        skills: ['Python','SQL', 'Power BI', 'HTML', 'CSS','PHP'],
        impact: 'Developed a Travel Recommendation System using Machine Learning.',
        rollNumber: '24pds025',
        profileImage: 'assets/profile/24pds025.jpg',
        linkedin: 'https://www.linkedin.com/in/rajeshwari-s-2962a4392/',
        github: 'https://github.com/raji292004'
    },
    {
        id:17,
        name: 'Vishnu Pradhap P',
        specialization: 'Data Analyst - ML Engineer',
        skills: ['Python','SQL', 'Power BI', 'Tableau'],
        impact: 'Developed a system for UPI transaction analysis using Machine Learning.',
        rollNumber: '24pds041',
        profileImage: 'assets/profile/24pds041.jpg',
        linkedin: 'https://www.linkedin.com/in/vishnu-pradhap-p-9a747331b/',
        github: 'https://github.com/Vishnupradhap'
    },
    {
        id:18,
        name: 'Raja Parakirama Pandian U ',
        specialization: 'Data Analyst - ML Engineer - Web Developer',
        skills: ['Python','SQL', 'Power BI', 'MongoDB'],
        impact: 'Developed a system using Python for behavioral data analysis to improve student performance.',
        rollNumber: '24pds024',
        profileImage: 'assets/profile/24pds024.jpg',
        linkedin: 'https://www.linkedin.com/in/u-raja-parakirama-pandian-4b91952bb/',
        github: 'https://github.com/rajaparakiramapandian-jpg'
    },
    {
        id:19,
        name: 'Janarthanan J ',
        specialization: 'Data Analyst - ML Engineer - Web Developer',
        skills: ['Python', 'Power BI', 'Tableau'],
        impact: 'Developed a system using Python for behavioral data analysis to improve student performance.',
        rollNumber: '24pds043',
        profileImage: 'assets/profile/24pds043.jpg',
        linkedin: 'https://www.linkedin.com/in/janarthanan-j-123456789/',
        github: 'https://github.com/janarthanan-j'
    },
    {
        id:20,
        name: 'Hariharan N',
        specialization: 'UI/UX Designer - Data Analyst - Video Editor',
        skills: ['HTML', 'CSS', 'Figma'],
        impact: 'Developed the UI/UX design for a Food Delivery Mobile Application.',
        rollNumber: '24pds014',
        profileImage: 'assets/profile/24pds014.jpg',
        linkedin: 'https://www.linkedin.com/in/hari-nandagopal-98214331b/',
        github: 'https://github.com/HariNandagopal'
    },
    {
        id:21,
        name: 'Abinaya  R',
        specialization: 'UI/UX Designer - Data Analyst',
        skills: ['Python', 'Power BI', 'SQL','MongoDB'],
        impact: 'Developed a Coffee Shop Management System concurrently with a Machine Learning-driven system for noise pollution analysis displayed in a heatmap format.',
        rollNumber: '24pds002',
        profileImage: 'assets/profile/24pds002.jpg',
        linkedin: 'https://www.linkedin.com/in/abinaya-r-b26ab12b6/',
        github: 'https://github.com/abinaya-002'
    },
    {
        id:22,
        name: 'Deepika M',
        specialization: 'Data Analyst - Machine Learning Engineer - Web Developer',
        skills: ['Python', 'Power BI', 'SQL','MS Office', 'PHP','JavaScript'],
        impact: 'Developed a Machine Learning system for Soil Fertility Prediction and Visualization.',
        rollNumber: '24pds009',
        profileImage: 'assets/profile/24pds009.jpg',
        linkedin: 'https://www.linkedin.com/in/deepika-m-115429371/',
        github: 'https://github.com/deepika-1103'
    },
    {
        id:23,
        name: 'Kumaravel E',
        specialization: 'Data Analyst - Machine Learning Engineer - Web Designer',
        skills: ['Python', 'Power BI', 'SQL','Excel', 'HTML','CSS'],
        impact: 'Developed a Machine Learning system for Soil Fertility Prediction and Visualization.',
        rollNumber: '24pds018',
        profileImage: 'assets/profile/24pds018.jpg',
        linkedin: 'https://www.linkedin.com/in/kumaravel-e7099232a6/',
        github: 'https://github.com/kumaravel13-Max'
    },
    {
        id:24,
        name: 'Jasmine J',
        specialization: 'Data Analyst - AI/ML Engineer',
        skills: ['Python', 'Power BI', 'SQL','Excel', 'HTML','CSS'],
        impact: 'Developed a Rainfall Prediction system using Machine Learning.',
        rollNumber: '24pds015',
        profileImage: 'assets/profile/24pds015.jpg',
        linkedin: 'https://www.linkedin.com/in/jasmine-j-/',
        github: 'https://github.com/jasmine2092003'
    },
    {
        id:25,
        name: 'Vigneshwarapandiyan',
        specialization: 'Machine Learning Engineer - Game Developer, Video Editor',
        skills: ['Python', 'Power BI', 'SQL'],
        impact: 'Developed a Machine Learning system for predicting Electric Vehicle (EV) performance.',
        rollNumber: '24pds028',
        profileImage: 'assets/profile/24pds028.jpg',
        linkedin: 'https://www.linkedin.com/in/vigneshwarapandiyan-s-27ba85280/',
        github: 'https://github.com/vignesh23-hub'
    },
    {
        id:26,
        name: 'Rekila S',
        specialization: 'Machine Learning Engineer - Data Analyst - Web Developer',
        skills: ['Python', 'Power BI', 'SQL','HTML','CSS'],
        impact: 'Developed the frontend for an e-commerce website with a functional shopping cart, using HTML, CSS, and JavaScript.',
        rollNumber: '24Pds026',
        profileImage: 'assets/profile/24pds026.jpg',
        linkedin: 'https://www.linkedin.com/in/rekila-s-b0ab881b9/',
        github: 'https://github.com/reki2002'
    },
    {
        id:27,
        name: 'Lathika K',
        specialization: 'Machine Learning Engineer - Data Analyst - Web Developer',
        skills: ['Python', 'Power BI', 'SQL','HTML','CSS'],
        impact: 'Developed a Machine Learning system for Soil Health Index prediction and visualization.',
        rollNumber: '24Pds019',
        profileImage: 'assets/profile/24pds019.jpg',
        linkedin: 'https://www.linkedin.com/in/lathika-k-880794399/',
        github: 'https://github.com/lathikaLat01'
    },
    {
        id:28,
        name: 'Surya P',
        specialization: 'UI/UX Designer- Brand Identity Designer - Web Developer',
        skills: ['HTML','CSS', 'Javascript', 'Figma', 'Framer','Affinity Designer'],
        impact: 'Developed and implemented a new website design for Eyenet Institute.',
        rollNumber: '24Pds038',
        profileImage: 'assets/profile/24pds038.jpg',
        linkedin: 'https://www.linkedin.com/in/surya0607/',
        github: 'https://github.com/imsurya06'
    },
    {
        id:29,
        name: 'Swathy M',
        specialization: 'Python Developer - Machine Learning Engineer - Data Analyst',
        skills: ['Python', 'Power BI', 'Numpy','Pandas', 'Scikit-learn'],
        impact: 'Developed predictive and analytical models using Machine Learning for climate change studies.',
        rollNumber: '24Pds044',
        profileImage: 'assets/profile/24pds044.jpg',
        linkedin: 'https://www.linkedin.com/in/swathy-m-/',
        github: 'https://github.com/swathy23492'
    },
    {
        id:30,
        name: 'Sambath Raja G S',
        specialization: 'Machine Learning Engineer - Data Analyst - Java developer',
        skills: ['Python', 'Java', 'Javascript','SQL', 'PHP','numpy','pandas'],
        impact: 'Developed a comprehensive analysis framework to study mobile phone addiction in teenagers.',
        rollNumber: '24Pds030',
        profileImage: 'assets/profile/24pds030.jpg',
        linkedin: 'https://www.linkedin.com/in/sambath-raja-4a4349308/',
        
    },
    {
        id:31,
        name: 'Hari Prasath M',
        specialization: 'Machine Learning Engineer - Data Analyst',
        skills: ['Python','SQL', 'MongoDB'],
        impact: 'Developed a Personalized Diet Recommendation system using Machine Learning.',
        rollNumber: '24Pds013',
        profileImage: 'assets/profile/24pds013.jpg',
        linkedin: 'https://www.linkedin.com/in/hari-prasath-718429348/',
        github: 'https://github.com/Hari1112003'
    },
    {
        id:32,
        name: 'Shri Haran B',
        specialization: 'DL/ML Engineer - Neural Network Specialist - Web Developer',
        skills: ['Python', 'Numpy','Pandas', 'Django', 'Scikit-learn','HTML','CSS'],
        impact: 'Developed a Machine Learning (ML) model for detecting errors in sensor parameters.',
        rollNumber: '24Pds031',
        profileImage: 'assets/profile/24pds031.jpg',
        linkedin: 'https://www.linkedin.com/in/shri-haran-b-a359a4337/',
        github: 'https://github.com/shriharanofficial'
    },
    {
        id:33,
        name: 'Nagaraj K',
        specialization: 'Machine Learning Engineer - Data Analyst',
        skills: ['Python', 'SQL','HTML','CSS'],
        impact: 'Developed a Library Management System enhanced with Machine Learning capabilities.',
        rollNumber: '24Pds021',
        profileImage: 'assets/profile/24pds021.jpg',
        linkedin: 'https://www.linkedin.com/in/nagaraj-k-178746375/',
        github: 'https://github.com/nagaraj18-hub'
    },
    {
        id:34,
        name: 'Eswari V',
        specialization: 'Data Analyst',
        skills: ['Python', 'Power BI'],
        impact: 'Developed a system for Soil Deficiency Classification based on nutrient levels.',
        rollNumber: '24Pds011',
        profileImage: 'assets/profile/24pds011.jpg',
        linkedin: 'https://www.linkedin.com/in/eswari-velu-41b540294/',
    },
    {
        id:35,
        name: 'Nithin K Rajan',
        specialization: 'Web Developer - Machine Learning Engineer - Graphic Designer',
        skills: ['Python','Javascript','Figma','Framer','Affinity Designer'],
        impact: 'Developed an AI-powered Phishing Message Classifier.',
        rollNumber: '24Pds023',
        profileImage: 'assets/profile/24pds023.jpg',
        linkedin: 'https://www.linkedin.com/in/nithin-k-rajan-35a163293/',
    },
    {
        id:36,
        name: 'Dhanalingam S',
        specialization: 'Data Analyst - Generative AI Specialist - Agentic AI Developer',
        skills: ['Python', 'React', 'JavaScript','Express.js', 'MongoDB'],
        impact: 'Developed a Machine Learning system for Movie Genre Classification.',
        rollNumber: '24Pds010',
        profileImage: 'assets/profile/24pds010.jpg',
        linkedin: 'https://www.linkedin.com/in/dhana-lingam-149903284/',
        github: 'https://github.com/Itzyourlee'
    },
    {
        id:37,
        name: 'Rishi Kumar S',
        specialization: 'Machine Learning Engineer - Data Analyst',
        skills: ['Python','SQL', 'Power BI'],
        impact: 'Developed a Machine Learning system for Formula 1 Podium Prediction.',
        rollNumber: '24Pds027',
        profileImage: 'assets/profile/24pds027.jpg',
        linkedin: 'http://www.linkedin.com/in/rishi-kumar-s-234228392/',
        github: 'https://github.com/Rishistiglitz'
    },
    {
        id:38,
        name: 'Chandrahasan J',
        specialization: 'Data Scientist - Data Analyst - Game Developer',
        skills: ['Python', 'HTML','CSS'],
        impact: 'Developed a Machine Learning system for Car Resale Value Prediction.',
        rollNumber: '24Pds008',
        profileImage: 'assets/profile/24pds008.jpg',
        linkedin: 'https://www.linkedin.com/in/chandrahasan-j-315a81322/',
        github: 'https://github.com/Charana28-03'
    },
    {
        id:39,
        name: 'Siddharth R',
        specialization: 'Machine Learning Engineer - Data Analyst - Java developer',
        skills: ['Python', 'Java', 'Javascript','SQL', 'PHP','numpy','pandas'],
        impact: 'Developed a comprehensive analysis framework to study mobile phone addiction in teenagers.',
        rollNumber: '24Pds032',
        profileImage: 'assets/profile/24pds032.jpg',
        linkedin: 'https://www.linkedin.com/in/sambath-raja-4a4349308/',
        github: 'https://github.com/swathyM'
    },
    {
        id:40,
        name: 'Gopika Sri M',
        specialization: 'Machine Learning Engineer - Data Analyst - Cloud Computing',
        skills: ['Python','SQL', 'Power BI','Oracle Cloud'],
        impact: 'Developed a Crop Recommendation System based on soil nutrient analysis.',
        rollNumber: '24Pds012',
        profileImage: 'assets/profile/24pds012.jpg',
        linkedin: 'https://www.linkedin.com/in/gopika-sri-m-304199279/',
        
    },
    {
        id:41,
        name: 'Surjith Kumar A',
        specialization: 'Data Analyst - AI/ML Engineer',
        skills: ['Python', 'SQL','Power BI','Tableau'],
        impact: 'Developed a system for Diabetics Diagnosis Prediction utilizing the Support Vector Machine (SVM) algorithm.',
        rollNumber: '24Pds037',
        profileImage: 'assets/profile/24pds037.jpg',
        linkedin: 'https://www.linkedin.com/in/a-surjith-kumar-221bb92b2/',
        github: 'https://github.com/asurjithkumar-collab'
    },
    {
        id:42,
        name: 'Abdul Baseer J',
        specialization: 'Full Stack Developer - Data Analyst - Digital Marketing Specialist',
        skills: ['Python', 'JavaScript','SQL','Power BI','Excel'],
        impact: 'Developed a system for Electricity Cost Prediction using Machine Learning.',
        rollNumber: '24Pds001',
        profileImage: 'assets/profile/24pds001.jpg',
        linkedin: 'https://www.linkedin.com/in/abdul-baseer-0418801b6/',
        
    },
    {
        id:43,
        name: 'Stella T',
        specialization: 'Data Analyst - Business Analyst - Machine Learning Engineer',
        skills: ['Python', 'R','SQl','Power BI','Excel'],
        impact: 'Developed a system for credit scoring and customer segmentation.',
        rollNumber: '24Pds034',
        profileImage: 'assets/profile/24pds034.jpg',
        linkedin: 'https://www.linkedin.com/in/stella-t-stella-t-5b879a396/',
        github: 'https://github.com/stella2210'
    },
];

// Function to create a student card
function createStudentCard(student) {
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
            <a href="assets/resume/${student.rollNumber}.pdf" class="btn-resume" target="_blank">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-3h8v2H8v-2z"/></svg>
                    View Resume
                </a>
            <div class="social-links">
                ${student.linkedin ? `<a href="${student.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                </a>` : ''}
                ${student.github ? `<a href="${student.github}" class="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                </a>` : ''}
            </div>
        </div>
    `;

    return card;
}

// Function to render all student cards
function renderStudentCards() {
    const container = document.getElementById('cards-container');
    if (container) {
        students.forEach((student) => {
            const card = createStudentCard(student);
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

// Contact form submission handler
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert("Success! Your message has been sent. The placement coordinator will contact you within 24 hours.");
                form.reset();
            } else {
                alert("Error: " + (data.message || "Something went wrong."));
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Initialize contact form when DOM is ready
document.addEventListener('DOMContentLoaded', initContactForm);

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
