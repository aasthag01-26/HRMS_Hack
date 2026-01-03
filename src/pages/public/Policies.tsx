import "./policies.css";

const policies = [
  {
    title: "Employee Leave Policy",
    type: "Policy",
    year: 2024,
    desc: "Comprehensive guidelines for all types of leave including casual, medical, and earned leave.",
    dept: "Human Resources",
  },
  {
    title: "Code of Conduct",
    type: "Guideline",
    year: 2024,
    desc: "Standards of professional behavior expected from all municipal employees.",
    dept: "General Administration",
  },
  {
    title: "Grievance Redressal Mechanism",
    type: "Policy",
    year: 2024,
    desc: "Procedure for filing and resolving employee grievances and complaints.",
    dept: "Human Resources",
  },
  {
    title: "Transfer Policy",
    type: "Policy",
    year: 2023,
    desc: "Guidelines governing inter-departmental and location transfers.",
    dept: "Administration",
  },
  {
    title: "Travel & DA Rules",
    type: "Circular",
    year: 2024,
    desc: "Daily allowance and travel reimbursement rates and procedures.",
    dept: "Finance Department",
  },
  {
    title: "Performance Appraisal Guidelines",
    type: "Guideline",
    year: 2024,
    desc: "Annual performance review process and evaluation criteria.",
    dept: "Human Resources",
  },
];

export default function Policies() {
  return (
    <div className="policies-page">
      {/* HEADER */}
      <div className="policies-header">
        <h2>Policies & Circulars</h2>
        <p>HR policies, guidelines, and official circulars</p>
      </div>

      {/* FILTER BAR */}
      <div className="filter-card">
        <h4>🔎 Filter Documents</h4>
        <div className="filters">
          <select>
            <option>All Departments</option>
            <option>Human Resources</option>
            <option>Administration</option>
            <option>Finance Department</option>
          </select>

          <select>
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      {/* POLICIES GRID */}
      <div className="policy-grid">
        {policies.map((p, i) => (
          <div key={i} className="policy-card">
            <div className="policy-top">
              <span className="doc-icon">📄</span>
              <div>
                <h4>{p.title}</h4>
                <span className="meta">
                  {p.type} • {p.year}
                </span>
              </div>
            </div>

            <p className="desc">{p.desc}</p>

            <div className="dept">🏢 {p.dept}</div>

            <div className="actions">
              <button className="view-btn">👁 View</button>
              <button className="download-btn">⬇ Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
