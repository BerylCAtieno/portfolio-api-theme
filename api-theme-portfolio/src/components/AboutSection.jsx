import '../css/about.css'

function AboutSection({ title, children, highlights = [] }) {

    const renderContentWithHighlights = (content) => {
    if (!highlights || highlights.length === 0) return content;
    
    let result = content;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      result = result.replace(regex, '<span class="highlight">$1</span>');
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

    return (
        <div className="section">
            <div className="section-title">{title}</div>
            <div className="section-content">
                {typeof children === 'string' ? renderContentWithHighlights(children) : children}
            </div>
        </div>
  );

}

export default AboutSection;