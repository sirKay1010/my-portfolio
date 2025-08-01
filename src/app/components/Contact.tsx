"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

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
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
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
    <section id="contact" className="min-h-[70vh] w-full px-4 py-20 text-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-200 mb-6">
          Have a question, collaboration idea, or opportunity you&#39;d like to
          discuss? I&#39;d love to hear from you.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-12 mb-10 text-white">
          {/* Mail */}
          <a
            href="mailto:sirkay1001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-150 hover:text-blue-300"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/sirKay1010"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-150 hover:text-blue-300"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kayode-kolawole/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-150 hover:text-blue-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* COntact Form */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white/10 rounded-lg p-6 mt-10 text-green-300"
          >
            Thanks for reaching out! I’ll get back to you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formValues.name}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 ${
                errors.name ? "ring-red-500" : "focus:ring-blue-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formValues.email}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 ${
                errors.email ? "ring-red-500" : "focus:ring-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formValues.message}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 ${
                errors.message ? "ring-red-500" : "focus:ring-blue-400"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}

            <motion.button
              whileHover={{ scale: !loading ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              type="submit"
              className={`bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;
