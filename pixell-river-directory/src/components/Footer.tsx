import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Pixell River Financial. All rights reserved.</p>
        <p>Trusted financial services since 2010</p>
      </div>
    </footer>
  );
}

export default Footer;