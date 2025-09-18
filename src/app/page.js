"use client";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Circle,
  Code,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Send,
  Menu,
  X,
  Download,
  ArrowRight,
  CheckCircle,
  Linkedin,
} from "lucide-react";
import Navbar from "./component/navbar";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      title: "Weather Analytics Dashboard",
      description:
        "Enterprise-grade weather analytics platform featuring real-time data visualization, predictive forecasting, and multi-city comparison tools with responsive design.",
      image:
        "/weather.jpeg",
      technologies: [
        "React.js",
        "TypeScript",
        "Weather API",
        "Chart.js",
        "Tailwind CSS",
      ],
      liveUrl: "https://weather-dashboard-lovat-alpha.vercel.app/",
      githubUrl: "https://github.com/vijayarakeshrv24/weather-dashboard",
      category: "Frontend Development",
    },
    {
      title: "Chatbot",
      description:
        "Built an AI-powered chatbot using Google Gemini API with memory, real-time streaming responses, and a modern React/Next.js interface",
      image:
        "/chatbot.png",
      technologies: ["Next.js", "Vercel AI SDK", "Gemini"],
      liveUrl: "https://chatbot-red-mu-89.vercel.app/",
      githubUrl: "https://github.com/vijayarakeshrv24/chatbot",
      category: "Full Stack Development",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and comprehensive reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Developed and maintained scalable web applications using modern technologies. Led frontend development initiatives and collaborated with cross-functional teams.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 3 junior developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description:
        "Specialized in creating responsive, user-friendly interfaces and optimizing web performance across multiple client projects.",
      achievements: [
        "Delivered 15+ client projects",
        "Reduced load times by 60%",
        "Mentored junior developers",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .send(
      "service_4kedviq",   // from EmailJS dashboard
      "template_it90j7b",  // from EmailJS dashboard
      formData,
      "0uSVC4BE--_wze0Zx"       // public key from EmailJS
    )
    .then(() => {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
    });
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handledownload=()=>{
  const link = document.createElement('a');
  link.href='/resume.pdf';
  link.download='vijayarakesh-resume.pdf';
  link.click();
  }

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-600 font-medium text-lg">
                  Full Stack Developer
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Vijayarakesh R
                </h1>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Full Stack Developer specializing in modern web technologies. I
                create scalable, user-focused applications
              </p>
              <div className="flex gap-4 pt-4">
                <button onClick={handledownload} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200">
                  Download Resume
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  View Projects
                </button>
              </div>
            </div>

            {/* Right: Enhanced Profile Image */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated background elements */}
              <div className="absolute -inset-8">
                <div
                  className="absolute top-0 left-0 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute top-20 right-0 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-0 right-20 w-8 h-8 bg-indigo-400 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Rotating border */}
              <div
                className="absolute inset-0 bg-amber-300 rounded-full animate-spin p-1 "
                style={{ animationDuration: "5s" }}
              >
                <div className="w-full h-full bg-gray-100 rounded-full "></div>
              </div>

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Vijayarakesh R V - Full Stack Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate developer with expertise in building robust, scalable
                web applications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg text-gray-600">
                  <p>
                    In full-stack development, I specialize in creating modern
                    web applications that solve real-world problems. My
                    expertise spans both frontend and backend technologies,
                    allowing me to build comprehensive solutions from conception
                    to deployment.
                  </p>
                  <p>
                    I&apos;m passionate about writing clean, maintainable code
                    and staying current with emerging technologies. My approach
                    focuses on user experience, performance optimization, and
                    scalable architecture patterns.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Technical Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        category: "Frontend",
                        skills: [
                          "React.js",
                          "Next.js",
                          "TypeScript",
                          "Tailwind CSS",
                        ],
                      },
                      {
                        category: "Backend",
                        skills: [
                          "Node.js",
                          "Express.js",
                          "Python",
                          "REST APIs",
                        ],
                      },
                      {
                        category: "Database",
                        skills: ["MongoDB", "PostgreSQL", "MySQL"],
                      },
                      {
                        category: "Tools",
                        skills: ["Git", "Vercel"],
                      },
                    ].map((group) => (
                      <div
                        key={group.category}
                        className="flex items-center gap-4"
                      >
                        <div className="w-20 text-sm font-medium text-gray-500">
                          {group.category}
                        </div>
                        <div className="flex-1 flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible.experience
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-600">
                Building impactful solutions across diverse projects
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          Key Achievements:
                        </p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600">
                A showcase of my recent work and technical capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-600">
                Ready to bring your ideas to life? Let&apos;s discuss your next
                project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    I&apos;m always open to discussing new opportunities,
                    interesting projects, and potential collaborations. Whether
                    you&apos;re a startup looking to build your MVP or an
                    established company seeking to enhance your digital
                    presence, let&apos;s connect.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "vijayarakeshrv2005@gmail.com",
                      href: "mailto:vijayarakeshrv2005@gmail.com",
                      description: "Drop me a line anytime",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 8220281842",
                      href: "tel:+918220281842",
                      description: "Mon-Fri 9AM-6PM IST",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Tiruvannamalai, Tamil Nadu",
                      href: null,
                      description: "Available for remote work",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {item.label}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">
                            {item.value}
                          </p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Why Choose Me?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Clean, maintainable code",
                      "Responsive communication",
                      "On-time delivery",
                      "Modern best practices",
                      "Scalable solutions",
                      "Post-launch support",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>

                

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Typically responds within 24 hours
                  </p>
                </div>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-green-800 font-medium">
                        Message sent successfully!
                      </p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Vijayarakesh R </div>
            <p className="text-gray-400 mb-6">Full Stack Developer</p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/vijayarakeshrv24"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vijayarakesh-r-58bb5a32a/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vijayarakeshrv2005@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+918220281842"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Vijayarakesh R . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
