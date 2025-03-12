import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [navActive, setNavActive] = useState(false);

  const observeSections = () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  };

  // Detect scroll position
  useEffect(() => {
    const cleanupObserver = observeSections();

    return () => {
      cleanupObserver();
      setActiveSection("");
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setNavActive(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      // observeSections();
    }, 100);
  };

  return (
    <nav className={`shadow-navbar fixed top-0 left-0 right-0 z-50 bg-[var(--bg-shade-2)] py-4 px-20 flex justify-center items-center transition-all ${navActive ? "bg-[var(--bg-shade-1)]" : ""}`}>
      {/* Hamburger Menu */}
      <button
        className="flex flex-col space-y-1 p-2 rounded-md focus:outline-none md:hidden"
        onClick={() => setNavActive(!navActive)}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      {/* Navbar Items */}
      <div className={`absolute top-full left-0 w-full justify-center md:bg-transparent md:static md:flex transition-all duration-300 ${navActive ? "block" : "hidden"}`}>
        <ul className="list-none flex flex-col md:flex-row md:space-x-10 p-4 md:p-0">
          {[
            { id: "aboutMe", label: "About Me" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experiences", label: "Experiences" },
            { id: "contactme", label: "Contact Me" },
          ].map((item) => (
            <li key={item.id}>
              <a
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer text-md transition-all ${
                  activeSection === item.id 
                    ? "text-[var(--primary)] font-bold border-b-2 border-[var(--primary)] pb-1" 
                    : "text-[var(--text-color)]"
                } hover:text-[var(--primary)] hover:font-bold`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
