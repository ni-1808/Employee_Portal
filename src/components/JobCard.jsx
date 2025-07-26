// src/components/JobCard.jsx
import React from 'react';

function JobCard({ job }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle text-muted">{job.company}</h6>
        <p className="card-text">
          <strong>Location:</strong> {job.location} | <strong>Type:</strong> {job.type}
        </p>
        <p>{job.description}</p>
        <button className="btn btn-outline-primary">Apply</button>
      </div>
    </div>
  );
}

export default JobCard;
