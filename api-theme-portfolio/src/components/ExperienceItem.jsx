import '../css/about.css'

function ExperienceItem({title, duration, description}) {

    return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-title">{title}</div>
        <div className="experience-duration">{duration}</div>
      </div>
      <div className="experience-description">
        {description}
      </div>
    </div>
  );

}


export default ExperienceItem