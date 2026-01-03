import "./PublicFooter.css";

export default function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="footer-left">
        <strong>Municipal Corporation – HRMS Portal</strong>
        <span>Government of India</span>
      </div>

      <div className="footer-right">
        © 2024 Municipal Corporation. All rights reserved.
        <br />
        Employee-specific and confidential data is accessible only to authorized personnel.
      </div>
    </footer>
  );
}

