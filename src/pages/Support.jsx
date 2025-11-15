import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import AppIcon from "../components/AppIcon.jsx";
import { cn } from "../utils/cn.js";

// -------------------------------
// FAQ, Support, and Resource Data
// -------------------------------
const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I get started with Spaceway?",
        answer:
          "Getting started is easy! Sign up for a free 14-day trial, connect your marketplaces, and our onboarding team will guide you through setup. No credit card required.",
      },
      {
        question: "Which marketplaces does Spaceway support?",
        answer:
          "We support Amazon, Flipkart, Myntra, Snapdeal, Paytm Mall, and more — including eBay and Shopify integrations.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Initial setup takes 15–30 minutes. Full data sync usually completes within 24 hours.",
      },
    ],
  },
  {
    category: "Features & Pricing",
    questions: [
      {
        question: "What is included in the free trial?",
        answer:
          "The 14-day free trial includes marketplace integration, competitor tracking, analytics dashboard, and full customer support.",
      },
      {
        question: "Can I change my plan anytime?",
        answer:
          "Yes, upgrades or downgrades take effect immediately, with prorated billing.",
      },
      {
        question: "Do you offer enterprise solutions?",
        answer:
          "Yes — custom enterprise solutions with white-label options, integrations, and SLA guarantees are available.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "How accurate is the competitor tracking?",
        answer:
          "Our tracking is 95%+ accurate with real-time updates every 15 minutes using advanced AI scraping.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we use 256-bit SSL encryption, SOC 2 compliance, and regular audits for data safety.",
      },
      {
        question: "Can I get help during setup?",
        answer:
          "Our support team offers onboarding, training, documentation, video tutorials, and live chat.",
      },
    ],
  },
  {
    category: "Billing & Account",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit cards, UPI, net banking, and enterprise billing options.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, cancel anytime with no fees. Your account stays active until the billing period ends.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes — 30-day money-back guarantee if you’re not satisfied. Contact us within 30 days of payment.",
      },
    ],
  },
];

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team and resolve quickly",
    icon: "messageSquare",
    availability: "24/7 Available",
    action: "Start Chat",
    color: "primary",
  },
  {
    title: "Email Support",
    description: "Send us questions for comprehensive answers",
    icon: "mail",
    availability: "Response within 4 hours",
    action: "Send Email",
    color: "success",
  },
  {
    title: "Phone Support",
    description: "Speak directly with technical experts and our support team",
    icon: "phone",
    availability: "Mon–Fri, 9AM–8PM IST",
    action: "Call Now",
    color: "warning",
  },
  // {
  //   title: "Video Call",
  //   description: "Schedule a screen-sharing session for complex issues",
  //   icon: "video",
  //   availability: "By Appointment",
  //   action: "Schedule Call",
  //   color: "info",
  // },
 
];

const resources = [
  { title: "Getting Started Guide", description: "Complete walkthrough from signup to first optimization", icon: "bookOpen", duration: "15 min read", category: "Tutorial" },
  { title: "Marketplace Integration", description: "Step-by-step guide to connect marketplaces", icon: "link", duration: "10 min read", category: "Tutorial" },
  { title: "Repricing Strategies", description: "Best practices for automated pricing optimization", icon: "barChart3", duration: "20 min read", category: "Guide" },
  { title: "Analytics Dashboard", description: "Understanding your metrics and reports", icon: "chartPie", duration: "12 min read", category: "Tutorial" },
  { title: "API Documentation", description: "Developer documentation for integrations", icon: "code", duration: "Reference", category: "API" },
  { title: "Video Tutorials", description: "Watch feature demonstrations", icon: "playCircle", duration: "5–20 min each", category: "Video" },
];

// -------------------------------
// Main Component
// -------------------------------
export default function Support() {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 4 hours.");
    setFormData({ name: "", email: "", subject: "", message: "", priority: "medium" });
  };

  const activeFaqs = faqs.find((faq) => faq.category === activeCategory)?.questions || [];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="px-4 mx-auto mb-16 text-center max-w-7xl sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-4xl font-bold md:text-6xl">
            How Can We{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
              Help You?
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Get the support you need to maximize your success — our team is here for you every step.
          </motion.p>
        </div>

        {/* Support Channels */}
        {/* <div className="grid gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 text-center border shadow-xl bg-card border-border rounded-3xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10">
                <AppIcon name={channel.icon} size={28} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{channel.title}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{channel.description}</p>
              <p className="mb-4 text-sm font-medium text-primary">{channel.availability}</p>
              <Button size="sm" className="w-full">
                {channel.action}
              </Button>
            </motion.div>
          ))}
        </div> */}
        <div className="grid max-w-6xl gap-6 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

  {supportChannels.map((channel, i) => (
    <motion.div
      key={channel.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="w-full max-w-sm p-6 text-center border shadow-xl bg-card border-border rounded-3xl"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10">
        <AppIcon name={channel.icon} size={28} className="text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-bold">{channel.title}</h3>

      <p className="mb-3 text-sm text-muted-foreground">
        {channel.description}
      </p>

      <p className="mb-4 text-sm font-medium text-primary">
        {channel.availability}
      </p>

      <Button size="sm" className="w-full">
        {channel.action}
      </Button>
    </motion.div>
  ))}
</div>

      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Frequently Asked{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              Find answers to the most common queries.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Category Tabs */}
            <div className="lg:col-span-1">
              <div className="sticky space-y-2 top-8">
                {faqs.map(({ category }) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl transition-all duration-200",
                      activeCategory === category
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                        : "hover:bg-accent text-muted-foreground"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6 lg:col-span-3">
              {activeFaqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="overflow-hidden border shadow-lg bg-card border-border rounded-2xl"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 transition-colors duration-200 cursor-pointer hover:bg-accent">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <AppIcon name="chevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground">
              Send us a message — we’ll get back to you within 4 hours.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 space-y-6 border shadow-xl bg-card rounded-3xl border-border"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className="p-3 border border-border rounded-xl bg-background"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className="p-3 border border-border rounded-xl bg-background"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                className="p-3 border border-border rounded-xl bg-background"
              />
              <select
                value={formData.priority}
                onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))}
                className="p-3 border border-border rounded-xl bg-background"
              >
                <option value="low">Low - General Inquiry</option>
                <option value="medium">Medium - Feature Question</option>
                <option value="high">High - Technical Issue</option>
                <option value="urgent">Urgent - System Down</option>
              </select>
            </div>

            <textarea
              rows="6"
              placeholder="Describe your issue..."
              required
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              className="w-full p-3 border resize-none border-border rounded-xl bg-background"
            />

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold">
            Help <span className="text-transparent bg-gradient-to-r from-primary to-info bg-clip-text">Resources</span>
          </h2>
          <p className="mb-12 text-xl text-muted-foreground">
            Tutorials, documentation, and videos to help you succeed.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, idx) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 transition-all duration-300 border shadow-lg cursor-pointer bg-card border-border rounded-3xl hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                    <AppIcon name={r.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-accent">
                      {r.category}
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{r.title}</h3>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{r.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{r.duration}</span>
                  <AppIcon name="arrowRight" size={16} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
