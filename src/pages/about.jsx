import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#F1971C] mb-4">About JobTrack</h2>
      <p className="text-gray-700 mb-4">
        <strong>JobTrack</strong> is a modern job hunting platform built to simplify the recruitment process
        for both job seekers and employers. Our mission is to empower individuals by helping them discover
        the best career opportunities suited to their goals and skills.
      </p>
      <p className="text-gray-700 mb-4">
        We focus especially on the local job market, giving visibility to regional companies, startups, and
        freelance opportunities. Whether you're a student looking for an internship, a fresh graduate starting
        your career, or a professional seeking better opportunities — JobTrack is here to assist.
      </p>
      <p className="text-gray-700 mb-4">
        Our platform offers:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Daily job alerts customized to your profile</li>
        <li>Advanced filtering to quickly find the right job</li>
        <li>Easy one-click application process</li>
        <li>Company profiles and reviews</li>
        <li>Mobile-friendly experience for job hunting on the go</li>
      </ul>
      <p className="text-gray-700">
        At JobTrack, we believe job hunting should be efficient, transparent, and tailored to your needs.
        Join thousands of other users who have successfully found their dream jobs through our platform.
      </p>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">The Story Behind JobTrack</h3>
        <p className="text-gray-700">
          JobTrack was born out of a passion to simplify job hunting in the digital age. Our founders, who had
          personally faced the frustrations of traditional job hunting, decided to create a platform that would
          make the process smoother, faster, and more accessible for everyone.
        </p>
        <p className="text-gray-700">
          Since our launch, we’ve been dedicated to improving the way job seekers and employers connect. Our
          platform continues to evolve, and we strive to create an environment that fosters successful job
          matches, based on the unique needs of both job seekers and companies.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Meet Our Team</h3>
        <p className="text-gray-700 mb-4">
          JobTrack is powered by a passionate team of professionals dedicated to providing the best job search
          experience. Our team includes:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Product Designers</strong> - Crafting a seamless, intuitive platform experience.</li>
          <li><strong>Developers</strong> - Building innovative features to improve user experience.</li>
          <li><strong>Customer Support</strong> - Assisting users in navigating their job search journey.</li>
          <li><strong>Marketing Experts</strong> - Ensuring that the right employers and job seekers find each other.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Why Choose JobTrack?</h3>
        <p className="text-gray-700 mb-4">
          At JobTrack, we go beyond just listing jobs. Here’s why you should choose us for your job search:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>We focus on local job opportunities, making it easier to find relevant listings close to you.</li>
          <li>Our intuitive platform provides personalized job recommendations based on your preferences and qualifications.</li>
          <li>JobTrack supports both traditional employment and freelance opportunities, catering to diverse career paths.</li>
          <li>We help employers by providing tools to create detailed job listings and find candidates who match their specific requirements.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-[#F1971C] mb-4">Contact Us</h3>
        <p className="text-gray-700 mb-4">
          Have any questions or need assistance? We’re here to help!
        </p>
        <p className="text-gray-700">
          Email us at: <a href="mailto:support@jobtrack.com" className="text-[#F1971C]">support@jobtrack.com</a>
        </p>
        <p className="text-gray-700">
          Or reach us through our social media channels:
        </p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.facebook.com/jobtrack" className="text-[#F1971C]">Facebook</a>
          <a href="https://twitter.com/jobtrack" className="text-[#F1971C]">Twitter</a>
          <a href="https://www.linkedin.com/company/jobtrack" className="text-[#F1971C]">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default About;
