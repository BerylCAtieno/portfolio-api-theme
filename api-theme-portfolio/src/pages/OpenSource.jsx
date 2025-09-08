import Layout from '../components/Layout.jsx';
import StatsCard from '../components/StatsCard.jsx';
import ContributionCard from '../components/ContributionCard.jsx';
import '../css/opensource.css';

function OpenSource() {
  const statsData = [
    { number: 23, label: "Pull Requests" },
    { number: 15, label: "Issues Opened" },
    { number: 8, label: "Repositories" },
    { number: 142, label: "Commits" }
  ];

  const contributionsData = [
    {
      type: "PR",
      number: "2847",
      status: "MERGED",
      repo: "gin-gonic/gin",
      title: "Add context-aware request timeout middleware",
      url: "https://github.com/gin-gonic/gin/pull/2847",
      description: "Implemented a new middleware that provides configurable request timeouts with proper context cancellation. This enhancement improves the framework's ability to handle long-running requests and prevents resource leaks. The middleware supports custom timeout durations and graceful error handling.",
      meta: [
        { label: "Language", value: "Go" },
        { label: "Lines", value: "+147 -23" },
        { label: "Files", value: "5" }
      ]
    },
    {
      type: "ISSUE",
      number: "1756",
      status: "CLOSED",
      repo: "fastify/fastify",
      title: "Memory leak in request validation with large schemas",
      url: "https://github.com/fastify/fastify/issues/1756",
      description: "Identified and reported a memory leak occurring when using large JSON schemas for request validation. The issue was causing significant memory consumption in production environments with high request volumes. Provided detailed reproduction steps, memory profiling data, and suggested potential solutions.",
      meta: [
        { label: "Language", value: "TypeScript" },
        { label: "Impact", value: "High" },
        { label: "Reproduced", value: "Yes" }
      ]
    },
    {
      type: "PR",
      number: "892",
      status: "MERGED",
      repo: "labstack/echo",
      title: "Improve JWT middleware performance with token caching",
      url: "https://github.com/labstack/echo/pull/892",
      description: "Enhanced the JWT middleware by implementing an intelligent caching mechanism for validated tokens. This optimization reduces CPU usage by up to 40% in high-traffic scenarios while maintaining security standards. Added comprehensive tests and benchmarks to demonstrate performance improvements.",
      meta: [
        { label: "Language", value: "Go" },
        { label: "Lines", value: "+89 -12" },
        { label: "Performance", value: "+40% faster" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="main-page">
        <div className="page-header">
          <h1 className="page-title">GET /opensource</h1>
          <p className="page-subtitle">Community contributions and open source involvement</p>
        </div>

        <div className="response-container">
          <div className="response-header">
            HTTP/1.1 <span className="status-code">200 OK</span><br />
            Content-Type: application/json<br />
            Cache-Control: public, max-age=3600
          </div>

          <div className="stats-section">
            <div className="stats-title">contribution_summary</div>
            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <StatsCard 
                  key={index}
                  number={stat.number} 
                  label={stat.label} 
                />
              ))}
            </div>
          </div>

          <div className="contributions-list">
            {contributionsData.map((contribution, index) => (
              <ContributionCard
                key={index}
                type={contribution.type}
                number={contribution.number}
                status={contribution.status}
                repo={contribution.repo}
                title={contribution.title}
                url={contribution.url}
                description={contribution.description}
                meta={contribution.meta}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OpenSource;

// add real OS contributions
