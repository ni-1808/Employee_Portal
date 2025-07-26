// src/pages/CompanyProfile.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CompanyProfile() {
  const { id } = useParams();

  // Mock company data (replace with real API later)
  const companyInfo = {
    name: id,
    about: 'This company is known for blending vintage vibes with modern tech solutions.',
    website: 'https://google.com',
    jobsPosted: ['Frontend Developer', 'UI/UX Designer','BackEnd','And May More.............'],
  };

  return (
    <div className="container mt-4">
      <h2>{companyInfo.name}</h2>
      <p><strong>About:</strong> {companyInfo.about}</p>
      <p><strong>Website:</strong> <a href={companyInfo.website}>{companyInfo.website}</a></p>
      <h5 className="mt-4">Open Positions:</h5>
      <ul>
        {companyInfo.jobsPosted.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <Link to="/" className="btn btn-outline-secondary mt-3">← Back to Jobs</Link>
    </div>
  );
}

export default CompanyProfile;
