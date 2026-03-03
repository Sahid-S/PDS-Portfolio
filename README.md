# PDS-Portfolio

A professional portfolio and recruitment website showcasing MSc Data Science graduates from The American College, Madurai. This platform connects talented data science professionals with potential employers.

## Overview

This website serves as a talent showcase for MSc Data Science graduates, providing employers and recruiters with comprehensive profiles, downloadable resumes, and direct contact options for hiring inquiries.

**Live Demo:** [View Portfolio](https://sahid-s.github.io/PDS-Portfolio/)

## Features

- **Graduate Profiles** - 17 student profiles with photos, skills, and project highlights
- **Resume Downloads** - Individual PDF downloads and bulk ZIP download option
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dynamic Components** - Reusable navbar and footer loaded via JavaScript
- **Contact Form** - Integrated hiring inquiry form with Web3Forms
- **Program Information** - Detailed curriculum and faculty information

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, about the program, and why hire our graduates |
| Cohort | Gallery of graduate profiles with skills and project highlights |
| Program | Faculty information, curriculum details, and course breakdown |
| Contact | Hiring inquiry form and contact information |

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, responsive design
- **JavaScript (ES6+)** - Dynamic content, async/await
- **Web3Forms** - Form submission handling

## Project Structure

```
PDS-Portfolio/
├── index.html              # Home page
├── cohort.html             # Graduate profiles
├── program.html            # Program details
├── contact.html            # Contact form
├── components/
│   ├── navbar.html         # Navigation component
│   └── footer.html         # Footer component
├── css/
│   └── styles.css          # Stylesheet
├── js/
│   └── main.js             # JavaScript logic
└── assets/
    ├── profile/            # Student profile images
    └── resume/             # Resume PDFs
```

## Getting Started

### Prerequisites

- A modern web browser
- A local HTTP server (optional, for development)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/PDS-Portfolio.git
   cd PDS-Portfolio
   ```

2. Open with a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

3. Open `http://localhost:8000` in your browser

Alternatively, open `index.html` directly in your browser (some features may require a server).

## Adding New Graduates

To add a new graduate profile, update the `studentsData` array in [js/main.js](js/main.js):

```javascript
{
    name: "Student Name",
    rollNumber: "24pdsXXX",
    specialization: "AI/ML Engineer",
    skills: ["Python", "SQL", "TensorFlow"],
    impact: "Project description and impact statement",
    image: "assets/profile/24pdsXXX.jpg",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
    resume: "assets/resume/24pdsXXX.pdf"
}
```

## Institution

**The American College, Madurai**
- Founded: 1881
- Accreditation: 'A++' by NAAC
- Status: Autonomous Institution affiliated to Madurai Kamaraj University

**MSc Data Science Program**
- Duration: 2 years (4 semesters)
- Total Credits: 96
- Focus: Machine Learning, Data Analytics, AI, and Cloud Technologies

## Graduate Highlights

- **17** talented graduates from the 2024 batch
- **Diverse projects** in Healthcare, Finance, E-commerce, and more
- **Technical skills** including Python, SQL, TensorFlow, Power BI, and cloud platforms
- **Industry-ready** with capstone projects demonstrating real-world impact

## Contact

For hiring inquiries, please use the [Contact Form](contact.html) on the website.

**The American College**
Madurai - 625002
Tamil Nadu, India

## License

This project is open source and available for educational purposes.

---

*Built with care by the MSc Data Science Department, The American College, Madurai*
