import "./payroll.css";

const earnings = [
  { label: "Basic Pay", amount: 45000 },
  { label: "House Rent Allowance (HRA)", amount: 18000 },
  { label: "Dearness Allowance (DA)", amount: 13500 },
  { label: "Transport Allowance", amount: 3000 },
  { label: "Medical Allowance", amount: 2500 },
  { label: "Special Allowance", amount: 5000 },
];

const deductions = [
  { label: "Provident Fund (PF)", amount: 5400 },
  { label: "Income Tax", amount: 8500 },
  { label: "Professional Tax", amount: 200 },
];

const payslips = [
  { month: "December 2024", salary: 72900, date: "28-Dec-2024" },
  { month: "November 2024", salary: 72900, date: "28-Nov-2024" },
  { month: "October 2024", salary: 72900, date: "28-Oct-2024" },
  { month: "September 2024", salary: 71500, date: "28-Sep-2024" },
];

export default function Payroll() {
  const gross = 87000;
  const totalDeduction = 14100;
  const netSalary = 72900;

  return (
    <div className="payroll-page">
      {/* HEADER */}
      <div className="payroll-header">
        <div>
          <h2>Payroll</h2>
          <p>View your salary details and download payslips</p>
        </div>

        <button className="primary-btn">⬇ Download Payslip</button>
      </div>

      {/* SUMMARY */}
      <div className="payroll-summary">
        <SummaryCard title="Gross Earnings" value="₹87,000" type="success" />
        <SummaryCard title="Total Deductions" value="₹14,100" type="danger" />
        <SummaryCard title="Net Salary" value={`₹${netSalary}`} type="primary" />
      </div>

      {/* CONTENT */}
      <div className="payroll-content">
        {/* SALARY BREAKDOWN */}
        <div className="salary-card">
          <h4>💼 Salary Breakdown – December 2024</h4>

          <section>
            <p className="section-title">EARNINGS</p>
            {earnings.map((e, i) => (
              <Row key={i} label={e.label} value={e.amount} />
            ))}
            <Row label="Gross Earnings" value={gross} highlight="success" />
          </section>

          <section>
            <p className="section-title">DEDUCTIONS</p>
            {deductions.map((d, i) => (
              <Row key={i} label={d.label} value={d.amount} />
            ))}
            <Row
              label="Total Deductions"
              value={totalDeduction}
              highlight="danger"
            />
          </section>
        </div>

        {/* PAYSLIPS */}
        <div className="payslip-card">
          <h4>💰 Recent Payslips</h4>

          {payslips.map((p, i) => (
            <div className="payslip-row" key={i}>
              <div>
                <strong>{p.month}</strong>
                <small>Paid on {p.date}</small>
              </div>

              <div className="payslip-right">
                <span>₹{p.salary.toLocaleString()}</span>
                <button className="download-btn">⬇</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */
function SummaryCard({
  title,
  value,
  type,
}: {
  title: string;
  value: string;
  type: "success" | "danger" | "primary";
}) {
  return (
    <div className={`summary-card ${type}`}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: "success" | "danger";
}) {
  return (
    <div className={`row ${highlight ?? ""}`}>
      <span>{label}</span>
      <strong>₹{value.toLocaleString()}</strong>
    </div>
  );
}
