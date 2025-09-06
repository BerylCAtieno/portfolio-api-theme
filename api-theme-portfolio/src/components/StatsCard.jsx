import '../css/opensource.css'

function StatsCard({ number, label }) {
  return (
    <div className="stat-item">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default StatsCard