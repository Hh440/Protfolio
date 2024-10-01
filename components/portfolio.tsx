"use client";
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import splitStringUsignRegex from "@/utils/splitStringUsingRegex";
import ThreeText from "./Text3D";
import TextSimple from "./TextSimple";
import Bot from "@/app/component/Bot";

export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const name="Harsh"
  const role="Full Stack Developer"
  const description="Passionate about creating elegant, efficient, and user-friendly web applications. With expertise in modern web technologies, I bring ideas to life through code."


  const nameChar=splitStringUsignRegex(name)
  const roleChar=splitStringUsignRegex(role)
  const descriptionChar=splitStringUsignRegex(description)

  const charVariant={
    hidden:{opacity:0},
    reveal:{opacity:1}
  }

  const projects = [
    {
      title: "CineMax",
      description: "Watch Movies in your nearest Theatres",
      image:
        "https://mars-images.imgix.net/seobot/filmgrail.com/658b734b896bdc25cc352d2c-ebc572d118c7b561e128d60c083a1e7a.png?auto=compress",
      github: "https://github.com/Hh440/CineMax",
      demo: "https://cine-max-bg33.vercel.app/",
    },
    {
      title: "Zenith",
      description: "A FullStack blogging Application. Write your first blog...",
      image:
        "https://c8.alamy.com/comp/ERMBBJ/blogging-website-and-internet-concept-banner-with-blog-word-sign-on-ERMBBJ.jpg",
      github: "https://github.com/Hh440/Zenith.git",
      demo: "https://github.com/Hh440/Zenith.git",
    },
    {
      title: "SolUtili",
      description:
        "Real-time Dapp on Solana Blockchain. See Balance, Airdrop SOL, Create Token and do many more.",
      image:
        "https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/ckeditor/Solanacircle_20231222072329.jpeg",
      github: "https://github.com/Hh440/solutili.git",
      demo: "https://delieli.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Nextjs, React and Tailwind CSS",
      image:
        "https://www.dreamhost.com/blog/wp-content/smush-webp/2023/01/Photography-Portfolio-Site-Feature-730x485.jpg.webp",
      github: "https://github.com/aasiflm10/personal-portfolio",
      demo: "https://protfolio-nine-gamma.vercel.app/",
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const elementId = target.getAttribute("href")?.slice(1);
      const element = document.getElementById(elementId || "");
      if (element) {
        const offset = 80; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full bg-light-secondary dark:bg-dark-secondary bg-opacity-90 shadow-md z-10 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="h-10">
            {
             isDarkMode? <ThreeText/>:<TextSimple/>
            }
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              <a href="#home" className="hover:text-primary">
                Home
              </a>
              <a href="#skills" className="hover:text-primary">
                Skills
              </a>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </nav>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.1, 
              }}
              whileTap={{ scale: 0.9 }}  
            >
              <motion.span
                animate={{
                  rotate: isDarkMode ? 360 : 0,  
                }}
                transition={{
                  duration: 0.5,  
                  ease: "easeInOut",
                }}
              >
                {isDarkMode ? "🌞" : "🌙"}
              </motion.span>
            </motion.button>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-light-secondary dark:bg-dark-secondary p-4 transition-colors duration-300">
            <a href="#home" className="block py-2 hover:text-primary">
              Home
            </a>
            <a href="#skills" className="block py-2 hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="block py-2 hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="block py-2 hover:text-primary">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-light dark:bg-dark transition-colors duration-300 pt-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
          initial="hidden"
          whileInView="reveal"
          variants={charVariant}
          transition={{staggerChildren: 0.2}}
          className="text-5xl md:text-7xl font-bold mb-4 text-primary">

            {nameChar.map(char=>(
              <motion.span
              key={char}
              transition={{duration:0.5}} 
              variants={charVariant}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
          initial="hidden"
          whileInView="reveal"
          variants={charVariant}
          transition={{staggerChildren: 0.1}}
          className="text-xl md:text-3xl mb-8 text-dark dark:text-light">
            {roleChar.map(char=>(
              <motion.span
              key={char}
              transition={{duration:0.7}}
              variants={charVariant}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p 
          initial="hidden"
          whileInView="reveal"
          variants={charVariant}
          transition={{staggerChildren: 0.02}}
          className="max-w-2xl mx-auto text-dark dark:text-light text-lg md:text-xl mb-8">
            {descriptionChar.map(char=>(
              <motion.span
              key={char}
              transition={{duration:0.5}}
              variants={charVariant}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.a

          style={{
            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',  // Gradient background
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',  // Shadow effect
          }}
           animate={
            {opacity:[1,0.5,0,1],
              scale:[1,1.1,1]
            }          
          }

          transition={{
            duration: 20,  // Time for one complete blink
            repeat: Infinity,  // Loop the animation infinitely
            ease: "easeInOut",  // Smoother transition between states
          }}
            href="#contact"
            className="inline-block bg-primary text-white font-bold py-3 px-6  hover:bg-primary-dark transition duration-300"
          >
            Get in Touch
          </motion.a>

          <Bot/>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-light-secondary dark:bg-dark-secondary px-4 transition-colors duration-300 pt-24"
      >
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "React",
              "Node.js",
              "JavaScript",
              "SQL",
              "Git",
              "Three js",
              "Docker",
              "Web3",
              "Solana",
            ].map((skill) => (
              <motion.div
              
                whileHover={{
                  scale:1.05,
                  boxShadow: "0px 4px 20px rgb(7, 111, 115)"
                }}

                transition={{duration:0.5}}
                key={skill}
                className="bg-light dark:bg-dark rounded-lg p-4 text-center transition-colors duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 pt-24">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                  <motion.div
                    whileHover={{
                      scale:1.05, 
                    }}
                    transition={{duration:0.5,bounce:0.5}}
                key={index}
                className="bg-light-secondary dark:bg-dark-secondary rounded-lg overflow-hidden shadow-lg transition-colors duration-300"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-dark dark:text-light opacity-80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-light-secondary dark:bg-dark-secondary px-4 transition-colors duration-300 pt-24"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Hh440"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-0422771a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:harsh100045@gmail.com"
              className="hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light dark:bg-dark py-8 px-4 transition-colors duration-300">
        <div className="container mx-auto text-center text-dark dark:text-light opacity-80">
          <p>&copy; 2024 Harsh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
