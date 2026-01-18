// ===== DOM Elements =====
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('currentYear');
const downloadCV = document.getElementById('downloadCV');

// ===== Theme Toggle Functionality =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = savedTheme;
    
    // Update toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark-mode' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Toggle theme
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
    
    // Save to localStorage
    const newTheme = isDarkMode ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
}

// ===== Mobile Navigation =====
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with slide-up class
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach(el => observer.observe(el));
}

// ===== Animate Progress Bars =====
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.getAttribute('data-level');
                const progressFill = progressBar.querySelector('.progress-fill');
                
                // Animate progress bar
                progressFill.style.width = `${level}%`;
                
                // Unobserve after animation
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => observer.observe(bar));
}

// ===== Project Filtering =====
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Add animation for appearing cards
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== Certificate Modal =====
function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalClose = document.getElementById('modalClose');
    const viewButtons = document.querySelectorAll('.view-certificate');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Certificate data
    const certificates = [
        {
            title: "Generative AI Skills for Creative Content: Opportunities, Issues, and Ethics",
            description: "Successfully completed the certificate “Generative AI Skills for Creative Content: Opportunities, Issues, and Ethics,” gaining practical insight into responsible and ethical AI-driven content creation ",
            image: "Certificates/Cert1.png"
        },
        {
            title: "Data Analysis Using Python",
            description: "Successfully completed Data Analysis using Python, gaining practical experience in data cleaning, analysis, and visualization using Python libraries such as NumPy, Pandas, and Matplotlib.",
            image: "Certificates/Cert3.png"
        },
        {
            title: "Investing in Human Skills in the Age of AI",
            description: "Successfully completed Investing in Human Skills in the Age of AI, gaining insights into the importance of critical thinking, creativity, and adaptability alongside emerging AI technologies.",
            image: "Certificates/Cert4.png"
        },
        {
            title: "Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn",
            description: "Successfully completed the Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn, gaining hands-on skills in Generative AI, Machine Learning, and building intelligent solutions using Azure AI Studio.",
            image: "Certificates/Cert2.png"
        },
        {
            title: "Data Visualization Using Python",
            description: "Successfully completed Data Visualization Using Python, gaining hands-on experience in creating insightful and interactive visualizations using Matplotlib, Seaborn, and Plotly.",
            image: "Certificates/Cert5.png"
        },
         {
            title: "Prompt Engineering for Everyone",
            description: "Successfully completed Prompt Engineering for Everyone, gaining practical skills in designing effective prompts to optimize interactions and results from generative AI models.",
            image: "Certificates/Cert6.png"
        },
        {
            title: "Python with Data Science",
            description: "Successfully completed Python with Data Science from Digipodium, gaining hands-on experience in data analysis, visualization, and real-world problem solving using Python.",
            image: "Certificates/cert7.jpg"
        },
        {
            title: "Business Analysis Foundations",
            description: "Successfully completed Business Analysis Foundations from IIBA, gaining foundational knowledge in business analysis principles and practices.",
            image: "Certificates/Cert8.jpg"
        },
        {
            title: "Mobile Application Development",
            description: "Successfully completed Mobile Application Development, offered by the School of Computer Applications, Babu Banarasi Das University, gaining practical knowledge in designing and developing mobile applications.",
            image: "Certificates/Cert9.png"
        },
        {
            title: "AI for Beginners",
            description: "Successfully completed AI for Beginners, gaining foundational knowledge of artificial intelligence concepts, real-world applications, and emerging AI technologies.",
            image: "Certificates/Cert10.png"
        },
        {
            title: "Presenting Data",
            description: "Successfully completed Presenting Data, gaining skills in creating effective charts using spreadsheet software and selecting the appropriate chart types to clearly and accurately convey information.",
            image: "Certificates/Cert11.png"
        },
        {
            title: "Data Science and Analytics",
            description: "Successfully completed Data Science and Analytics, gaining knowledge of leading data science practices, methodologies, and tools, understanding the benefits and challenges of data-driven business approaches, and developing essential skills for a career in the field.",
            image: "Certificates/Cert12.png"
        },
        {
            title: "Data Analytics using Power BI",
            description: "Successfully completed Data Analytics using Power BI, gaining in-depth experience in data cleaning and transformation with Power Query, data modeling using DAX, building interactive dashboards and reports, and extracting actionable business insights through advanced visual analytics.",
            image: "Certificates/Cert13.jpg"
        },
        {
            title: "Introduction to Digital Business Skills",
            description: "Successfully completed Introduction to Digital Business Skills, gaining foundational knowledge of digital tools, data-driven decision-making, online collaboration, and essential skills required to succeed in modern digital business environments.",
            image: "Certificates/Cert14.png"
        },
        {
            title: "Data Science and Artificial Intelligence",
            description: "Successfully completed Data Science and Artificial Intelligence from Babu Banarasi Das University in collaboration with IBM, gaining in-depth understanding of data collection, cleaning, and exploration, statistical analysis, machine learning and AI algorithms, and their practical business applications, along with hands-on experience using industry-standard tools and frameworks to build, evaluate, and deploy data-driven and intelligent solutions.",
            image: "Certificates/Cert15.png"
        },
        {
            title: "SQL (Intermediate)",
            description: "Successfully completed SQL (Intermediate), gaining practical experience in writing optimized queries, using joins, subqueries, and aggregate functions, handling complex data retrieval tasks, and improving database performance through efficient query design.",
            image: "Certificates/Cert16.png"
        },
        {
            title: "IBM Cognos Analytics V11.1.x Reporting Essentials",
            description: "Successfully completed IBM Cognos Analytics V11.1.x Reporting Essentials, gaining hands-on experience in creating professional reports and dashboards, working with data modules, applying filters and prompts, and delivering clear, actionable insights through enterprise-level business intelligence reporting.",
            image: "Certificates/Cert17.png"
        },
        {
            title: "SQL(Basics)",
            description: "Successfully completed SQL(Basics) from Hackerrank, gaining hands-on experience in writing and executing SQL queries, understanding database structures, and performing basic data manipulation tasks.",
            image: "Certificates/Cert18.png"
        },
        {
            title: "Microsoft Copilot for Productivity",
            description: "Successfully completed Microsoft Copilot for Productivity by Microsoft and LinkedIn, gaining practical experience in using Copilot to enhance productivity, streamline workflows, automate tasks, and improve efficiency across Microsoft tools.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEkd2Z7kKD4SQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1722043308757?e=1770249600&v=beta&t=WtExADf2rwHdlZFGC-qcNbgH3HmZNw1j-RdwJp8xNGo"
        },
    ];
    
    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'));
            const certificate = certificates[index];
            
            modalImage.src = certificate.image;
            modalImage.alt = certificate.title;
            modalTitle.textContent = certificate.title;
            modalDescription.textContent = certificate.description;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===== Contact Form Validation =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');
    
    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    // Validation functions
    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        if (message === '') {
            messageError.textContent = 'Message is required';
            return false;
        } else if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Simulate form submission
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status';
            
            setTimeout(() => {
                // In a real application, you would send the data to a server here
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                
                // Clear status after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            }, 1500);
        } else {
            formStatus.textContent = 'Please fix the errors above';
            formStatus.className = 'form-status error';
        }
    });
}

// ===== Download CV =====
function initDownloadCV() {
    if (downloadCV) {
        downloadCV.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real application, this would link to an actual CV file
            // For this example, we'll simulate a download
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual CV URL
            link.download = 'Geershati_Saxena_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show notification
            alert('CV download started! In a real implementation, this would download your actual CV file.');
        });
    }
}

// ===== Initialize Current Year =====
function initCurrentYear() {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
}

// ===== Initialize Everything =====
function init() {
    // Theme
    initTheme();
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile Navigation
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Scroll animations
    initScrollAnimations();
    
    // Progress bars (only on skills page)
    if (document.querySelector('.progress-bar')) {
        animateProgressBars();
    }
    
    // Project filtering (only on projects page)
    if (document.querySelector('.projects-filter')) {
        initProjectFilter();
    }
    
    // Certificate modal (only on certificates page)
    if (document.querySelector('.view-certificate')) {
        initCertificateModal();
    }
    
    // Contact form (only on contact page)
    if (document.getElementById('contactForm')) {
        initContactForm();
    }
    
    // Download CV
    initDownloadCV();
    
    // Current year in footer
    initCurrentYear();
    
    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// ===== Initialize when DOM is loaded =====
document.addEventListener('DOMContentLoaded', init);