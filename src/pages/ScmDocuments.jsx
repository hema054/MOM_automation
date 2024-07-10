import React from 'react';

const Documents = ({ type }) => {
  return (
    <div>
      <h2>{type} Documents</h2>
      <p>List of {type} documents goes here...</p>
    </div>
  );
};

export default Documents;