export default function Skills() {
    return (
        <section id="skills" className="bg-[var(--bg-shade-2)] py-16 px-[85.333px]">
            <div className="w-full max-w-6xl">
                <h2 className='font-bold text-[var(--heading-color)] text-center'>SKILLS</h2>
                <div className='flex justify-between flex-wrap mt-4'>
                    {/* Left Column */}
                    <div className='w-[45%]'>
                        <div className='mt-12'>
                            <h2 className='text-xl font-semibold text-[var(--heading-color)]'>UI/UX Design</h2>
                            <p className='text-[var(--text-color)] mt-2'>Design engaging web applications, android applications, posters, and other visualisations while focusing on user experience.</p>
                            <div className='flex flex-row gap-3 mt-3'>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-md text-[var(--heading-color)]'>Figma</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-md text-[var(--heading-color)]'>Miro</span>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-xl font-semibold text-[var(--heading-color)]'>Android App Development</h2>
                            <p className='text-gray-600 mt-2'>Develop fully functional Android applications from design to deployment.</p>
                            <div className='flex flex-row gap-3 mt-4'>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg text-[var(--heading-color)]'>Java</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg text-[var(--heading-color)]'>Android Studio</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className='w-[47%]'>
                        <div className='mt-12'>
                            <h2 className='text-xl font-semibold text-[var(--heading-color)]'>Web Development (Frontend)</h2>
                            <p className='text-gray-600 mt-2'>Transform designs into responsive, interactive, and fully functional web applications. Integrate frontend with backend using REST API.</p>
                            <div className='flex flex-wrap gap-3 mt-4'>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>JavaScript</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>ReactJS</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>HTML</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>CSS</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>Tailwind CSS</span>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-xl font-semibold text-[var(--heading-color)]'>Backend</h2>
                            <p className='text-gray-600 mt-2'>Build robust and scalable backend services to support web applications, integrating various databases and APIs.</p>
                            <div className='flex flex-wrap gap-3 mt-4'>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>NodeJS</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>SQL</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>C</span>
                                <span className='bg-[var(--golden-beige)] px-4 py-1 rounded-lg shadow text-[var(--heading-color)]'>Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
