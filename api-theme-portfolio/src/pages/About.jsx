import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection";
import TechStack from "../components/TechStack";
import ExperienceItem from "../components/ExperienceItem";

function About() {

    const aboutData = {
        overview: {
            content: `I'm a passionate backend developer with a deep love for crafting robust, scalable APIs and building systems that power modern applications. My journey in software development is driven by curiosity, continuous learning, and a commitment to writing clean, maintainable code.

                        With expertise in Go and TypeScript, I specialize in designing RESTful APIs, microservices architectures, and database optimization. I believe that great backend development is invisible to users but essential for creating seamless experiences.`,
            highlights: ["Go and TypeScript"]
        },
        
        philosophy: {
            content: `I'm a strong advocate for open source development and believe in giving back to the community that has shaped my career. Whether it's contributing to existing projects, maintaining libraries, or sharing knowledge through documentation, I find fulfillment in collaborative problem-solving.

                    My approach to development emphasizes simplicity, performance, and reliability. I prefer solutions that are elegant in their simplicity rather than complex in their cleverness.`,
            highlights: ["open source development", "simplicity, performance, and reliability"]
        },
        
        techStack: [
            {
                title: "Languages",
                items: ["Go", "TypeScript", "JavaScript", "Python", "SQL"]
            },
            {
                title: "Frameworks & Tools",
                items: ["Gin", "Echo", "Node.js", "Express", "NestJS"]
            },
            {
                title: "Databases",
                items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
            },
            {
                title: "DevOps & Cloud",
                items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"]
            }
        ],
        
        experience: [
            {
                title: "Senior Backend Developer",
                duration: "2022 - Present",
                description: "Leading the design and development of scalable microservices architecture serving millions of requests daily. Focused on API optimization, database performance tuning, and implementing robust monitoring systems."
            },
            {
                title: "Backend Developer",
                duration: "2020 - 2022",
                description: "Developed and maintained RESTful APIs using Go and Node.js. Collaborated with frontend teams to deliver seamless user experiences while ensuring backend systems remained secure and performant."
            }
        ],
        
        interests: {
            content: `Beyond coding, I'm passionate about distributed systems architecture, performance optimization, and exploring emerging technologies in the backend space. I enjoy contributing to open source projects, writing technical articles, and mentoring junior developers.

                    When I'm not coding, you'll find me reading about system design patterns, experimenting with new databases, or contributing to community projects that aim to make development tools more accessible.`,
            highlights: ["distributed systems architecture", "performance optimization"]
        }
    };
    return (
        <Layout>
            <div className="main-page">
                <div className="page-header">
                    <h1 className="page-title">GET /about</h1>
                    <p className="page-subtitle">Detailed information about the developer</p>
                </div>

                <div className="response-container">
                    <div className="response-header">
                        HTTP/1.1 <span className="status-code">200 OK</span><br />
                        Content-Type: application/json<br />
                        Cache-Control: public, max-age=3600
                    </div>

                    <div className="content-grid">
                        <AboutSection 
                            title="overview" 
                            highlights={aboutData.overview.highlights}
                        >
                            {aboutData.overview.content}
                        </AboutSection>

                        <AboutSection 
                            title="philosophy" 
                            highlights={aboutData.philosophy.highlights}
                        >
                            {aboutData.philosophy.content}
                        </AboutSection>

                        <AboutSection title="technical_skills">
                            <TechStack categories={aboutData.techStack} />
                        </AboutSection>

                        <AboutSection title="experience">
                            {aboutData.experience.map((exp, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={exp.title}
                                    duration={exp.duration}
                                    description={exp.description}
                                />
                            ))}
                        </AboutSection>

                        <AboutSection 
                            title="interests" 
                            highlights={aboutData.interests.highlights}
                        >
                            {aboutData.interests.content}
                        </AboutSection>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About