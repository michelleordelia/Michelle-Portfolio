import AboutMe from "../sections/AboutMe";
import Experiences from "../sections/Experiences";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import ContactMe from "../sections/ContactMe";

export default function MainPage () {
    return (
        <>
            <AboutMe />
            <Skills />
            <Projects />
            <Experiences />
            <ContactMe />
        </>
    );
}