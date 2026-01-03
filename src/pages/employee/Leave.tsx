import "./leave.css";

const leaveHistory = [
  {
    type: "Casual Leave",
    duration: "2024-01-15 to 2024-01-16",
    days: 2,
    reason: "Personal work",
    appliedOn: "2024-01-10",
    status: "Approved",
  },
  {
    type: "Sick Leave",
    duration: "2024-01-20 to 2024-01-20",
    days: 1,
    reason: "Not feeling well",
    appliedOn: "2024-01-19",
    status: "Pending",
  },
  {
    type: "Earned Leave",
    duration: "2024-02-01 to 2024-02-05",
    days: 5,
    reason: "Family vacation",
    appliedOn: "2024-01-25",
    status: "Rejected",
  },
];

export default function Leave() {
  return (
    <div className="leave-page">
      {/* HEADER */}
      <div className="leave-header">
        <div>
          <h2>Leave Management</h2>
          <p>Apply for leave and track your requests</p>
        </div>

        <button className="primary-btn">＋ Apply Leave</button>
      </div>

      {/* BALANCE */}
      <div className="leave-balance-grid">
        <BalanceCard title="Casual Leave" value="8" />
        <BalanceCard title="Sick Leave" value="6" />
        <BalanceCard title="Earned Leave" value="15" />
        <BalanceCard title="Total Balance" value="29" highlight />
      </div>

      {/* HISTORY */}
      <div className="leave-table-card">
        <h4>📄 Leave History</h4>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration</th>
              <th>Days</th>
              <th>Reason</th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {leaveHistory.map((leave, index) => (
              <tr key={index}>
                <td>{leave.type}</td>
                <td>{leave.duration}</td>
                <td>{leave.days}</td>
                <td>{leave.reason}</td>
                <td>{leave.appliedOn}</td>
                <td>
                  <span className={`status ${leave.status.toLowerCase()}`}>
                    {leave.status}
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

/* BALANCE CARD */
function BalanceCard({
  title,
  value,
  highlight = false,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`balance-card ${highlight ? "highlight" : ""}`}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>days remaining</small>
    </div>
  );
}
