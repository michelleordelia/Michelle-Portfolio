import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactMe() {
    return (
        <section id="contactme" className="bg-[var(--bg-shade-1)] py-16 px-[85.333px]">
            <div className="flex flex-row items-center justify-center gap-6">
                <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
                <div className="flex gap-4">
                    {/* GitHub */}
                    <a href="https://github.com/michelleordelia" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition">
                        <FaGithub size={24} />
                    </a>

                    {/* Email */}
                    <a href="mailto:michelleordelia@gmail.com" 
                       className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition">
                        <FaEnvelope size={24} />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/michelleordeliasumaryo/" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}
