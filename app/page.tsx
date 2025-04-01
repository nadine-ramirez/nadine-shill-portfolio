// app/page.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-8">
      {/* Sidebar / Outline */}
      <aside className="md:w-1/4 sticky top-20 self-start">
        <nav className="flex flex-col space-y-2">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#edu-exp" className="hover:underline">
            Education & Experience
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#certifications" className="hover:underline">
            Certifications
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>

          <div className="mt-4">
            <a
              href="https://calendly.com/nadineramirez1997/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition text-sm"
            >
              Book a Call
            </a>
          </div>

          <div className="mt-4 flex space-x-3">
            <a
              href="https://github.com/nadine-ramirez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} className="hover:text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/nadine-shill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} className="text-blue-600 hover:text-blue-800" />
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="md:w-3/4 space-y-12">
        {/* About */}
        <div id="about">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Nadine Shill</h1>
          <p className="text-xl mb-6">
            Generative AI, Data Analysis, and Mathematics
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center p-4 bg-white shadow rounded w-36">
              <span className="text-2xl font-bold">3+</span>
              <span className="text-sm text-gray-500">Years Exp</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow rounded w-36">
              <span className="text-2xl font-bold">40+</span>
              <span className="text-sm text-gray-500">Hours/Week</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow rounded w-36">
              <span className="text-2xl font-bold">60%</span>
              <span className="text-sm text-gray-500">AI</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white shadow rounded w-36">
              <span className="text-2xl font-bold">40%</span>
              <span className="text-sm text-gray-500">Data Analysis</span>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div id="edu-exp">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Education & Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Johns Hopkins University</h3>
              <p>Master of Science in Applied &amp; Computational Mathematics (Nov. 2022 – Current)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">University of Colorado Denver</h3>
              <p>Bachelor of Arts in Psychology (Aug. 2015 – Dec. 2021)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Solari</h3>
              <p>AI/ML Engineering Intern (Feb. 2025 – Current)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Johns Hopkins University</h3>
              <p>Statistics &amp; Probability Learning Assistant (Jan. 2025 – Current)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Scale AI</h3>
              <p>Mathematics Senior Reviewer/Queue Manager (Jan. 2023 – Current)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">University of Minnesota</h3>
              <p>Quantum Computing Researcher (Jan. 2024 – Mar. 2024)</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Anomaly Detection Fraud on XGBoost:</strong> Model trained and deployed to detect credit card fraud.
            </li>
            <li>
              <strong>Unsupervised Learning Clustering using Kmeans:</strong> Clustering model trained on housing data.
            </li>
            <li>
              <strong>LSTM Project (RNN):</strong> Predicting text based on prior sequences.
            </li>
            <li>
              <strong>Best Route for Wildfire Navigation Model:</strong> Calculated shortest routes using public APIs.
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Certifications</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Machine Learning/AI Engineer Path (Codecademy)</li>
            <li>Deep Learning Specialization (deeplearning.ai)</li>
            <li>Machine Learning Specialization (deeplearning.ai)</li>
          </ul>
        </div>

        {/* Skills */}
        <div id="skills">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Python (Django, FastAPI), SQL (MySQL, PostgreSQL), NoSQL (MongoDB)</li>
            <li>ML architectures (MLFlow, TensorFlow, PyTorch, LLMs, Deep Neural Networks)</li>
            <li>Data Analysis, Data Visualization (Tableau, Pandas, Statistical Testing)</li>
            <li>Application Deployment on Streamlit, AWS, Azure; Git, Confluence</li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact</h2>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:Nramire6@jh.edu" className="text-blue-600 hover:underline">
              Nramire6@jh.edu
            </a>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:3059658287" className="text-blue-600 hover:underline">
              (305) 965-8287
            </a>
          </p>

          {/*
            Replace "YOUR_FORMSPREE_ENDPOINT" with the endpoint from your Formspree dashboard.
            This approach uses method="POST" so Formspree can process the data and send you an email.
          */}
          <form
            action="https://formspree.io/f/mblgzrej"
            method="POST"
            className="space-y-4 max-w-md"
          >
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            {/* Formspree needs a hidden input for its honeypot (optional) or reCAPTCHA. 
                This is a minimal example. */}
            <button
              type="submit"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
