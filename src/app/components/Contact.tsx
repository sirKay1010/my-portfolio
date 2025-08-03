"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formValues.name);
      data.append("email", formValues.email);
      data.append("message", formValues.message);

      const response = await fetch("https://formspree.io/f/meozlqpg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormValues({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Form submission error:", error);
      }
      alert("Something went wrong. Try again.");
    }
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-12 w-2 h-2 bg-purple-400/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-3 h-3 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2.5,
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8 max-w-md mx-auto" />

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Have a question, collaboration idea, or opportunity you&apos;d like
            to discuss? I&apos;d love to hear from you and explore how we can
            work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Social Links */}
          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 
                         rounded-2xl border border-green-500/30 backdrop-blur-sm text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-300 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  Thanks for reaching out! I&apos;ll get back to you as soon as
                  possible.
                </p>
              </motion.div>
            ) : (
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name (e.g. Mark)"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-gray-400 
                               focus:outline-none focus:ring-2 transition-all duration-300 ${
                                 errors.name
                                   ? "border-red-500/50 focus:ring-red-500/50"
                                   : "border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50"
                               }`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email (mark@example.com)"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-gray-400 
                               focus:outline-none focus:ring-2 transition-all duration-300 ${
                                 errors.email
                                   ? "border-red-500/50 focus:ring-red-500/50"
                                   : "border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50"
                               }`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formValues.message}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-gray-400 
                               focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                                 errors.message
                                   ? "border-red-500/50 focus:ring-red-500/50"
                                   : "border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50"
                               }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: !loading ? 1.02 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className={`w-full group flex items-center justify-center gap-2 p-4 rounded-xl font-semibold 
                             transition-all duration-300 shadow-lg ${
                               loading
                                 ? "bg-gray-500/50 cursor-not-allowed text-gray-300"
                                 : "bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white hover:shadow-xl"
                             }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Right side */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Social Links */}
            <motion.div
              className="flex flex-col space-y-4"
              variants={containerVariants}
            >
              <h4 className="text-lg font-medium text-white mb-2">
                Find me elsewhere
              </h4>
              <motion.a
                href="mailto:sirkay1001@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 
                         rounded-xl border border-white/20 backdrop-blur-sm hover:border-gray-400/40 
                         transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-400/30 transition-colors">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-sm text-gray-400">
                    <span>Send me a mail @ sirkay1001@gmail.com</span>
                  </div>
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/sirKay1010"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 
                         rounded-xl border border-white/20 backdrop-blur-sm hover:border-gray-400/40 
                         transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/20 group-hover:bg-gray-400/30 transition-colors">
                  <Github className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-sm text-gray-400">
                    Check out my repositories
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/kayode-kolawole/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 
                         rounded-xl border border-white/20 backdrop-blur-sm hover:border-blue-400/40 
                         transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-400/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-sm text-gray-400">
                    Let&apos;s connect professionally
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
