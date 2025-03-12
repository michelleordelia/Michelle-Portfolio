import experienceData from "../data/experienceData.json";

export default function Experiences() {
    return (
        <section id="experiences" className="bt-[var(--bg-shade-2)] py-16 px-8">
            <h2 className="font-bold text-center text-[var(--heading-color)] mb-12">EXPERIENCES</h2>
            
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-7 top-0 h-full w-1 bg-[var(--golden-beige)]"></div>
                
                {experienceData.map((element, index) => (
                    <div key={element.id} className="flex items-start w-full mb-12">
                        {/* Timeline Circle */}
                        <div className="w-[50px] flex justify-center relative">
                            <div className="w-4 h-4 bg-[var(--primary)] rounded-full absolute left-[22px] top-2"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="w-full pl-12 text-left">
                            <div className="text-sm text-[var(--primary)] font-medium">{element.date}</div>
                            <div className="text-lg font-bold text-[var(--heading-color)]">{element.title}</div>
                            <div className="text-sm italic text-[var(--soft-color)]">{element.location}</div>
                            <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-[var(--text-color)] leading-relaxed">
                                {element.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {element.tech.map((tech, index) => (
                                    <span key={index} className="text-sm text-[var(--heading-color)] bg-[var(--golden-beige)] px-2 py-1 rounded-md">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
