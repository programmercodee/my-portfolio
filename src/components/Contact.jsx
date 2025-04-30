import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("vbHTsXvV_Ak0YzVgo"); // Replace with your EmailJS public key

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'service_7siqhkg', // Replace with your EmailJS service ID
        'template_rmyxv2g', // Replace with your EmailJS template ID
        formRef.current
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 content-wrapper">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-x">
            Let's Connect
          </span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-hover:text-indigo-400 transition-colors">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-colors"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-2 group-hover:text-indigo-400 transition-colors">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium mb-2 group-hover:text-indigo-400 transition-colors">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-colors"
                  required
                ></textarea>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              {success && (
                <div className="text-green-500 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 hover:text-white focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative w-full px-8 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center text-gray-400 mt-10">
        <p>© 2024 Brijesh. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ContactSection;
