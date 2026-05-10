function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Asad",
      role: "Founder & CEO",
      image: "/images/18.jpg",
      description: "Visionary leader with 10+ years of e-commerce experience"
    },
    {
      id: 2,
      name: "Ayesha Malik",
      role: "Chief Technology Officer",
      image: "/images/19.jpg",
      description: "Tech expert specializing in secure marketplace platforms"
    },
    {
      id: 3,
      name: "Hassan Raza",
      role: "Head of Operations",
      image: "/images/20.jpg",
      description: "Operations specialist ensuring smooth seller-buyer transactions"
    },
    {
      id: 4,
      name: "Fatima Khan",
      role: "Customer Success Manager",
      image: "/images/21.png",
      description: "Dedicated to providing exceptional customer support 24/7"
    }
  ];

  const milestones = [
    { year: "2022", event: "Yaqeen Marketplace Founded", description: "Started with a vision to create Pakistan's most trusted marketplace" },
    { year: "2023", event: "10,000+ Users Milestone", description: "Reached our first major milestone with verified sellers and buyers" },
    { year: "2024", event: "Nationwide Expansion", description: "Expanded operations to all major cities across Pakistan" },
    { year: "2025", event: "Award Recognition", description: "Recognized as Best Emerging E-commerce Platform" }
  ];

  const values = [
    { icon: "🔒", title: "Trust & Security", description: "Every transaction is protected with end-to-end encryption and verified seller authentication" },
    { icon: "✅", title: "Quality Assurance", description: "Rigorous verification process ensures only genuine products reach our customers" },
    { icon: "🤝", title: "Community First", description: "Building a supportive community of buyers and sellers across Pakistan" },
    { icon: "⚡", title: "Innovation", description: "Continuously improving our platform with cutting-edge technology" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="yq-section text-center" style={{ background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)', color: '#fff' }}>
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
                  <div className="d-flex align-items-start gap-3">
                    <div className="yq-feature-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem', flexShrink: 0 }}>
                      {value.icon}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">{value.title}</h5>
                      <p className="text-muted mb-0">{value.description}</p>
                    </div>
                  </div>
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
            <div className="col-md-3">
              <div className="yq-card card p-4">
                <h2 className="fw-bold mb-2" style={{ color: 'var(--yq-primary)', fontSize: '2.5rem' }}>50K+</h2>
                <p className="text-muted mb-0">Active Users</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="yq-card card p-4">
                <h2 className="fw-bold mb-2" style={{ color: 'var(--yq-primary)', fontSize: '2.5rem' }}>5K+</h2>
                <p className="text-muted mb-0">Verified Sellers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="yq-card card p-4">
                <h2 className="fw-bold mb-2" style={{ color: 'var(--yq-primary)', fontSize: '2.5rem' }}>100K+</h2>
                <p className="text-muted mb-0">Products Listed</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="yq-card card p-4">
                <h2 className="fw-bold mb-2" style={{ color: 'var(--yq-primary)', fontSize: '2.5rem' }}>98%</h2>
                <p className="text-muted mb-0">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
