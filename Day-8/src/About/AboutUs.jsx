import React from 'react';
import "./AboutUs.css"
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

function AboutUs() {
  const founders = [
    {
      name: 'Kishore',
      role: ' CEO',
      bio: 'kishore is the visionary founder and CEO of SIMS. With a strong background in technology and a passion for education, he founded SIMS to simplify student information management for educational institutions.',
      image: "https://res.cloudinary.com/dtcdcvkki/image/upload/v1695465842/WhatsApp_Image_2023-09-23_at_4.13.28_PM_cu1ul6.jpg",
    },
    {
      name: 'Magesh',
      role: 'Co-Founder & CTO',
      bio: 'Magesh is a visionary technologist who brings extensive expertise in software development. He is dedicated to pushing the boundaries of technology to create user-friendly and innovative products.',
      image: 'https://res.cloudinary.com/dtcdcvkki/image/upload/v1695465924/WhatsApp_Image_2023-09-23_at_4.11.36_PM_rfshc5.jpg', 
    },
    {
      name: 'Neeraj',
      role: 'Founder',
      bio: 'Neeraj is the visionary founder of our organization. With a passion for innovation and a keen entrepreneurial spirit, he established our company to address pressing challenges in various industries.',
      image: 'https://res.cloudinary.com/dtcdcvkki/image/upload/v1695465842/WhatsApp_Image_2023-09-23_at_4.12.38_PM_fjau8b.jpg', 
    },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="roww">
          
          {founders.map((founder, index) => (
            <div key={index} className="col-lg-4">
              <div className="founder-card">
                <img src={founder.image} alt={founder.name} className="founder-image" />
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-bio">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div>

 
    
      <main>
        <section className="about-sectionn">
          <h2>ABOUT US</h2>
          <p>
          Welcome to our colorful world of beauty! At Glammart, we are
        passionate about bringing out your inner radiance and helping you
        embrace your unique beauty.Our journey began 2023 with a simple vision: to provide
        top-notch beauty products that make you feel confident and empowered.
        Over the years, we have carefully curated a stunning collection of
        makeup, skincare, and beauty accessories that cater to all skin types
        and styles. What sets us apart is our commitment to quality. Our team of experts
        rigorously tests every product to ensure it meets the highest standards
        of performance and safety. We believe that beauty should never come at
        the expense of your skin's health, which is why we prioritize clean and
        cruelty-free formulations.
          </p>
        </section>
        <section className="mission-vision">
          <div className='mission-vission'>
          <h2>Our MISSION</h2>
          <p>
          "At Glammart, our mission is to empower individuals to embrace their unique beauty and feel confident in their own skin. We believe that beauty is not one-size-fits-all, and everyone deserves to look and feel their best, no matter their age, gender, or background. We are committed to providing high-quality beauty products that enhance natural beauty while promoting skin health. Our formulations are carefully crafted to deliver outstanding results without compromising on safety. We prioritize clean, cruelty-free ingredients and sustainable practices to minimize our impact on the environment."
          </p>
          </div>
          <div className='mission-vission'>

          <h2>OUR VISION</h2>
          <p>
          
          "At Glammart, our vision is to revolutionize the beauty industry by fostering a world where every individual feels confident, beautiful, and empowered in their own unique way. We aspire to become a global leader in beauty and skincare innovation, setting new standards for quality, inclusivity, and sustainability. We envision a future where our products are not just synonymous with beauty but also with self-expression and self-care.
          </p>
          </div>

        </section>
        <section className="core-values">
          <h2>Terms And Conditions</h2>
          <ul>
            <li>
              <strong><i>Innovation:</i></strong> Innovation is at the heart of everything we do. We foster a culture of creativity, continuous improvement, and forward-thinking to stay at the forefront of our field.
            </li>
            <li>
              <strong><i>Excellence:</i></strong> We hold ourselves to the highest standards of excellence. From product development to customer service, we aim for nothing less than perfection.
            </li>
            
            <li>
              <strong><i>Integrity:</i></strong> We operate with unwavering integrity, transparency, and honesty in all our dealings, earning the trust and respect of our clients and partners.
            </li>
            <li>
              <strong><i>Collaboration:</i></strong> We believe that great achievements are the result of effective collaboration. We work closely with our clients, employees, and partners to achieve shared goals.
            </li>
          </ul>
        </section>
        
      </main>
      
    </div>


        </div>
            
        <Footer/>
    </section>
  );
}

export default AboutUs;