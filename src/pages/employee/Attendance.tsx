import "./attendance.css";

const attendanceData = [
  { date: "01", day: "Mon", in: "09:00", out: "18:00", status: "Present" },
  { date: "02", day: "Tue", in: "09:15", out: "18:30", status: "Present" },
  { date: "03", day: "Wed", in: "09:05", out: "18:00", status: "Present" },
  { date: "04", day: "Thu", in: "-", out: "-", status: "Absent" },
  { date: "05", day: "Fri", in: "09:00", out: "18:00", status: "Present" },
  { date: "06", day: "Sat", in: "-", out: "-", status: "On Leave" },
  { date: "07", day: "Sun", in: "-", out: "-", status: "On Leave" },
  { date: "08", day: "Mon", in: "09:10", out: "18:15", status: "Present" },
  { date: "09", day: "Tue", in: "09:00", out: "18:00", status: "Present" },
  { date: "10", day: "Wed", in: "09:00", out: "18:00", status: "Present" },
];

export default function Attendance() {
  return (
    <div className="attendance-page">
      {/* HEADER */}
      <div className="attendance-header">
        <div>
          <h2>Attendance</h2>
          <p>View and manage your attendance records</p>
        </div>

        <button className="primary-btn">🕒 Mark Attendance</button>
      </div>

      {/* SUMMARY */}
      <div className="summary-grid">
        <Summary title="Present" value="7" type="success" />
        <Summary title="Absent" value="1" type="danger" />
        <Summary title="On Leave" value="2" type="warning" />
        <Summary title="Attendance Rate" value="70%" type="info" />
      </div>

      {/* TABLE */}
      <div className="table-card">
        <div className="table-header">
          <strong>📅 January 2024</strong>
          <div>
            <button className="nav-btn">Previous</button>
            <button className="nav-btn">Next</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.day}</td>
                <td>{row.in}</td>
                <td>{row.out}</td>
                <td>
                  <span className={`status ${row.status.toLowerCase().replace(" ", "-")}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* SUMMARY CARD */
function Summary({
  title,
  value,
  type,
}: {
  title: string;
  value: string;
  type: string;
}) {
  return (
    <div className={`summary-card ${type}`}>
      <strong>{value}</strong>
      <span>{title}</span>
    </div>
  );
}
