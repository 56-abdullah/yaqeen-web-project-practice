import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { get_team, get_milestones, get_values, get_stats } from '../serviceApi';

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [values, setValues] = useState([]);
  const [stats, setStats] = useState([]);

  // Load all About page content from the database when the page opens.
  useEffect(() => {
    async function load() {
      const team = await get_team();
      setTeamMembers(team);
      const journey = await get_milestones();
      setMilestones(journey);
      const coreValues = await get_values();
      setValues(coreValues);
      const aboutStats = await get_stats();
      setStats(aboutStats);
    }
    load();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <div className="flex-grow-1">
        {/* Hero Section */}
        <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">About Yaqeen Marketplace</h1>
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Pakistan's most trusted online marketplace connecting verified sellers with genuine buyers through a secure, transparent platform built on integrity and excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="yq-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="yq-card card h-100 p-4">
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="text-muted">
                  To revolutionize online commerce in Pakistan by creating a marketplace where trust, quality, and customer satisfaction are paramount. We empower local businesses and entrepreneurs to reach wider audiences while ensuring buyers have access to authentic, high-quality products.
                </p>
                <p className="text-muted mb-0">
                  Through rigorous seller verification, secure payment systems, and dedicated customer support, we're building a platform that serves as the gold standard for e-commerce excellence in Pakistan.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="yq-card card h-100 p-4">
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="text-muted">
                  To become Pakistan's leading e-commerce ecosystem where every transaction is backed by trust, every product meets quality standards, and every user experience exceeds expectations.
                </p>
                <p className="text-muted mb-0">
                  We envision a future where Yaqeen Marketplace is synonymous with reliability and excellence, serving millions of users across Pakistan and beyond, while fostering economic growth and entrepreneurship in our communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="yq-section" style={{ background: '#f3f4f6' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="yq-section-title">Our Core Values</h2>
            <p className="yq-section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div className="col-md-6" key={index}>
                <div className="yq-card card h-100 p-4">
                  <h5 className="fw-bold mb-2">{value.title}</h5>
                  <p className="text-muted mb-0">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="yq-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="yq-section-title">Our Journey</h2>
            <p className="yq-section-subtitle">Key milestones in our growth story</p>
          </div>
          <div className="row g-4">
            {milestones.map((milestone) => (
              <div className="col-md-6" key={milestone.year}>
                <div className="yq-card card p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="yq-step-number" style={{ width: '60px', height: '60px', lineHeight: '60px' }}>
                      {milestone.year}
                    </div>
                    <h5 className="fw-bold mb-0">{milestone.event}</h5>
                  </div>
                  <p className="text-muted mb-0">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="yq-section yq-section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="yq-section-title">Meet Our Team</h2>
            <p className="yq-section-subtitle" style={{ color: 'rgba(255,255,255,.6)' }}>
              The passionate people behind Yaqeen Marketplace
            </p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <div className="col-md-3" key={member.id}>
                <div className="yq-card card h-100 text-center p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p className="text-primary fw-semibold mb-2">{member.role}</p>
                  <p className="text-muted small mb-0">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="yq-section">
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((stat) => (
              <div className="col-md-3" key={stat.id}>
                <div className="yq-card card p-4">
                  <h2 className="fw-bold mb-2" style={{ color: 'var(--yq-primary)', fontSize: '2.5rem' }}>{stat.number}</h2>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
