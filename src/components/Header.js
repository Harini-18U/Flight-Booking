import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/5fcc/2cc2/43ec431f93fc9ee4aa01f8e893b6c327?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEQw61AqtO1VdwTSJmzjBZ-hVRjqwFQQI4JjjoZlG6uOTHP-vx8JnNf9yMH~JuYGLIaOav9MHhJazW5rmMHEH3uynseswl0ccNuh-YbH7ohDykxWzjhxuZaIt9pZ-UmLlgfWtbn0M4fDkRGVMhLzLKsFHLaqqUgGdg8fLkRABqAS-6zI2gdokKSU2o~ddp6jI~gwfcfjlUfELt7rAtJUc1Ldp1mWm9IjcfSzxdH7YkGsfDyfO5TNJW6lzGCtekZzkcIUxld7L4D-4Y2fwCyMKXcbVIQQZW4WBpWrHW~zEGyXyK0lRjYk9ziXNuzl80EwaDsI4bwrRJoomkiBa6jwhg__" alt="Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a className="nav-link nav-link-home" href="#home">Home</a></li>
          <li><a className="nav-link nav-link-about" href="#about">About</a></li>
          <li><a className="nav-link nav-link-flights" href="#flights">Flights</a></li>
          <li><a className="nav-link nav-link-contact" href="#contact">Contact</a></li>
          <li><a className="nav-link nav-link-blog" href="#blog">Blog</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in-button">Sign In</button>
        <button className="sign-up-button">Sign Up</button>
      </div>
      <div className="trip-options">
        <ul>
          <li><span className="bullet"></span>One Way Trip</li>
          <li><span className="bullet"></span>Round Trip</li>
          <li><span className="bullet"></span>Multiple Way</li>
        </ul>
      </div>
      <div className="flight-search">
        <div className="flight-search-item">
          <label htmlFor="from">FROM</label>
          <input id="from" type="text" placeholder="DEL" />
        </div>
        <div className='arrow'>
        <img src="/icons/arrow.png" alt="arrow" />
        </div>
        <div className="flight-search-item">
          <label htmlFor="to">TO</label>
          <input id="to" type="text" placeholder="DEL" />
        </div>
        <div className="flight-search-item">
          <label htmlFor="departure-date">DEPARTURE DATE</label>
          <input id="departure-date" placeholder="12 JUL'24" />
        </div>
        <div className="flight-search-item">
          <label htmlFor="return-date">RETURN DATE</label>
          <input id="return-date" placeholder="12 JUL'24" />
        </div>
        <div className="flight-search-item">
          <label htmlFor="class">CLASS</label>
          <select id="class" className="class-input">
              <option value="Economy">Economy</option>
              <option value="Business" selected>Business</option>
              <option value="First">First</option>
          </select>
        </div>
        <div className="flight-search-item">
          <label htmlFor="passenger">PASSENGER</label>
          <input id="passenger" type="text" className="passenger-input" placeholder="1 Adult, 0 Children" />
        </div>
        <button className="find-flight-button">Find flight <img src="/icons/aero.png" alt="aero" /></button>
      </div>
    </header>
  );
};

export default Header;
