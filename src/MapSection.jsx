// src/components/MapSection.jsx
import React from 'react';

const MapSection = () => {
  return (
    <div className="w-100" style={{ height: '500px' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.979502033661!2d-73.98715538459493!3d40.75272637932714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d73b2fa5146be73!2s27th%20Ave%2C%20New%20York%2C%20NY%2011126%2C%20USA!5e0!3m2!1sen!2sin!4v1659608896993!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
