import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:tex font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Motivated Front-End Developer Ready to Grow
                        </h3>

                        <p className="text-muted-foreground">
                            I’m an enthusiastic and dedicated entry-level front-end developer, 
                            passionate about creating modern, responsive websites and user interfaces.
                        </p>

                        <p className="text-muted-foreground">
                            I truly enjoy this profession and I’m eager to bring creativity, 
                            commitment, and continuous learning to a dynamic development team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="/Ilias Kirtsiotis CV.pdf"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font text-semibold text-lg">Computer Engineering Graduate</h4>
                                    <p className="text-muted-foreground">
                                        I hold a degree in Computer Engineering, 
                                        which provided me with a solid foundation in software, 
                                        hardware, and problem-solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font text-semibold text-lg">TechPro Academy Graduate</h4>
                                    <p className="text-muted-foreground">
                                        I completed an intensive bootcamp at TechPro Academy, 
                                        focused on front-end development with modern technologies 
                                        and real-world projects. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font text-semibold text-lg">Driven to Grow in Web Development</h4>
                                    <p className="text-muted-foreground">
                                        I’m passionate about programming and eager to contribute to a creative team, 
                                        while continuously learning and evolving as a developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}