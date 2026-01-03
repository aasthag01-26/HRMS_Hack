import "./notices.css";

const activeNotices = [
  {
    title: "Revised Leave Policy 2024",
    department: "Human Resources",
    date: "15 Jan 2024",
    status: "Active",
  },
  {
    title: "Annual Performance Review Schedule",
    department: "Administration",
    date: "10 Jan 2024",
    status: "Active",
  },
  {
    title: "Health Insurance Enrollment Period",
    department: "Welfare Department",
    date: "05 Jan 2024",
    status: "Active",
  },
  {
    title: "Office Timing Change During Winter",
    department: "General Administration",
    date: "20 Dec 2023",
    status: "Active",
  },
  {
    title: "Training Program Registration",
    department: "Training & Development",
    date: "08 Jan 2024",
    status: "Active",
  },
];

const archivedNotices = [
  {
    title: "Diwali Holiday Schedule",
    department: "General Administration",
    date: "15 Oct 2023",
    status: "Archived",
  },
  {
    title: "Recruitment Drive 2023",
    department: "Human Resources",
    date: "01 Sept 2023",
    status: "Archived",
  },
];

export default function Notices() {
  return (
    <div className="public-notices-page">
      {/* HEADER */}
      <div className="page-header">
        <h2>Public Notices & Announcements</h2>
        <p>Official notices and circulars from the Municipal Corporation</p>
      </div>

      {/* ACTIVE */}
      <NoticeSection
        title="🔔 Active Notices"
        subtitle="Currently active announcements and notifications"
        notices={activeNotices}
        active
      />

      {/* ARCHIVED */}
      <NoticeSection
        title="📁 Archived Notices"
        subtitle="Previous announcements for reference"
        notices={archivedNotices}
      />
    </div>
  );
}

/* COMPONENT */
function NoticeSection({
  title,
  subtitle,
  notices,
  active,
}: {
  title: string;
  subtitle: string;
  notices: any[];
  active?: boolean;
}) {
  return (
    <div className="notice-section">
      <h3>{title}</h3>
      <p className="subtitle">{subtitle}</p>

      <table className="notice-table">
        <thead>
          <tr>
            <th>Notice Title</th>
            <th>Department</th>
            <th>Date Issued</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {notices.map((n, i) => (
            <tr key={i}>
              <td>{n.title}</td>
              <td>{n.department}</td>
              <td>{n.date}</td>
              <td>
                <span
                  className={`badge ${
                    active ? "active-badge" : "archived-badge"
                  }`}
                >
                  {n.status}
                </span>
              </td>
              <td className="actions">
                <button className="link-btn">👁 View</button>
                <button className="link-btn">⬇ Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
