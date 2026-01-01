import React from 'react';
import './Statistics.css';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Statistics: React.FC = () => {
  return (
    <div className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          <StatItem number="15+" label="Years of Experience" />
          <StatItem number="10,000+" label="Patients Served" />
          <StatItem number="100%" label="Personalized Care" />
          <StatItem number="24/7" label="WhatsApp Support" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
