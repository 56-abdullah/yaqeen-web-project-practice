import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    messageType: 'general',
    priority: 'medium',
    company: '',
    message: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      messageType: 'general',
      priority: 'medium',
      company: '',
      message: ''
    });
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="yq-form-card card">
            <div className="yq-form-header">
              <h3>Get In Touch</h3>
              <p className="mb-0 small" style={{ opacity: 0.85 }}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+92 3XX XXXXXXX"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brief subject of your message"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message Type */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Message Type *</label>
                    <select
                      className="form-select"
                      name="messageType"
                      value={formData.messageType}
                      onChange={handleChange}
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="business">Business Partnership</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Priority Level *</label>
                    <select
                      className="form-select"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      required
                    >
                      <option value="low">Low - General Question</option>
                      <option value="medium">Medium - Need Response Soon</option>
                      <option value="high">High - Urgent Issue</option>
                    </select>
                  </div>

                  {/* Company/Organization */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Company/Organization (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your company or organization name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Your Message *</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Please provide detailed information about your inquiry..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg fw-semibold px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-lg-4">
          <div className="yq-card card p-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <p className="fw-semibold mb-1">Address</p>
                  <p className="text-muted small mb-0">
                    Plot 123, I-9 Markaz<br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <div>
                  <p className="fw-semibold mb-1">Phone</p>
                  <p className="text-muted small mb-0">+92 51 1234567</p>
                  <p className="text-muted small mb-0">+92 300 1234567</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <div>
                  <p className="fw-semibold mb-1">Email</p>
                  <p className="text-muted small mb-0">support@yaqeen.pk</p>
                  <p className="text-muted small mb-0">info@yaqeen.pk</p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>⏰</span>
                <div>
                  <p className="fw-semibold mb-1">Business Hours</p>
                  <p className="text-muted small mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted small mb-0">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-muted small mb-0">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="yq-card card p-4">
            <h5 className="fw-bold mb-3">Quick Support</h5>
            <p className="text-muted small mb-3">
              For immediate assistance, check out our FAQ section or contact our 24/7 support team.
            </p>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary btn-sm">View FAQ</button>
              <button className="btn btn-outline-primary btn-sm">Live Chat Support</button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="yq-card card p-4">
            <h5 className="fw-bold mb-3">Find Us</h5>
            <div style={{ background: '#e5e7eb', height: '300px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p className="text-muted">Map Location: Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
