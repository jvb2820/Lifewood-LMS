import { useState } from 'react';
import './UserDashboard.css';

function UserDashboard() {
    const [activeNav, setActiveNav] = useState('home');

    return (
        <div className="dashboard">
            {/* Header / Navigation */}
            <header className="dashboard-header">
                <div className="header-inner">
                    <a href="/" className="logo-link">
                        <img src="/logof.jpeg" alt="Lifewood" className="logo-img" />
                    </a>
                    <nav className="main-nav">
                        <a
                            href="#home"
                            className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); setActiveNav('home'); }}
                        >
                            Home
                        </a>
                        <a
                            href="#login"
                            className={`nav-link ${activeNav === 'login' ? 'active' : ''}`}
                            onClick={(e) => { e.preventDefault(); setActiveNav('login'); }}
                        >
                            Login
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-art">
                    <svg className="hero-swirl" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path d="M0,300 Q200,100 400,250 T800,200 T1200,300" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
                        <path d="M0,350 Q300,150 500,300 T900,250 T1200,350" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />
                        <path d="M0,250 Q150,50 350,200 T750,150 T1200,250" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1.8" />
                        <path d="M100,400 Q350,200 550,350 T950,280 T1200,400" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1.2" />
                        <path d="M0,200 Q250,0 450,180 T850,120 T1200,220" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1.4" />
                    </svg>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Lifewood Learning Platform
                    </h1>
                    <a href="#contact" className="hero-cta">
                        Contact Us
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default UserDashboard;
