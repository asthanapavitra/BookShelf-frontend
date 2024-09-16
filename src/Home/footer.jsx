// Footer.js
import React from 'react';
 // Create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My BookShelf. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
