import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import '../css/projects.css'

function Project() {

    const projectsData = [
        {
            title: "TaskFlow API",
            description: "A high-performance task management API built with Go and PostgreSQL. Features real-time collaboration, advanced querying, and microservices architecture. Handles over 10,000 concurrent users with sub-100ms response times. Includes comprehensive authentication, role-based access control, and automated testing pipeline.",
            techStack: ["Go", "Gin", "PostgreSQL", "Redis", "Docker", "JWT", "WebSocket"],
            githubUrl: "https://github.com/berylatieno/taskflow-api",
            demoUrl: "https://taskflow-api-demo.vercel.app",
            highlights: ["10,000 concurrent users"],
            terminalContent: [
                "$ curl -X GET api.taskflow.dev/v1/projects",
                "{",
                '  "status": "success",',
                '  "data": {',
                '    "projects": [...],',
                '    "total": 47',
                "  }",
                "}"
            ]
        },
        {
            title: "Analytics Engine",
            description: "Real-time analytics platform built with TypeScript and Node.js. Processes millions of events per hour with 99.9% uptime. Features event streaming, custom dashboards, and automated reporting. Implements advanced data aggregation and provides RESTful APIs for third-party integrations.",
            techStack: ["TypeScript", "Node.js", "NestJS", "MongoDB", "ClickHouse", "Kafka", "AWS"],
            githubUrl: "https://github.com/berylatieno/analytics-engine",
            demoUrl: null,
            highlights: ["99.9% uptime"],
            terminalContent: [
                "$ npm run dev",
                "Server running on http://localhost:3000",
                "⚡ Real-time analytics started",
                "📊 Processing 2.3M events/hour",
                "✅ Database connection established",
                "🔄 WebSocket server active"
            ]
        },
        {
            title: "Distributed File Storage",
            description: "Scalable microservices-based file storage system with automatic replication and load balancing. Built with Go, featuring 99.99% availability and horizontal scaling capabilities. Implements encryption at rest, comprehensive monitoring, and supports multiple storage backends including S3 and local filesystems.",
            techStack: ["Go", "Echo", "gRPC", "Consul", "MinIO", "Prometheus", "K8s"],
            githubUrl: "https://github.com/berylatieno/distributed-storage",
            demoUrl: null, // No demo URL for this project
            highlights: ["99.99% availability"],
            terminalContent: [
                "$ go run main.go",
                "🔐 Auth service started on :8001",
                "📦 User service started on :8002",
                "💾 Storage service started on :8003",
                "🌐 API Gateway listening on :8000",
                "✅ All microservices healthy"
            ]
        }
    ];
    return (
        <Layout>
            <div className="opensource-page">
                <div className="page-header">
                    <h1 className="page-title">GET /projects</h1>
                    <p className="page-subtitle">Featured backend applications and systems</p>
                </div>

                <div className="response-container">
                    <div className="response-header">
                        HTTP/1.1 <span className="status-code">200 OK</span><br />
                        Content-Type: application/json<br />
                        Cache-Control: public, max-age=3600
                    </div>
                    <div className="projects-grid">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                githubUrl={project.githubUrl}
                                demoUrl={project.demoUrl}
                                highlights={project.highlights}
                                terminalContent={project.terminalContent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Project