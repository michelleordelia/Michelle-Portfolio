import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import projects from '../data/projectsData.json';
import { MdOutlineArrowBack } from "react-icons/md";

export default function ProjectDetail () {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 px-8 bg-[var(--bg-shade-1)]">
      <div className="container mx-auto pt-2">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--text-color)] hover:text-[var(--heading-color)] hover:font-bold mb-4"
        >
          <MdOutlineArrowBack className="text-xl" /> Back
        </button>

        {/* Project Title */}
        <h3 className="font-bold text-[var(--heading-color)] text-center mb-6">{project.title}</h3>

        {/* Video */}
        <div className="flex justify-center mb-8">
          {project.figmaVideoLink ? (
            <video
              controls
              className="w-full max-w-2xl h-64 sm:h-96 rounded-lg"
            >
              <source src={project.figmaVideoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            project.image && (
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full max-w-2xl h-64 sm:h-70 object-contain rounded-lg"
              />
            )
          )}
        </div>

        {/* Project Description */}
        <p className="text-[var(--text-color)] leading-relaxed mb-6 px-14">{project.description}</p>

        {/* Role */}
        {project.role && (
          <div className="mb-6 px-14">
            <h3 className="font-semibold text-[var(--heading-color)] mb-2">My Role</h3>
            <p className="text-[var(--text-color)]">{project.role}</p>
          </div>
        )}
        
        {/* Github Link */}
        {project.githubLink && (
            <div className="mt-6 px-14">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-500 rounded-3xl text-[var(--text-color)] font-medium transition inline-flex items-center gap-2
                                hover:bg-gray-800 hover:text-white"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.33 1.09 2.9.83.09-.65.35-1.09.63-1.34-2.22-.26-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.48 9.48 0 0 1 12 7.45c.85.004 1.7.11 2.5.32 1.92-1.3 2.75-1.02 2.75-1.02.54 1.4.2 2.45.1 2.7.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.69-4.57 4.95.36.31.69.91.69 1.84v2.73c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                    </svg>
                    View on GitHub
                </a>
            </div>
        )}
      </div>
    </section>
  );
};
