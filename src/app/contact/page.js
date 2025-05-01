"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SocialButton = ({ href, icon, label, bgColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.03 }}
    className={`flex items-center justify-center ${bgColor} text-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all`}
  >
    <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-3" />
    <span className="whitespace-nowrap">{label}</span>
  </motion.a>
);

const ContactInfoCard = ({ icon, title, value, href }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
  >
    <div className="text-[#728156] text-2xl mt-1">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-[#3a4628]">{title}</h3>
      {href ? (
        <a href={href} className="text-[#5a6b42] hover:text-[#728156] transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-[#5a6b42]">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E7F5DC] to-[#C8D9B8] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#3a4628]">
            Get In <span className="text-[#728156]">Touch</span>
          </h1>
          <p className="text-xl text-[#5a6b42] max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#3a4628]">Send Me a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5a6b42] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-[#D8E3D0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728156]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5a6b42] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#D8E3D0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728156]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#5a6b42] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-[#D8E3D0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728156]"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5a6b42] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-[#D8E3D0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#728156]"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#728156] hover:bg-[#5a6b42] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 mb-8"
            >
              <ContactInfoCard
                icon={faEnvelope}
                title="Email"
                value="nahinsikdar123@gmail.com"
                href="mailto:nahinsikdar123@gmail.com"
              />
              <ContactInfoCard
                icon={faPhone}
                title="Phone"
                value="+880 1XXX XXX XXX"
              />
              <ContactInfoCard
                icon={faMapMarkerAlt}
                title="Location"
                value="Dhaka, Bangladesh"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#728156] p-8 rounded-xl text-white"
            >
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="mb-6">
                I'm active on these platforms. Feel free to reach out through any of them.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SocialButton
                  href="https://github.com/nahinintesher"
                  icon={faGithub}
                  label="GitHub"
                  bgColor="bg-gray-700 hover:bg-gray-600"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/nahin-intesher-903724253/"
                  icon={faLinkedin}
                  label="LinkedIn"
                  bgColor="bg-blue-600 hover:bg-blue-500"
                />
                <SocialButton
                  href="https://www.facebook.com/naahin.sikdar"
                  icon={faFacebook}
                  label="Facebook"
                  bgColor="bg-[#3b5998] hover:bg-[#344e86]"
                />
                <SocialButton
                  href="mailto:nahinsikdar123@gmail.com"
                  icon={faEnvelope}
                  label="Email"
                  bgColor="bg-green-600 hover:bg-green-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#3a4628]">Availability</h3>
              <p className="text-[#5a6b42] mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-[#5a6b42]">Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Contact;