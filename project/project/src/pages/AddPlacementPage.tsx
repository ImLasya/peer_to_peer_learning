import React, { useState } from 'react';

function AddPlacementPage() {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [salaryPackage, setSalaryPackage] = useState(''); // Renamed from 'package' to 'salaryPackage'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add placement logic here (e.g., API call)
    console.log({ company, role, salaryPackage });
  };

  return (
    <div>
      <h1>Add Placement Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Package"
          value={salaryPackage}
          onChange={(e) => setSalaryPackage(e.target.value)}
        />
        <button type="submit">Add Placement</button>
      </form>
    </div>
  );
}

export default AddPlacementPage;