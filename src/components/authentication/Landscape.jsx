import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Landscape.css";
import engine from "../../assets/engine.jpg"; // adjust if your file is deeper or shallower


const Landscape = () => {
  const [scrolled, setScrolled] = useState(false);

  // Header background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">PRIMEFIX</div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Your Trusted Home Services Partner</h1>
            <p>Book top-rated professionals for all your repair and maintenance needs.</p>
            <div className="auth-buttons">
              <Link to="/signup" className="btn">Sign Up as User</Link>
              <Link to="/login" className="btn">User Login</Link>
              <Link to="/technician-register" className="btn">Join as Technician</Link>
              <Link to="/technician-login" className="btn">Technician Login</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
  <div className="services-container">
    <h2 className="services-title">What Services Do You Need?</h2>
    <p className="services-subtitle">Explore our wide range of professional home and office services</p>

    <div className="services-grid">
      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2942/2942921.png" alt="Plumbing" />
        <h3>Plumbing</h3>
        <p>Leaky taps, broken pipes, or fittings? We fix them all.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" alt="Electrical" />
        <h3>Electrical Repairs</h3>
        <p>From light fixtures to fuse box issues, certified electricians at your service.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Cleaning" />
        <h3>Home Cleaning</h3>
        <p>Deep cleaning, dusting, sanitizing – we’ll make your place shine!</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/609/609803.png" alt="AC Repair" />
        <h3>AC & Appliance Repair</h3>
        <p>AC not cooling? Washing machine stopped? We fix all appliances.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2965/2965560.png" alt="Carpenter" />
        <h3>Carpentry</h3>
        <p>Furniture repairs, fittings, and more by expert carpenters.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2905/2905453.png" alt="Painting" />
        <h3>Painting</h3>
        <p>Wall painting, touch-ups, and decorative finishes.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/3158/3158926.png" alt="Pest Control" />
        <h3>Pest Control</h3>
        <p>Get rid of insects and rodents with our safe pest control solutions.</p>
      </div>

      <div className="service-card">
        <img src="https://cdn-icons-png.flaticon.com/512/4821/4821061.png" alt="CCTV" />
        <h3>CCTV Installation</h3>
        <p>Secure your home and office with expert camera setup.</p>
      </div>
    </div>
  </div>
</section>


<section id="how-it-works" className="how-it-works-v2">
  <div className="how-wrapper">
    <div className="how-left">
      <h2>Here’s How It Works</h2>
      <p>
        Get your issues fixed without the hassle. Whether it’s plumbing, electrical, or AC repair — our platform simplifies it all in minutes!
      </p>
      <button className="how-cta-btn">Explore Services</button>
    </div>
    <div className="how-right">
      <div className="timeline-item">
        <div className="dot"></div>
        <div className="content">
          <h4>1. Request a Service</h4>
          <p>Select a service category and provide your details.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="dot"></div>
        <div className="content">
          <h4>2. Admin Assigns Technician</h4>
          <p>We assign the nearest verified technician based on your location.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="dot"></div>
        <div className="content">
          <h4>3. Real-Time Tracking</h4>
          <p>Track your technician’s location and ETA in real time.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="dot"></div>
        <div className="content">
          <h4>4. Service Completion & Payment</h4>
          <p>Technician completes the job and you pay securely.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-left">
      <h2>About FixItNow</h2>
      <p>
        FixItNow is your go-to digital solution for all household and institutional maintenance needs.
        Whether you're a homeowner, school admin, or office manager — our platform connects you with verified, skilled professionals for fast, reliable services.
      </p>
      <p>
        Born out of a need to eliminate the hassle of finding trusted technicians, FixItNow empowers users to raise repair requests, track technician location live,
        and get work done with complete transparency and efficiency.
      </p>
      <p>
        With real-time service booking, geo-tracking, technician verification, and smart admin monitoring, we are building India’s most trustworthy repair ecosystem.
      </p>
    </div>
    <div className="about-right">
    <img src={engine} alt="Technician at work" />

    </div>
  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-full-container">
    {/* Left Side - Contact Details */}
    <div className="contact-left">
      <h2>Let's Connect</h2>
      <p className="contact-description">
        Whether you need help with services, have questions, or just want to say hi —
        we’re happy to hear from you.
      </p>

      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <span>support@fixitnow.com</span>
      </div>
      <div className="contact-item">
        <i className="fas fa-phone-alt"></i>
        <span>+91 98765 43210</span>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <span>Available in 50+ cities across India</span>
      </div>

      {/* Social Icons */}
      <div className="contact-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="auth-buttons">
      <Link to="/adminlogin" className="btn">Admin Login</Link>
      </div>
    </div>

    {/* Right Side - Contact Form or Illustration */}
    <div className="contact-right">
      <form className="contact-form">
        <h3>Message Us</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>
    </div>
  );
};

export default Landscape;
