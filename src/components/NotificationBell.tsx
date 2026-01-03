import { useState } from "react";
import { Bell } from "lucide-react";
import "./NotificationBell.css";


export default function NotificationBell({ role }: { role: string }) {
  const [open, setOpen] = useState(false);

  const notifications =
    role === "admin"
      ? [
          "5 pending leave requests",
          "2 new grievances",
        ]
      : [
          "Leave approved",
          "Payslip available",
        ];

  return (
    <div className="notification-wrapper">
      <button
        className="notification-btn"
        onClick={() => setOpen(!open)}
        aria-label="Notifications"
      >
        <Bell size={20} />
        {notifications.length > 0 && (
          <span className="notification-dot" />
        )}
      </button>

      {open && (
        <div className="notification-dropdown">
          <h4>Notifications</h4>

          {notifications.map((item, index) => (
            <div key={index} className="notification-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
