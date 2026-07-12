import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { process_contact, get_contact_info } from '../serviceApi';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Contact() {
  const [serverMessage, setServerMessage] = useState('');
  const [info, setInfo] = useState(null);

  // Load the contact details from the database when the page opens.
  useEffect(() => {
    async function load() {
      const data = await get_contact_info();
      setInfo(data);
    }
    load();
  }, []);
  const schema = z.object({
    fullName: z.string().min(3, { message: 'Minimum 3 characters.' }),
    email: z.string().email({ message: 'Enter a valid email.' }),
    phone: z.string().min(10, { message: 'Minimum 10 numbers.' }),
    subject: z.string().min(3, { message: 'Enter a subject.' }),
    messageType: z.string(),
    priority: z.string(),
    company: z.string().optional(),
    message: z.string().min(10, { message: 'Minimum 10 characters.' }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) {
    try {
      const result = await process_contact(data);
      setServerMessage(result.message);
      reset();
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
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
              <form onSubmit={handleSubmit(submit)}>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      {...register('fullName')}
                    />
                    {errors.fullName && <p className="text-danger small mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your.email@example.com"
                      {...register('email')}
                    />
                    {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+92 3XX XXXXXXX"
                      {...register('phone')}
                    />
                    {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Subject */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brief subject of your message"
                      {...register('subject')}
                    />
                    {errors.subject && <p className="text-danger small mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Message Type */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Message Type *</label>
                    <select className="form-select" {...register('messageType')}>
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
                    <select className="form-select" {...register('priority')}>
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
                      {...register('company')}
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Your Message *</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Please provide detailed information about your inquiry..."
                      {...register('message')}
                    ></textarea>
                    {errors.message && <p className="text-danger small mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg fw-semibold px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {serverMessage && (
                <p className="mt-3 mb-0">
                  <strong>{serverMessage}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-lg-4">
          {info && (
          <div className="yq-card card p-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <p className="fw-semibold mb-1">Address</p>
                  <p className="text-muted small mb-0">{info.address}</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <div>
                  <p className="fw-semibold mb-1">Phone</p>
                  <p className="text-muted small mb-0">{info.phone1}</p>
                  <p className="text-muted small mb-0">{info.phone2}</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <div>
                  <p className="fw-semibold mb-1">Email</p>
                  <p className="text-muted small mb-0">{info.email1}</p>
                  <p className="text-muted small mb-0">{info.email2}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-start gap-2 mb-2">
                <span style={{ fontSize: '1.2rem' }}>⏰</span>
                <div>
                  <p className="fw-semibold mb-1">Business Hours</p>
                  <p className="text-muted small mb-0">{info.hours_weekday}</p>
                  <p className="text-muted small mb-0">{info.hours_saturday}</p>
                  <p className="text-muted small mb-0">{info.hours_sunday}</p>
                </div>
              </div>
            </div>
          </div>
          )}

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
