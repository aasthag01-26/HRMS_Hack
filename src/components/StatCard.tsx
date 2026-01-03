import "./StatCard.css";
type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
      {subtitle && <p style={{ color: "#666" }}>{subtitle}</p>}
    </div>
  );
}
