import { useState } from "react";
import "./help.css";

const faqs = [
  {
    q: "What is the HRMS Portal?",
    a: "The HRMS Portal is an internal system used by Municipal Corporation employees to manage attendance, payroll, leave, grievances, and personal information.",
  },
  {
    q: "Who can access the Employee/Admin login?",
    a: "Only authorized Municipal Corporation employees and administrators can access the HRMS login.",
  },
  {
    q: "How do I apply for a government job in the Municipal Corporation?",
    a: "Government job applications are published through official recruitment notices on the Municipal Corporation website.",
  },
  {
    q: "Where can I find HR policies and rules?",
    a: "All HR policies and official circulars are available under the Policies section of this portal.",
  },
  {
    q: "How do I contact a specific department?",
    a: "Department contact details are listed in the Departments section of the public portal.",
  },
  {
    q: "Is my data secure on this portal?",
    a: "Yes. All employee data is protected under government data privacy regulations.",
  },
];

export default function Help() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="help-page">
      {/* HEADER */}
      <div className="help-header">
        <h2>Help & Contact</h2>
        <p>Get assistance and find answers to common questions</p>
      </div>

      <div className="help-layout">
        {/* LEFT */}
        <div className="faq-box">
          <h3>❓ Frequently Asked Questions</h3>
          <p className="subtext">Common questions about the HRMS Portal</p>

          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}

          {/* DISCLAIMER */}
          <div className="disclaimer">
            <h4>⚠ Important Disclaimer</h4>
            <p>
              This public portal is intended for general information purposes
              only. Employee-specific data including personal information,
              salary details, attendance records, and leave balances are
              strictly confidential and accessible only to authorized
              personnel.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="help-side">
          <div className="side-card">
            <h4>🖥 IT Helpdesk</h4>
            <p>📞 +91 (0XX) 234-5699</p>
            <p>📞 +91 (0XX) 234-5700</p>
            <p>✉ helpdesk@municipal.gov.in</p>
          </div>

          <div className="side-card">
            <h4>⏰ Office Hours</h4>
            <p>Mon – Fri: <strong>9:30 AM – 5:30 PM</strong></p>
            <p>Saturday: <strong>9:30 AM – 1:30 PM</strong></p>
            <p className="closed">Sunday: Closed</p>
          </div>

          <div className="side-card">
            <h4>📍 Office Address</h4>
            <p>Municipal Corporation Headquarters</p>
            <p>Main Administrative Building</p>
            <p>City Center, District Name</p>
            <p>India</p>
          </div>

          <div className="side-card privacy">
            <h4>🔒 Data Privacy</h4>
            <p>
              All employee data is protected under government data privacy
              guidelines. Unauthorized access is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
