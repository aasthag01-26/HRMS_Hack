import "./grievance.css";

export default function Grievance() {
  return (
    <div className="grievance-page">
      {/* HEADER */}
      <div className="grievance-header">
        <div>
          <h2>Grievance Management</h2>
          <p>Review and resolve employee grievances</p>
        </div>

        <button className="outline-btn">⬇ Export Report</button>
      </div>

      {/* STATS */}
      <div className="grievance-stats">
        <StatCard title="Total Grievances" value="3" />
        <StatCard title="Pending" value="2" orange />
        <StatCard title="Resolved" value="1" green />
      </div>

      {/* FILTERS */}
      <div className="filters">
        <select>
          <option>All Status</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>

        <select>
          <option>All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select>
          <option>All Categories</option>
          <option>Salary</option>
          <option>Infrastructure</option>
          <option>IT Support</option>
        </select>
      </div>

      {/* GRIEVANCE LIST */}
      <div className="card">
        <h4>💬 All Grievances</h4>

        <GrievanceCard
          name="Rahul Singh"
          id="MC-2024-1238"
          dept="Public Works"
          category="Salary Delay"
          title="Overtime payment not credited"
          desc="Overtime for December 2024 has not been credited to my account despite working 15 extra hours."
          date="2024-01-15"
          priority="High"
          status="Pending"
        />

        <GrievanceCard
          name="Meera Joshi"
          id="MC-2024-1239"
          dept="Finance"
          category="Infrastructure"
          title="AC not working in office"
          desc="The air conditioning in Block B, 2nd floor has not been working for the past week."
          date="2024-01-18"
          priority="Medium"
          status="Pending"
        />

        <GrievanceCard
          name="Amit Patel"
          id="MC-2024-1236"
          dept="IT"
          category="IT Support"
          title="Computer monitor flickering"
          desc="My workstation monitor has been flickering continuously, causing eye strain."
          date="2024-01-10"
          priority="Low"
          status="Resolved"
          resolution="Monitor has been replaced with a new one. Please confirm if the issue is resolved."
        />
      </div>
    </div>
  );
}

/* COMPONENTS */

function StatCard({
  title,
  value,
  green,
  orange,
}: {
  title: string;
  value: string;
  green?: boolean;
  orange?: boolean;
}) {
  return (
    <div className="stat-card">
      <h3 className={green ? "green" : orange ? "orange" : ""}>
        {value}
      </h3>
      <p>{title}</p>
    </div>
  );
}

function GrievanceCard({
  name,
  id,
  dept,
  category,
  title,
  desc,
  date,
  priority,
  status,
  resolution,
}: any) {
  return (
    <div className="grievance-card">
      <div className="grievance-top">
        <div>
          <strong>
            {name} <span className="muted">({id})</span>
          </strong>
          <p className="muted">{dept} • {category}</p>
        </div>

        {status === "Pending" && (
          <button className="primary-btn">Resolve</button>
        )}
      </div>

      <h4>{title}</h4>
      <p className="muted">{desc}</p>

      <div className="meta">
        <span className={`badge ${priority.toLowerCase()}`}>
          {priority} Priority
        </span>
        <span className={`badge ${status.toLowerCase()}`}>
          {status}
        </span>
        <span className="muted">Submitted on {date}</span>
      </div>

      {resolution && (
        <div className="resolution-box">
          <strong>✅ Resolution</strong>
          <p>{resolution}</p>
        </div>
      )}
    </div>
  );
}
