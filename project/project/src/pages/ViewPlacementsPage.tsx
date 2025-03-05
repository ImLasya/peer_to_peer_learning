// import React from 'react';

function ViewPlacementsPage() {
  // Fetch placement details from an API or state
  const placements = [
    { company: 'Google', role: 'Software Engineer', package: '30 LPA' },
    { company: 'Microsoft', role: 'Product Manager', package: '25 LPA' },
  ];

  return (
    <div>
      <h1>Placement Details</h1>
      <ul>
        {placements.map((placement, index) => (
          <li key={index}>
            <strong>{placement.company}</strong> - {placement.role} ({placement.package})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewPlacementsPage;