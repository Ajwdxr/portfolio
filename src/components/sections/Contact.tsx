"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Business Website",
  "Business System",
  "Web Application",
  "Mobile App",
  "Something Else",
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Business Website"]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "601110638176";
    const selectedSvcText = selectedServices.length > 0 ? selectedServices.join(", ") : "Not specified";
    const budgetText = budget || "Not specified";
    const companyText = company || "-";

    const text = `Hi Ajwad,\n\n*Project Enquiry from Portfolio:*\n- *Name:* ${name}\n- *Email:* ${email}\n- *Company:* ${companyText}\n- *Needs:* ${selectedSvcText}\n- *Estimated Budget:* ${budgetText}\n\n*Details:*\n${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank");

      // Reset
      setTimeout(() => {
        setName("");
        setEmail("");
        setCompany("");
        setBudget("");
        setMessage("");
      }, 1000);
    }, 700);
  };

  return (
    <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-8" id="contact">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
          05 / GET IN TOUCH
        </span>
        <h2 className="font-newsreader text-[32px] md:text-[36px] text-[#000000] dark:text-[#ffffff] font-normal tracking-tight transition-colors">
          Have something you want to build?
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#444748] dark:text-[#9ea5b3] max-w-2xl transition-colors">
          Tell me what you're working on, what problem you're trying to solve, or even just the idea that's been sitting in your head.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 bg-[#ffffff] dark:bg-[#14171f] p-6 sm:p-8 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-colors"
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase" htmlFor="name">
                  Your Name *
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#f4f4f2] dark:bg-[#191d26] text-[#1a1c1b] dark:text-[#f1f2f4] text-[14px] px-4 py-2.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#14171f] focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff] transition-all"
                  placeholder="e.g. Imran Razak"
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#f4f4f2] dark:bg-[#191d26] text-[#1a1c1b] dark:text-[#f1f2f4] text-[14px] px-4 py-2.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#14171f] focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff] transition-all"
                  placeholder="imran@company.com"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Row 2: Company & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase" htmlFor="company">
                  Company / Organisation <span className="text-[#747878] dark:text-[#9ea5b3] font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-[#f4f4f2] dark:bg-[#191d26] text-[#1a1c1b] dark:text-[#f1f2f4] text-[14px] px-4 py-2.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#14171f] focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff] transition-all"
                  placeholder="e.g. Nexus Logistics Sdn Bhd"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase" htmlFor="budget">
                  Estimated Budget <span className="text-[#747878] dark:text-[#9ea5b3] font-normal">(optional)</span>
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="bg-[#f4f4f2] dark:bg-[#191d26] text-[#1a1c1b] dark:text-[#f1f2f4] text-[14px] px-4 py-2.5 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#14171f] focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff] transition-all"
                >
                  <option value="">Select an approximate range</option>
                  <option value="RM 5,000 – RM 10,000">RM 5,000 – RM 10,000</option>
                  <option value="RM 10,000 – RM 25,000">RM 10,000 – RM 25,000</option>
                  <option value="RM 25,000 – RM 50,000">RM 25,000 – RM 50,000</option>
                  <option value="RM 50,000+">RM 50,000+</option>
                  <option value="Still exploring / Advisory">Still exploring / Advisory</option>
                </select>
              </div>
            </div>

            {/* Need Pills Interactive */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase">
                What do you need?
              </span>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((option) => {
                  const isSelected = selectedServices.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleService(option)}
                      className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] transition-colors border ${
                        isSelected
                          ? "bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] border-[#000000] dark:border-[#ffffff]"
                          : "bg-[#eeeeec] dark:bg-[#1f2430] text-[#1a1c1b] dark:text-[#f1f2f4] border-[#e2e3e1] dark:border-[#272d3d] hover:bg-[#dadad8] dark:hover:bg-[#2c3344]"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#000000] dark:text-[#ffffff] uppercase" htmlFor="message">
                Project Details *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#f4f4f2] dark:bg-[#191d26] text-[#1a1c1b] dark:text-[#f1f2f4] text-[14px] p-4 rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] focus:outline-none focus:bg-[#ffffff] dark:focus:bg-[#14171f] focus:ring-1 focus:ring-[#000000] dark:focus:ring-[#ffffff] transition-all resize-y min-h-[110px]"
                placeholder="Tell me about your project, current bottlenecks, or the outcome you're aiming for..."
                required
                rows={4}
              />
            </div>

            {/* Submit & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-[#000000] dark:bg-[#ffffff] text-white dark:text-[#0c0e12] text-[13px] px-7 py-3 rounded-lg hover:bg-[#5e5e5e] dark:hover:bg-[#e2e3e1] transition-colors duration-150 shadow-sm disabled:opacity-50 font-medium"
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </span>
                <span>→</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dadad8] dark:bg-[#333b4d]"></span>
                <span className="font-mono text-[11px] text-[#747878] dark:text-[#9ea5b3]">
                  Usually replies within 24 hours.
                </span>
              </div>
            </div>

            {/* Success Alert Placeholder */}
            {isSuccess && (
              <div className="p-4 rounded-lg bg-[#f4f4f2] dark:bg-[#191d26] border border-[#e2e3e1] dark:border-[#272d3d] text-[#1a1c1b] dark:text-[#f1f2f4] text-[13px] animate-in fade-in duration-200">
                Thank you. Your message has been noted and WhatsApp opened. I will review your project brief and follow up shortly.
              </div>
            )}
          </form>
        </motion.div>

        {/* Direct Contact Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#ffffff] dark:bg-[#14171f] p-6 rounded-xl border border-[#e2e3e1] dark:border-[#232836] shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] flex flex-col gap-4 transition-colors"
          >
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase tracking-wider">
              Direct Channels
            </span>

            <div className="flex flex-col gap-2.5">
              <a
                className="p-3 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex items-center justify-between hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-colors group"
                href="mailto:ajwadxara99@gmail.com"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">Email</span>
                  <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">ajwadxara99@gmail.com</span>
                </div>
                <span className="font-mono text-[12px] text-[#747878] dark:text-[#9ea5b3] group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors">
                  →
                </span>
              </a>

              <a
                className="p-3 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex items-center justify-between hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-colors group"
                href="https://wa.me/601110638176"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">WhatsApp</span>
                  <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">+60 11-1063 8176</span>
                </div>
                <span className="font-mono text-[12px] text-[#747878] dark:text-[#9ea5b3] group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors">
                  →
                </span>
              </a>

              <a
                className="p-3 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex items-center justify-between hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-colors group"
                href="https://linkedin.com/in/ajwdxr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">LinkedIn</span>
                  <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">linkedin.com/in/ajwdxr</span>
                </div>
                <span className="font-mono text-[12px] text-[#747878] dark:text-[#9ea5b3] group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors">
                  →
                </span>
              </a>

              <a
                className="p-3 bg-[#f4f4f2] dark:bg-[#191d26] rounded-lg border border-[#e2e3e1] dark:border-[#272d3d] flex items-center justify-between hover:bg-[#eeeeec] dark:hover:bg-[#232836] transition-colors group"
                href="https://github.com/ajwdxr"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">GitHub</span>
                  <span className="text-[13px] text-[#000000] dark:text-[#ffffff] font-medium">github.com/ajwdxr</span>
                </div>
                <span className="font-mono text-[12px] text-[#747878] dark:text-[#9ea5b3] group-hover:text-[#000000] dark:group-hover:text-[#ffffff] transition-colors">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f4f4f2] dark:bg-[#191d26] p-6 rounded-xl border border-[#e2e3e1] dark:border-[#272d3d] shadow-sm flex flex-col gap-2 transition-colors"
          >
            <span className="font-mono text-[10px] text-[#747878] dark:text-[#9ea5b3] uppercase">
              Contract Terms
            </span>
            <p className="text-[13px] text-[#444748] dark:text-[#cbd5e1] leading-relaxed transition-colors">
              Standard engagements are scoped with clear deliverable milestones, source code handover, and post-deployment guarantee periods.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
