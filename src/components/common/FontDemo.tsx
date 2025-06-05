import React from 'react';

export const FontDemo: React.FC = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#141414', color: '#ffffff' }}>
      <h1 className="netflix-heading" style={{ fontSize: '48px', marginBottom: '20px' }}>
        NETFLIX BEBAS NEUE HEADING
      </h1>
      
      <h2 className="netflix-title" style={{ fontSize: '32px', marginBottom: '16px' }}>
        Netflix Sans Bold Title
      </h2>
      
      <h3 className="netflix-subtitle" style={{ fontSize: '24px', marginBottom: '16px' }}>
        Netflix Sans Medium Subtitle
      </h3>
      
      <p className="netflix-body" style={{ fontSize: '18px', marginBottom: '16px' }}>
        Netflix Sans Regular body text. This is how regular content will look across the application.
      </p>
      
      <p className="netflix-light" style={{ fontSize: '16px', marginBottom: '24px', color: '#999999' }}>
        Netflix Sans Light for secondary content and descriptions.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="cta-button">CTA Button</button>
      </div>

      <div style={{ marginTop: '32px' }}>
        <h4 style={{ marginBottom: '16px' }}>Font Weight Examples:</h4>
        <div style={{ fontFamily: '"Netflix Sans", Arial, sans-serif' }}>
          <p style={{ fontWeight: 300, marginBottom: '8px' }}>Netflix Sans Light (300)</p>
          <p style={{ fontWeight: 400, marginBottom: '8px' }}>Netflix Sans Regular (400)</p>
          <p style={{ fontWeight: 500, marginBottom: '8px' }}>Netflix Sans Medium (500)</p>
          <p style={{ fontWeight: 700, marginBottom: '8px' }}>Netflix Sans Bold (700)</p>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;
