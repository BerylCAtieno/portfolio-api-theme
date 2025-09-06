import '../css/opensource.css'

function ContributionCard({ 
  type, 
  number, 
  status, 
  repo, 
  title, 
  url, 
  description, 
  meta 
}) {
  const getTypeClass = (type) => type.toLowerCase();
  const getStatusClass = (status) => `status-${status.toLowerCase().replace(' ', '-')}`;

  return (
    <div className="contribution">
      <div className="contribution-header">
        <div className={`contribution-type ${getTypeClass(type)}`}>{type}</div>
        <div className="contribution-number">#{number}</div>
        <div className={`contribution-status ${getStatusClass(status)}`}>{status}</div>
      </div>
      <div className="contribution-repo">{repo}</div>
      <h3 className="contribution-title">
        <a 
          href={url} 
          className="contribution-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h3>
      <div className="contribution-description">
        {description}
      </div>
      <div className="contribution-meta">
        {meta.map((item, index) => (
          <div key={index} className="meta-item">
            <span>{item.label}:</span>
            <span className="highlight">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributionCard