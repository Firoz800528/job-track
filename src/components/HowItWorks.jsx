import React from 'react';
const HowItWorks = () => {
    const steps = [
      { step: "1. Browse Companies", detail: "Explore local companies with open positions." },
      { step: "2. View Jobs", detail: "See job openings, salary, and details at a glance." },
      { step: "3. Apply Easily", detail: "Click 'Apply' and land on the official company website." }
    ];
  
    return (
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-[#fd6107c5] mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow shadow-[#fd610765] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  