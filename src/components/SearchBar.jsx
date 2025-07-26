import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);      // Update local state
    onSearch(value);           // Call the parent callback
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for jobs (e.g., Developer, Designer...)"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <div className="mt-2">
          <span>Searching for: <strong>{searchTerm}</strong></span>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
