import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Yashraj Kumawat</h1>
        </div>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
