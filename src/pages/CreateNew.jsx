import React from 'react';
import { useState } from 'react';
import Table from './Table.jsx';
import '../styles/CreateNew.css';

const CreateNew = () => {
 const [selectedVenue,setSelectedVenue]=useState('');

 const handleVenueChange= (event) =>{
  setSelectedVenue(event.target.value);
 }

  const handleSubmit = () => {    
    alert('Form submitted!');
  };

  const handleDownloadPDF = () => {
    
    alert('Downloading as PDF...');
  };

  return (
    <div className="create-new-container">
      <h1>MoM Documentation Template</h1>
      <div className="form-row">
      <div className="form-item">
          <label htmlFor="meetingName">Name of the Meeting:</label>
          <input type="text" id="meetingName" />
        </div>
        <div className="form-item">
          <label htmlFor="dateTime">Date and Time:</label>
          <input type="datetime-local" id="dateTime" />
        </div>
      </div>
      <div className="form-row">        
        <div className="form-item">
          <label htmlFor="program">Program Name:</label>
          <input type="text" id="program" />
        </div>
      </div>
      <div className="form-item">
        <label htmlFor="agenda">Agenda:</label>
        <textarea id="agenda" rows="4" cols="50"></textarea>
      </div>
      <div className="form-row">
        <div className="form-item">
          <label htmlFor="department">Department:</label>
          <select id="department">
          <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="CSE">CSE</option>
                <option value="AIDS">AIDS</option>
                <option value="AIML">AIML</option>
                <option value="CT">CT</option>
                <option value="ISE">ISE</option>
                <option value="BT">BT</option>
                <option value="BM">BM</option>
                <option value="CIVIL">CIVIL</option>
                <option value="MECH">MECH</option>
                <option value="MECHATRONICS">MECHATRONICS</option>
                <option value="AERO">AERO</option>
                <option value="AGRI">AGRI</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <label htmlFor="academicYear">Academic Year:</label>
          <select id="academicYear">
          <option value="" selected ></option>
            <option value="22"> 2022-2023</option>
            <option value="23"> 2023-2024</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="semester">Semester:</label>
          <select id="semester">
          <option value="" selected></option>
          <option value="odd">Odd</option>
            <option value="Even"> Even</option>
          </select>
        </div>
      </div>
      <div className="form-item">
        <label htmlFor="refNo">Ref No:</label>
        <input type="number" id="refNo" />
      </div>
      <div className="form-row">
        <div className="form-item">
          <label htmlFor="venue">Venue:</label>
          <select id="venue" value={selectedVenue} onChange={handleVenueChange}>
          <option value=""selected> </option>
          <option value="online">Online</option>
            <option value="offline"> Offline</option>
          </select>
        </div>
        {selectedVenue==="online" && (
            <div className="form-item">
              <label htmlFor="meetLink">Meet Link:</label>
              <input type="text" id="meetLink"/>
              </div>
        )}
        {selectedVenue==="offline" && (
            <div className="form-item">
              <label htmlFor="Venue/Place">Venue/Place</label>
              <input type="text" id="Venue/Place"/>
              </div>
        )}
      </div>
      <div className="form-item">
        <label htmlFor="membersPresent">Number of members present:</label>
        <input type="number" id="refNo" />
      </div>
      <div className="form-item">
        <label htmlFor="attendees">List of Attendees:</label>
        <textarea id="attendees" rows="4" cols="50"></textarea>
      </div>
      
      <hr />
      <h2 className='text'>Documentation Table</h2>
      <Table />
      <br/><br/><br/>
      <div className="form-row">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <button className="download-pdf-btn" onClick={handleDownloadPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default CreateNew;
