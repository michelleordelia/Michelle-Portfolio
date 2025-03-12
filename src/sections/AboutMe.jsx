import me from '../images/me1.jpg'

export default function AboutMe() {
    return (
        <section 
            id="aboutMe" 
            className="grid grid-cols-2 items-center justify-between gap-8 bg-[var(--bg-shade-1)] py-[113.333px] px-[85.333px]">
            <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col items-start gap-[21.333px]">
                    <h3 className="font-bold text-[var(--heading-color)]">Hi! I'm <span className="text-[var(--primary)]">MICHELLE ORDELIA</span> -</h3>
                    <h1 className="font-bold text-[var(--heading-color)] self-stretch">
                        <span className="inline-block transition-transform transform hover:scale-110 cursor-auto">Software Engineer</span>
                    </h1>
                    <p className="text-md font-normal text-[var(--text-color)] leading-[30px] mt-2">
                        Final-year student at the Singapore University of Technology and Design (SUTD), pursuing Bachelor of Engineering in <span className="font-bold text-[var(--primary)]">Computer Science and Design (CSD)</span> with a specialization in Software Engineering and Financial Technology.
                    </p>
                    <p className="text-md font-normal text-[var(--text-color)] leading-[30px]">
                        I'm passionate about <span className="font-bold text-[var(--primary)]">software development</span>, particularly frontend development, where I focus on creating intuitive and engaging user experiences. However, I'm always eager to learn new technologies and expand my skills in full-stack development and beyond!
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={me} alt="About Me" className="w-1/2 h-full"></img>
            </div>
        </section>
    );
}