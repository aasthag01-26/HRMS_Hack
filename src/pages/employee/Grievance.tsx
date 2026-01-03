import "./grievance.css";

const grievances = [
  {
    category: "Infrastructure",
    status: "Resolved",
    title: "AC not working in office",
    description:
      "The air conditioning in Block B, 2nd floor has not been working for the past week.",
    date: "2024-01-10",
    resolution:
      "AC unit has been repaired. Please verify and confirm.",
  },
  {
    category: "IT Support",
    status: "Pending",
    title: "Computer monitor flickering",
    description:
      "My workstation monitor has been flickering continuously, causing eye strain.",
    date: "2024-01-18",
  },
  {
    category: "Salary",
    status: "Pending",
    title: "Overtime payment not credited",
    description:
      "Overtime for December 2024 has not been credited to my account.",
    date: "2024-01-20",
  },
];

export default function Grievance() {
  return (
    <div className="grievance-page">
      {/* HEADER */}
      <div className="grievance-header">
        <div>
          <h2>Grievance / Complaint</h2>
          <p>Submit and track your grievances</p>
        </div>

        <button className="primary-btn">+ File Grievance</button>
      </div>

      {/* STATS */}
      <div className="grievance-stats">
        <StatCard label="Total Filed" value={3} />
        <StatCard label="Pending" value={2} />
        <StatCard label="Resolved" value={1} />
      </div>

      {/* LIST */}
      <div className="grievance-card">
        <h4>📄 My Grievances</h4>

        {grievances.map((g, i) => (
          <div className="grievance-item" key={i}>
            <div className="grievance-tags">
              <span className="tag">{g.category}</span>
              <span className={`status ${g.status.toLowerCase()}`}>
                {g.status}
              </span>
            </div>

            <h5>{g.title}</h5>
            <p className="desc">{g.description}</p>
            <small>Submitted on {g.date}</small>

            {g.status === "Resolved" ? (
              <div className="resolution-box success">
                ✔ {g.resolution}
              </div>
            ) : (
              <div className="resolution-box pending">
                ⏳ Your grievance is being reviewed. You will be notified once
                resolved.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* COMPONENT */
function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
