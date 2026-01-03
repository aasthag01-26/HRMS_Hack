import "./payroll.css";

export default function Payroll() {
  return (
    <div className="payroll-page">
      {/* HEADER */}
      <div className="payroll-header">
        <div>
          <h2>Payroll Management</h2>
          <p>Manage and process employee payroll</p>
        </div>

        <div className="payroll-actions">
          <button className="outline-btn">⬇ Export Report</button>
          <button className="primary-btn">$ Process Payroll</button>
        </div>
      </div>

      {/* TOP CARDS */}
      <div className="payroll-top">
        <div className="payroll-total">
          <h4>Total Monthly Payroll</h4>
          <h1>₹42,50,000</h1>
          <p>For 172 employees</p>
        </div>

        <StatCard title="Salaries Processed" value="165" green />
        <StatCard title="Pending" value="7" orange />
      </div>

      {/* MAIN GRID */}
      <div className="payroll-grid">
        {/* DEPARTMENT BREAKDOWN */}
        <div className="card">
          <h4>📊 Department-wise Breakdown</h4>

          <DeptRow
            dept="Administration"
            emp="45 employees"
            amount="₹11,25,000"
            status="Processed"
          />
          <DeptRow
            dept="Finance"
            emp="32 employees"
            amount="₹8,80,000"
            status="Processed"
          />
          <DeptRow
            dept="IT"
            emp="28 employees"
            amount="₹8,40,000"
            status="Pending"
          />
          <DeptRow
            dept="Public Works"
            emp="67 employees"
            amount="₹14,05,000"
            status="Processed"
          />
        </div>

        {/* PAYROLL HISTORY */}
        <div className="card">
          <div className="history-header">
            <h4>📄 Payroll History</h4>
            <select>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>

          <HistoryRow
            month="December 2024"
            amount="₹42,50,000"
            info="172 employees • Processed on 28-Dec-2024"
          />
          <HistoryRow
            month="November 2024"
            amount="₹41,80,000"
            info="170 employees • Processed on 28-Nov-2024"
          />
          <HistoryRow
            month="October 2024"
            amount="₹41,80,000"
            info="170 employees • Processed on 28-Oct-2024"
          />
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */

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

function DeptRow({
  dept,
  emp,
  amount,
  status,
}: {
  dept: string;
  emp: string;
  amount: string;
  status: "Processed" | "Pending";
}) {
  return (
    <div className="dept-row">
      <div>
        <strong>{dept}</strong>
        <p className="muted">{emp}</p>
      </div>
      <div className="right">
        <strong>{amount}</strong>
        <span
          className={`badge ${
            status === "Processed" ? "approved" : "pending"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function HistoryRow({
  month,
  amount,
  info,
}: {
  month: string;
  amount: string;
  info: string;
}) {
  return (
    <div className="history-row">
      <div>
        <strong>{month}</strong>
        <p className="muted">{info}</p>
      </div>
      <div className="right">
        <strong>{amount}</strong>
        <span className="completed">Completed</span>
      </div>
    </div>
  );
}
