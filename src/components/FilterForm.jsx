// src/components/FilterForm.jsx
import React from 'react';

function FilterForm({ onFilter }) {
  return (
    <div className="mb-3 row">
      <div className="col">
        <select className="form-select" onChange={(e) => onFilter('location', e.target.value)}>
          <option value="">Location</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      <div className="col">
        <select className="form-select" onChange={(e) => onFilter('type', e.target.value)}>
          <option value="">Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
    </div>
  );
}

export default FilterForm;
