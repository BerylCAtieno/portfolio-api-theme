function ContributionCard({title, description, link}) {

    return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="endpoint"
      >
        View Repository →
      </a>
    </div>
  );

}

export default ContributionCard