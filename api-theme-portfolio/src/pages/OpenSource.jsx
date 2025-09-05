import Layout from "../components/Layout.jsx";
import ContributionCard from "../components/ContributionCard.jsx";
import '../css/opensource.css'

function OpenSource() {
    const contributions = [
    {
      title: "Gin API Starter",
      description:
        "A starter template for quickly bootstrapping Go projects with Gin, JWT auth, and PostgreSQL.",
      link: "https://github.com/yourusername/gin-api-starter",
    },
    {
      title: "TypeScript Utils",
      description:
        "A collection of TypeScript utility functions for arrays, objects, and async workflows.",
      link: "https://github.com/yourusername/typescript-utils",
    },
    {
      title: "Open Source Contribution to X",
      description:
        "Fixed concurrency issues and added test coverage for an open source Go project.",
      link: "https://github.com/org/repo/pull/123",
    },
  ];

  return (
    <Layout>
      <div className="content">
        <h1 className="greeting">Open Source Contributions</h1>
        <p className="description">
          I actively contribute to <span className="highlight">open source projects</span> 
          to learn, grow, and give back to the developer community.
        </p>

        <div className="cards-grid">
          {contributions.map((c, i) => (
            <ContributionCard
              key={i}
              title={c.title}
              description={c.description}
              link={c.link}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default OpenSource