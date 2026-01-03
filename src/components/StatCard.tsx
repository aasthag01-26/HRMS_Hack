import "./StatCard.css";

type StatCardProps = {
  title: string;
  value: string | number;
  sub?: string;
};

export default function StatCard({ title, value, sub }: StatCardProps) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      {sub && <p className="stat-sub">{sub}</p>}
    </div>
  );
}
