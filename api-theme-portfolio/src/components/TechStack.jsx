import '../css/about.css'

function TechStack({categories=[]}) {
    return (
        <div className="tech-stack">
            {categories.map((category, index) => (
                <div key={index} className="tech-category">
                <div className="tech-category-title">{category.title}</div>
                <div className="tech-list">
                    {category.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-item">{item}</span>
                    ))}
                </div>
                </div>
            ))}
        </div>
  );
};

export default TechStack;