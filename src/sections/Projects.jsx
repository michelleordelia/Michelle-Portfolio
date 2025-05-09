import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import projects from '../data/projectsData.json';

export default function Projects() {
    const navigate = useNavigate();

    return (
        <section id="projects" className="bg-[var(--bg-shade-1)] py-16 px-[85.333px]">
            <h2 className="font-bold text-center text-[var(--heading-color)] mb-12">PROJECTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
                <div onClick={() => navigate(`/${project.id}`)} key={index} className="h-auto bg-white p-4 rounded-2xl transition-all transform shadow-[0px_4px_8px_rgba(0,0,0,0.05)] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-contain rounded-md mb-4"
                    />
                    <p className="text-xl font-bold text-[var(--heading-color)] mb-1">{project.title}</p>
                    <p className="text-sm text-[var(--text-color)] mb-2">{project.award}</p >
                    <p className="text-sm text-[var(--text-color)] mb-8">{project.shortDescription}</p>
                    <div className="absolute bottom-5 left-4 flex items-center gap-1 text-[var(--primary)] text-sm font-medium transition-transform duration-300 ease-in-out">
                        <span>View More</span>
                        <MdOutlineArrowOutward className="w-4 h-4" />
                    </div>
                </div>
                
            ))}
            </div>
    </section>
  );
}