import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      {/* HEADER */}
      <div className="profile-header">
        <div>
          <h2>My Profile</h2>
          <p>View and manage your personal information</p>
        </div>

        <button className="primary-btn">✏️ Edit Profile</button>
      </div>

      {/* CONTENT */}
      <div className="profile-grid">
        {/* LEFT CARD */}
        <div className="profile-card">
          <div className="avatar">👤</div>

          <h3>Rajesh Kumar</h3>
          <p className="muted">Senior Engineer</p>
          <p className="muted">MC-2024-1234</p>

          <div className="info-row">
            <span>Employee Type</span>
            <strong>Permanent</strong>
          </div>

          <div className="info-row">
            <span>Pay Grade</span>
            <strong>Level-7</strong>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="profile-card">
          <h3>Personal Information</h3>

          <div className="info-grid">
            <Info label="Full Name" value="Rajesh Kumar" />
            <Info label="Employee ID" value="MC-2024-1234" />
            <Info label="Email Address" value="rajesh.kumar@municipal.gov.in" />
            <Info label="Phone Number" value="+91 98765 43210" />
            <Info label="Department" value="Public Works Department" />
            <Info label="Designation" value="Senior Engineer" />
            <Info label="Date of Joining" value="15th March, 2018" />
            <Info label="Reporting To" value="Suresh Mehta" />
            <Info label="Work Location" value="Head Office, City Center" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENT */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-box">
      <span className="label">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
