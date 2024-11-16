import React from 'react';

const About = () => {
  const services = [
    {
      title: 'Email Address Generation',
      description: 'Generate possible email combinations for any name and company.',
    },
    {
      title: 'Email Verification and Scoring',
      description: 'Verify the generated emails and score them based on validity.',
    },
    {
      title: 'Profile Management',
      description: 'Save generated email addresses to your profile for future reference.',
    },
    {
      title: 'Support and Assistance',
      description: 'Get dedicated support for all your queries and issues.',
    },
  ];

  return (
    <div className="container mx-auto p-8 mt-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl mb-4 text-center">About Us</h1>
      <p className="text-lg leading-relaxed mb-8">
        Our application takes your first name, last name, and company website to generate possible email combinations. These emails are checked and scored to help you find the correct email address for a person. You can also store these email addresses in your profile for future reference.
      </p>
      <h2 className="text-2xl mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
