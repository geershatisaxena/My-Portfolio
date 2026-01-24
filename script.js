// ===== DOM Elements =====
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('currentYear');
const downloadCV = document.getElementById('downloadCV');

// ===== Theme Toggle Functionality =====
function initTheme() {
    // Check localStorage or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    document.body.className = savedTheme;
    
    // Update toggle icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = savedTheme === 'dark-mode' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Toggle theme
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
    }
    
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
        {
            title: "Career Essentials in Data Analysis",
            description: "Successfully completed Career Essentials in Data Analysis by Microsoft and LinkedIn, gaining strong foundational skills in data analysis and data analytics, along with hands-on experience in data visualization to interpret data effectively and support informed decision-making.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEkd2Z7kKD4SQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1722043308757?e=1770249600&v=beta&t=WtExADf2rwHdlZFGC-qcNbgH3HmZNw1j-RdwJp8xNGo"
        },
        {
            title: "Career Essentials in Generative AI",
            description: "Successfully completed Career Essentials in Generative AI by Microsoft and LinkedIn, gaining strong foundational skills in generative AI, along with hands-on experience in prompt engineering and ethical AI practices.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQFkDZpXcfsbxQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1721737221156?e=1770249600&v=beta&t=dGVF_-S1FzpTey2tQof6h21nWvTBCog3exH6Y1h8bsU"
        },
        {
            title: "Career Essentials in Project Management",
            description: "Successfully completed Career Essentials in Project Management by Microsoft and LinkedIn, gaining foundational knowledge of project planning, scheduling, risk management, stakeholder communication, and essential tools and methodologies used to successfully manage projects end to end.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQHmISaWOXHtjg/feedshare-shrink_1280/feedshare-shrink_1280/0/1729959683329?e=1770249600&v=beta&t=4u3dZvXzuAwKows07X90hLGPVo9ov-RtiMIZV9u64p0"
        },
        {
            title: "Copilot in PowerPoint: From Prompt to Presentation",
            description: "Successfully completed Copilot in PowerPoint: From Prompt to Presentation by Microsoft and LinkedIn, gaining hands-on experience in using Microsoft Copilot to transform prompts into structured, visually engaging presentations, streamline slide creation, and enhance storytelling and productivity.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQGXNx_V2ETp8w/feedshare-shrink_1280/feedshare-shrink_1280/0/1722011728379?e=1770249600&v=beta&t=x5O5dDrkpo1k0X7JCvMswG50VblKKbmJwauJEVnUj4Y"
        },
        {
            title: "Copilot in Teams: AI-Powered Collaboration",
            description: "Successfully completed Copilot in Teams: AI-Powered Collaboration by Microsoft and LinkedIn, gaining hands-on experience in using Microsoft Copilot to enhance meetings, summarize discussions, manage tasks, and improve team collaboration through AI-driven insights.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEhC46wqJfRXA/feedshare-shrink_1280/feedshare-shrink_1280/0/1721991645147?e=1770249600&v=beta&t=OjfkAshDcc0loJx5BSkdlso-3mP_lF6qMOOJ2iDIYjg"
        },
        {
            title: "Copilot in Word: Create and Refine Documents with AI",
            description: "Successfully completed Copilot in Word: Create and Refine Documents with AI by Microsoft and LinkedIn, gaining hands-on experience in using Microsoft Copilot to draft, edit, summarize, and refine documents efficiently while improving clarity, structure, and overall writing quality.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQG1yygVkhEuqw/feedshare-shrink_1280/feedshare-shrink_1280/0/1721993675063?e=1770249600&v=beta&t=KvXeHBDBh0E084JocWH8HuUOjUzmJREWKMekO4vnFz8"
        },
        {
            title: "Ethics in the Age of Generative AI",
            description: "Successfully completed Ethics in the Age of Generative AI, gaining a clear understanding of responsible AI principles, ethical challenges, bias mitigation, data privacy, and the societal impact of generative AI technologies.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEFo_TgYkbfuQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1721729885966?e=1770249600&v=beta&t=Iprz4R36gp9fJMY5_vQHlaH_JC_QVsS3lCtJ0Zf7XZc"
        },
        {
            title: "Introduction to Artificial Intelligence ",
            description: "Successfully completed Introduction to Artificial Intelligence, gaining a comprehensive understanding of core AI concepts, machine learning fundamentals, and intelligent systems, along with insights into real-world applications, ethical considerations, and the growing impact of AI technologies across various industries and domains.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQG6NKmgEvg5gg/feedshare-shrink_1280/feedshare-shrink_1280/0/1721734644207?e=1770249600&v=beta&t=Q-HiUbuFXH-i_SGqCw8iFi_c385PlJ6-uwtHjKoqOGY"
        },
        {
            title: "Excel with Copilot: AI-Driven Data Analysis ",
            description: "Successfully completed Excel with Copilot: AI-Driven Data Analysis, gaining in-depth hands-on experience in leveraging Microsoft Copilot to streamline data analysis workflows, automate complex calculations, generate meaningful insights, create dynamic charts and visualizations, and support accurate, efficient, and data-driven decision-making within Excel.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEHLzH9Af5Mxw/feedshare-shrink_1280/feedshare-shrink_1280/0/1721996738698?e=1770249600&v=beta&t=TpNiKSsjz-d7Rb2S-XVAmZqCpKmyC9GbE7KnhP9aY4Q"
        },
        {
            title: "Microsoft Copilot for Productivity ",
            description: "Successfully earned the “Microsoft Copilot for Productivity” certification, jointly issued by Microsoft and LinkedIn. This credential validates my ability to leverage AI-powered tools to streamline workflows, enhance collaboration, and drive efficiency in professional environments. Through this certification, I gained practical insights into applying Copilot features across tasks such as document creation, data analysis, and communication management. It highlights my commitment to staying ahead with modern productivity solutions and demonstrates my readiness to integrate AI-driven approaches into real-world projects.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQEkd2Z7kKD4SQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1722043308757?e=1770249600&v=beta&t=WtExADf2rwHdlZFGC-qcNbgH3HmZNw1j-RdwJp8xNGo"
        },
        {
            title: "Managing Projects with Microsoft 365",
            description: "Successfully earned the “Managing Projects with Microsoft 365” certification, issued by LinkedIn. This credential validates my ability to effectively manage projects using Microsoft 365 tools, including planning, tracking, and collaboration features. Through this certification, I gained practical insights into leveraging Microsoft 365 for project management tasks such as task assignment, timeline creation, and resource allocation. It highlights my commitment to staying ahead with modern productivity solutions and demonstrates my readiness to integrate AI-driven approaches into real-world projects.",
            image: "https://media.licdn.com/dms/image/v2/D4E22AQH12oxCg__HKA/feedshare-shrink_1280/feedshare-shrink_1280/0/1722617291623?e=1770249600&v=beta&t=ExPYXcAN_ME2KOGRZBfXV1SIuZYociYQuzH7N_dkPAU"
        },
        {
            title: "Data Science Tools",
            description: "Successfully completed the “Data Science Tools” certification, gaining practical hands-on experience with industry-standard tools used across the data science lifecycle, including data exploration, analysis, visualization, and collaborative workflows, strengthening my overall data science foundation.",
            image: "Certificates/Cert19.png"
        },
        {
            title: "Data Science Methodologies",
            description: "Successfully completed the “Data Science Methodologies” certification, gaining a structured understanding of the end-to-end data science process, including problem definition, data collection, exploratory analysis, model development, evaluation, and communicating insights for data-driven decision-making.",
            image: "Certificates/Cert20.png"
        },
        {
            title: "Data Science Foundations - Level 1",
            description: "Successfully earned the “Data Science Foundations – Level 1” certification issued by IBM, gaining a strong understanding of the possibilities and opportunities that data science, analytics, and big data offer across industries, and how these capabilities drive innovation and data-driven decision-making.",
            image: "Certificates/Cert21.png"
        },
        {
            title: "Data Science for Business - Level 2",
            description: "Successfully completed the “Data Science for Business – Level 2” certification, gaining deeper insight into applying data science and analytics to solve real-world business problems, evaluate data-driven strategies, and support informed decision-making at an organizational level.",
            image: "Certificates/Cert22.png"
        },
        {
            title: "Python for Data Science",
            description: "Successfully completed the “Python for Data Science” certification, gaining strong practical experience in using Python for end-to-end data analysis, including data cleaning, manipulation, and transformation, performing exploratory data analysis, and visualizing insights using libraries such as NumPy, Pandas, and Matplotlib, while developing a solid foundation in writing efficient, readable, and reproducible data-driven code.",
            image: "Certificates/Cert23.png"
        },
        {
            title: "Introduction to Cognos Analytics",
            description: "Successfully completed the “Introduction to Cognos Analytics” certification, developing a strong understanding of IBM Cognos Analytics and its role in business intelligence, including connecting to data sources, preparing and modeling data, creating interactive dashboards and reports, performing visual exploration, and using insights to support informed, data-driven business decisions.",
            image: "Certificates/Cert24.png"
        },
        {
            title: "SQL and Relational Databases 101",
            description: "Successfully completed the “SQL and Relational Databases 101” certification, gaining a solid foundation in relational database concepts and SQL, including database design principles, table creation, data querying and manipulation, joins, filtering, aggregations, and writing efficient queries to extract, analyze, and manage structured data for real-world analytical and business use cases.",
            image: "Certificates/Cert25.png"
        },
        {
            title: "Data Science 101",
            description: "Successfully completed the “Data Science 101” certification by IBM, gaining a comprehensive introduction to data science concepts, including data analysis, machine learning fundamentals, and the role of data science in solving real-world problems, while understanding how data-driven insights support informed decision-making across industries.",
            image: "Certificates/Cert26.png"
        },
        {
            title: "Big Data 101",
            description: "Successfully completed the “Big Data 101” certification by IBM, gaining a comprehensive introduction to big data concepts, including data collection, processing, and analysis using big data technologies. This certification provided insights into the challenges and opportunities in managing large-scale datasets and how big data solutions drive innovation across industries.",
            image: "Certificates/Cert27.png"
        },
        {
            title: "Artificial Intelligence Analyst",
            description: "Successfully completed the “Artificial Intelligence Analyst” program from Babu Banarasi Das University, powered by IBM, gaining comprehensive knowledge of artificial intelligence concepts, machine learning fundamentals, and AI-driven solutions, along with hands-on exposure to data analysis, model development, and ethical considerations, enabling the application of AI techniques to solve real-world business and industry problems.",
            image: "Certificates/Cert28.png"
        },
        {
            title: "Business Intelligence",
            description: "Successfully completed the “Business Intelligence” program from Babu Banarasi Das University, powered by IBM, gaining in-depth knowledge of business intelligence concepts and tools, including data integration, data modeling, dashboard and report development, performance analysis, and transforming complex datasets into actionable insights to support strategic, tactical, and operational decision-making across organizations.",
            image: "Certificates/Cert29.png"
        },
        {
            title: "NoSQL and DBaaS 101",
            description: "Successfully completed the “NoSQL and DBaaS 101” program from Babu Banarasi Das University, powered by IBM, gaining a strong understanding of NoSQL database concepts and Database-as-a-Service (DBaaS) models, including key-value, document, and distributed databases, cloud-based data storage, scalability, availability, and managing modern data architectures to support high-performance, data-driven applications.",
            image: "Certificates/Cert30.png"
        },
        {
            title: "Predictive Modeling Fundamentals I",
            description: "Successfully completed the “Predictive Modeling Fundamentals I” program from Babu Banarasi Das University, powered by IBM, gaining in-depth knowledge of predictive modeling principles and supervised learning techniques, including linear and logistic regression, classification methods, feature engineering, and model evaluation metrics, while learning how to interpret model outputs and apply predictive insights to solve real-world business and analytical problems in a structured, data-driven manner.",
            image: "Certificates/Cert31.png"
        }
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