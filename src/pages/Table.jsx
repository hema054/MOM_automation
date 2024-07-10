import React, { useState } from 'react';
import '../styles/Table.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Table = () => {
  // Initialize data with unique "Points Discussed" values
  const contentArray = [
    "Review and Action taken for last BoS meeting",
    "Consolidation of stakeholder's feedback for syllabus revision and ActionsTaken",
    "Revision of vision, Mission of the Department",
    "Course Outcomes (COs) attainment details of 2023-2024 odd semester courses of the program and target for 2024-25 odd semester courses of the program",
    "Program outcomes(POs),Programme Specific Outcomes (PSOs) target and attainment of 2023-2027 batch and 2023-24 batch respectively",
    "Discussion on academic feedback of 2022-23 even semester and action plan",
    "Identification of skillset required based on core company feedbacks and action plan",
    "Feedback on teaching leaarning process(Syllabus content,delivery method,Assesment etc..)",
    "Discussion on Autonomy courses",
    "Identification and inclusion one  credit and value added courses for R2022 curriculam",
    "Industry collaboraative initiative through IIPC and other activities",
    "Suggestions for innovative teaching methodology/evaluation/Question paper",
    "Number of revisions where syllabus revision was carried out in the meeting",
    "Number of courses focusing on:\n" +
    "  i. Employability,\n" +
    "  ii. Entrepreneurship,\n" +
    "  iii. Skill development",
    "Number of new courses included:\n" +
    "  i. Open electives,\n" +
    "  ii. Online courses,\n" +
    "  iii. Professional Elective courses",
    "Number of courses offered through Choice bases Credit System(CBCS)/elective Course System:",
    "Details of research and extension activities",
    "Others",
  ];
  
  const initialData = Array(18).fill('').map((_, index) => ({
    sno: `${index + 1}`,
    pointsDiscussed: contentArray[index], // Use content from the array
    status: '',
    suggestedBy: '',
    responsibility: '',
  }));
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState(initialData);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleAddRow = () => {
    const newData = {
      sno: `${data.length + 1}`, // Generate unique S.No based on data length
      pointsDiscussed: '', // Initialize new row with empty "Points Discussed"
      status: '',
      suggestedBy: '',
      responsibility: '',
    };
    setData([...data, newData]);
  };
  
  return (
    <>
    <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead className="table-header" style={{ border: '5px solid #ddd' }}>
        <tr>
          <th>S.No</th>
          <th>Points Discussed</th>
          <th>Status</th>
          <th>Suggested By</th>
          <th>Responsibility</th>
        </tr>
      </thead>
      <tbody className="table-body" style={{ border: '5px solid #ddd' }}>
        {data.map((row, index) => (
          <tr key={index} className="table-row" style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' }}>
            <td>{row.sno}</td>
            <td>
              <p className="points-discussed" style={{ margin: 0 }}>{row.pointsDiscussed}</p></td>
            {/* <td>
          <input  className="points-discussed-input" 
         value={row.pointsDiscussed} onChange={(e) => handleInputChange(index, e)} 
        type="text"
         style={{ padding: '6px', border: 'none', borderRadius: '4px', backgroundColor: '#f4f4f4', width: '100%', margin:0}} 
             /> */}
         {/* </td> */}
            <td>
              <select name="status" value={row.status} onChange={(e) => handleInputChange(index, e)} 
              className="status-select" style={{ padding: '6px', border: 'none', borderRadius: '4px', backgroundColor: '#f4f4f4' }}
            >

                <option value="">Select</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="revisionRequired">Revision Required</option>
              </select>
            </td>
            <td>
              <input type="text" name="suggestedBy" 
              value={row.suggestedBy} onChange={(e) => handleInputChange(index, e)} 
              className="suggested-by-input"
               style={{ padding: '6px', border: 'none', borderRadius: '4px', backgroundColor: '#f4f4f4', width: '100%' }} 
               />
            </td>
            <td>
              <input type="text" name="responsibility"
               value={row.responsibility} onChange={(e) => handleInputChange(index, e)} 
               className="responsibility-input" 
               style={{ padding: '6px', border: 'none', borderRadius: '4px', backgroundColor: '#f4f4f4', width: '100%' }} 
               />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={handleAddRow}>Add Row</button>
    <br/>
    <div className={`dropdown ${showDropdown ? 'show-dropdown' : ''}`}>
  <div className="dropbtn" onClick={() => setShowDropdown(!showDropdown)}>
    Create Table
  </div>
  <div className="dropdown-content">
    <p>No table found.</p>
    <Link to="/dynamic-table">Create Table</Link>
  </div>
</div>
    
    </>
  );
};

export default Table;