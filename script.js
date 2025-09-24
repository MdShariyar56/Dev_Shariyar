
    
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Skills section logic (unchanged from last time)
        const skills = [
            { name: "HTML", icon: "fa-brands fa-html5", color: "bg-red-500", hoverColor: "hover:bg-red-600", description: "Standard markup language for web pages." },
            { name: "CSS", icon: "fa-brands fa-css3-alt", color: "bg-blue-500", hoverColor: "hover:bg-blue-600", description: "Used for styling web pages." },
            { name: "JavaScript", icon: "fa-brands fa-js", color: "bg-yellow-400", hoverColor: "hover:bg-yellow-500", description: "Programming language for web interactivity." },
            { name: "React", icon: "fa-brands fa-react", color: "bg-cyan-400", hoverColor: "hover:bg-cyan-500", description: "A JavaScript library for building UIs." },
            { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "bg-purple-600", hoverColor: "hover:bg-purple-700", description: "A CSS framework for responsive designs." },
            { name: "Tailwind", link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", color: "bg-teal-500", hoverColor: "hover:bg-teal-600", description: "A utility-first CSS framework." },
            { name: "Node.js", icon: "fa-brands fa-node-js", color: "bg-green-500", hoverColor: "hover:bg-green-600", description: "A JavaScript runtime for backend development." },
            { name: "GitHub", icon: "fa-brands fa-github", color: "bg-gray-800", hoverColor: "hover:bg-gray-900", description: "Platform for version control." },
            { name: "Git", icon: "fa-brands fa-git-alt", color: "bg-red-900", hoverColor: "hover:bg-red-950", description: "Distributed version control system." },
            { name: "Firebase", link: "https://i.ibb.co.com/zhxtnw7D/firebase-Didl-ETe1-1.png", color: "bg-red-600", hoverColor: "hover:bg-red-700", description: "Backend-as-a-Service platform." },
            { name: "Express.js", link: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", color: "bg-gray-900", hoverColor: "hover:bg-black", description: "A web application framework for Node.js." },
            { name: "MongoDB", link: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", color: "bg-green-700", hoverColor: "hover:bg-green-800", hideName: true, description: "A NoSQL database program." }
        ];

        const skillsContainer = document.getElementById('skills-container');

        skills.forEach(skill => {
            const card = document.createElement('div');
            card.className = `p-4 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 cursor-pointer ${skill.color} ${skill.hoverColor}`;
            
            let skillElement;
            if (skill.icon) {
                skillElement = document.createElement('i');
                skillElement.className = skill.icon + " text-6xl mb-2 text-white";
            } else if (skill.link) {
                skillElement = document.createElement('img');
                skillElement.src = skill.link;
                skillElement.alt = skill.name;
                if (skill.name === "MongoDB") {
                    skillElement.className = "h-32 w-32 mb-2 filter grayscale grayscale-0 transition-all duration-300";
                } else {
                    skillElement.className = "h-20 w-20 mb-2 filter grayscale grayscale-0 transition-all duration-300";
                }
            }
            
            if (skillElement) {
                card.appendChild(skillElement);
            }
            if (!skill.hideName) {
                const name = document.createElement('h2');
                name.className = "text-white text-2xl font-bold text-center";
                name.innerText = skill.name;
                card.appendChild(name);
            }
            if (skill.description) {
                const description = document.createElement('p');
                description.className = "text-white text-sm text-center mt-2";
                description.innerText = skill.description;
                card.appendChild(description);
            }
            card.addEventListener('click', () => {
                alert(`আপনি ${skill.name} এ ক্লিক করেছেন!`);
            });
            skillsContainer.appendChild(card);
        });

        // Project section logic (NEW CODE)
        const projects = [
            {
                name: "English-janala",
                description: "English-janala is a complete online dictionary.Here, you will find the meaning, definition, synonyms, and antonyms of every word",
                image: "https://i.ibb.co.com/0jv1Xvnz/Screenshot-2025-09-23-201042.png",
                link: "https://mdshariyar56.github.io/English-janala/"
            },
            {
                name: "Emergency Service",
                description: "Our emergency service is committed to providing immediate assistance in any urgent situation. Our trained team is ready 24/7 to help with any emergency needs, whether they are medical, fire, or otherwise.",
                image: "https://i.ibb.co.com/wZHgRsDD/Screenshot-2025-09-23-201236.png",
                link: "https://mdshariyar56.github.io/EmergencyServiceDirectory/"
            },
            {
                name: "Plant a Tree, Grow a Future",
                description: "Planting a tree is not just placing a sapling in the soil, rather it is sowing the seeds of a beautiful and healthy future.On this site, you can find all kinds of trees you like.",
                image: "https://i.ibb.co.com/gZt12Vfm/Screenshot-2025-09-23-200745.png",
                link: "https://mdshariyar56.github.io/Tree-Plantation/"
            },
            {
                name: "Texi-Butger",
                description: "For our valued customers, we present a modern digital menu card. Now you can easily view your favorite dishes, read their descriptions, and place an order by looking at the pictures.",
                image: "https://i.ibb.co.com/3YNgyp9Q/Screenshot-2025-09-23-231429.png",
                link: "https://mdshariyar56.github.io/Texi-Butger/#food"
            },
            {
                name: "Deshi-Deals",
                description: "Welcome to my shopping cart! Here you can see all the products you like. Please take a look at your selected product list before completing your order.All your favorite items are gathered here.",
                image: "https://i.ibb.co.com/1YqfRXgg/Screenshot-2025-09-23-233428.png",
                link: "https://mdshariyar56.github.io/Deshi-Deals/"
            },
            {
                name: "BPL Cricket",
                description: "On our platform, you can find the best players for your favorite cricket team. By looking at each player's detailed profile, performance statistics, and current market value, you can make a smart decision.",
                image: "https://i.ibb.co.com/5WzYVkfN/Screenshot-2025-09-23-232519.png",
                link: "http://annoyed-yak.surge.sh/"
            }
        ];

        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
            const projectLink = document.createElement('a');
            projectLink.href = project.link;
            projectLink.target = "_blank"; // Opens link in a new tab

            const card = document.createElement('div');
            card.className = "bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl";

            const projectImage = document.createElement('img');
            projectImage.src = project.image;
            projectImage.alt = project.name;
            projectImage.className = "w-full h-30 object-cover";

            const content = document.createElement('div');
            content.className = "p-4";

            const projectName = document.createElement('h3');
            projectName.className = "text-xl font-bold text-gray-800 mb-2";
            projectName.innerText = project.name;

            const projectDescription = document.createElement('p');
            projectDescription.className = "text-gray-600";
            projectDescription.innerText = project.description;

            content.appendChild(projectName);
            content.appendChild(projectDescription);

            card.appendChild(projectImage);
            card.appendChild(content);

            projectLink.appendChild(card);

            projectsContainer.appendChild(projectLink);
        });
//// Education section logic with image and link - Modified for responsive layout
const education = [
    {
        degree: "Diploma in Engineering",
        institute: "BRAHMANBARIYA POLYTECHNIC INSTITUTE",
        year: "2022 - Present",
        details: "Studying Computer Science and Technology.",
        image: "https://i.ibb.co.com/VYY7ZwnB/325190153-576536110523609-7018332447352581830-n.jpg",
        link: "https://www.facebook.com/BBPIT"
    },
    {
        degree: "SSC (Secondary School Certificate)",
        institute: "DHAP SATGARA BAITUL MUKARRAM KAMIL MADRASAH",
        year: "2021 | Completed",
        details: "Completed my secondary education with a focus on Science.",
        image: "https://i.ibb.co.com/mCCnZWvy/02.jpg",
        link: "https://www.facebook.com/SatgaraMadrasah/"
    },
    {
        degree: "JSC (Junior School Certificate)",
        institute: "DHAP SATGARA BAITUL MUKARRAM KAMIL MADRASAH",
        year: "2018 | Completed",
        details: "Completed my junior school education.",
        image: "https://i.ibb.co.com/mCCnZWvy/02.jpg",
        link: "https://www.facebook.com/SatgaraMadrasah/"
    }
];
const educationContainer = document.getElementById('education-container');

education.forEach(edu => {
    // Outer card element for each education item
    const card = document.createElement('div');
    // Small screen: flex-col with centered items
    // Medium screen: flex-row with items aligned to center
    card.className = "bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 transform transition-transform duration-300 hover:scale-105";

    // --- Image Section ---
    const imageLinkWrapper = document.createElement('a');
    imageLinkWrapper.href = edu.link;
    imageLinkWrapper.target = "_blank";
    imageLinkWrapper.className = "flex-shrink-0";

    const instituteImage = document.createElement('img');
    instituteImage.src = edu.image;
    instituteImage.alt = edu.institute;
    // Small screen: w-60 h-30, center-aligned
    // Medium screen: w-60 h-30, remains same
    instituteImage.className = "w-60 h-30 object-contain";
    imageLinkWrapper.appendChild(instituteImage);
    card.appendChild(imageLinkWrapper);

    // --- Text Content Section ---
    const textContent = document.createElement('div');
    // Small screen: text-center, full width
    // Medium screen: flex-1 for growth, text-left
    textContent.className = "flex-1 text-center md:text-left";

    const degree = document.createElement('h3');
    degree.className = "text-xl font-bold text-blue-800 mb-1";
    degree.innerText = edu.degree;

    const instituteName = document.createElement('a');
    instituteName.href = edu.link;
    instituteName.target = "_blank";
    instituteName.className = "text-gray-700 font-sm text-lg hover:underline block mb-1";
    instituteName.innerText = edu.institute;

    const year = document.createElement('p');
    year.className = "text-green-600 text-xl font-semibold mb-2";
    year.innerText = edu.year;

    const details = document.createElement('p');
    details.className = "text-gray-800 text-lg font-bold";
    details.innerText = edu.details;

    // Append text elements to the textContent div
    textContent.appendChild(degree);
    textContent.appendChild(instituteName);
    textContent.appendChild(year);
    textContent.appendChild(details);
    card.appendChild(textContent);

    // Append the final card to the container
    educationContainer.appendChild(card);
});

const form = document.getElementById('contact-form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

   
    alert('Thank you for your message! We will get back to you soon.');

    
    form.reset();
});













    