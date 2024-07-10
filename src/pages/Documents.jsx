import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/Documents.css';

const Documents = ({ type }) => {
  return (
    <><br/><br/>
    <div className="documents-container">
      <div className="documents-header">
        <h2 className="documents-title">{type} Documents</h2>
        <Link to="/create" className="create-new-btn">+ Create New</Link>
      </div>
      <table className="documents-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Department</th>
            <th>Name of the meeting</th>
            <th>Type</th>
            <th>Program name</th>
          </tr>
        </thead>
        <tbody>
          {/* Dummy table rows */}
          <tr>
            <td>1</td>
            <td>IT</td>
            <td>Project Review</td>
            <td>Review</td>
            <td>Computer Science</td>
          </tr>
          {/* Add more dummy rows as needed */}
        </tbody>
      </table>
      <p className="no-files-msg">No files added.</p>
    </div></>
  );
};

export default Documents;