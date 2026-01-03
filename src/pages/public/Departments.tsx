import "./departments.css";

const departments = [
  {
    name: "Human Resources Department",
    desc: "Manages recruitment, employee welfare, training, performance appraisals, and personnel policies.",
    room: "Room 101, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5601",
    email: "hr@municipal.gov.in",
  },
  {
    name: "Finance Department",
    desc: "Handles budgeting, salary disbursement, accounts, audits, and financial planning.",
    room: "Room 201, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5602",
    email: "finance@municipal.gov.in",
  },
  {
    name: "General Administration",
    desc: "Oversees day-to-day administrative functions, office management, and general services.",
    room: "Room 102, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5603",
    email: "admin@municipal.gov.in",
  },
  {
    name: "Engineering Department",
    desc: "Manages infrastructure projects, road maintenance, building construction, and civil works.",
    room: "Room 301, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5604",
    email: "engineering@municipal.gov.in",
  },
  {
    name: "Health & Sanitation",
    desc: "Responsible for public health, sanitation, waste management, and disease prevention.",
    room: "Room 401, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5605",
    email: "health@municipal.gov.in",
  },
  {
    name: "Water Supply Department",
    desc: "Manages water distribution, pipeline maintenance, and water quality monitoring.",
    room: "Room 402, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5606",
    email: "water@municipal.gov.in",
  },
  {
    name: "Town Planning",
    desc: "Handles urban planning, building permissions, zoning regulations, and city development.",
    room: "Room 501, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5607",
    email: "planning@municipal.gov.in",
  },
  {
    name: "IT Department",
    desc: "Manages IT infrastructure, software systems, digital services, and technical support.",
    room: "Room 103, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5608",
    email: "it@municipal.gov.in",
  },
  {
    name: "Revenue Department",
    desc: "Handles property tax collection, license fees, and other municipal revenue matters.",
    room: "Room 202, Municipal Corporation HQ",
    phone: "+91 (0XX) 234-5609",
    email: "revenue@municipal.gov.in",
  },
];

export default function Departments() {
  return (
    <div className="departments-page">
      {/* HEADER */}
      <div className="dept-header">
        <h2>Department Overview</h2>
        <p>Municipal Corporation departments and their functions</p>
      </div>

      {/* COUNT CARD */}
      <div className="dept-count">
        <div className="count-box">
          <span className="count-icon">🏢</span>
          <div>
            <h3>{departments.length}</h3>
            <p>Active Municipal Departments</p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="dept-grid">
        {departments.map((d, i) => (
          <div key={i} className="dept-card">
            <h4>{d.name}</h4>
            <p className="dept-desc">{d.desc}</p>

            <div className="dept-info">📍 {d.room}</div>
            <div className="dept-info">📞 {d.phone}</div>
            <div className="dept-info">✉ {d.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
