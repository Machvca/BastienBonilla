"use client";

import Footer from "@/src/components/sections/Footer";
import Navbar from "@/src/components/sections/Navbar";
import { useRef, useState } from "react";
import { showToast } from "nextjs-toast-notify";
// import "nextjs-toast-notify/dist/index.css";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      showToast.success("Mail send!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "✅",
      });

      formRef.current?.reset();
      setFormData({ email: "", subject: "", message: "" });
    } else {
      showToast.error("❌ Error, try again!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
      });
    }
  };

  return (
    <main className="bg-gradient-to-br from-bastien/10 via bastien/40 to-bastien/80 min-h-screen flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-4 py-32 md:px-8 font-rubik animate-fade-in-up">
        <div className="w-full max-w-2xl bg-[#feefef] rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-7xl font-medium mb-6 text-[#621316] text-center font-syne">
            Contact Me
          </h2>
          <p className="text-stone-700 text-base mb-8 text-center font-rubik">
            Please leave a short explanation of the event you&apos;d like to
            hire me for, including any relevant details. This will help me check
            availability and better understand your needs. I’ll get back to you
            as soon as possible!
          </p>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-stone-900"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="youremail@gmail.com"
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-stone-900"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Birthday party, corporate event, etc."
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-stone-900"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Tell me about your event and preferred date/time..."
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className={`w-full font-medium py-3 rounded-xl transition duration-300 shadow-2xl ${
                isFormValid
                  ? "bg-[#621316] text-stone-100"
                  : "bg-[#621316]/20 text-[#621316] hover:bg-[#621316] hover:text-stone-100"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
