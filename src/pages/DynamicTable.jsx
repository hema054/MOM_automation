import React, { useState } from 'react';
import '../styles/Dynamictable.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const DynamicTable = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [submittedData, setSubmittedData] = useState([]); // State for submitted table data

  const handleAddRow = () => {
    const newRow = {};
    columns.forEach(column => newRow[column.id] = '');
    setRows([...rows, newRow]);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: Math.random().toString(), // Unique identifier for column
      // header: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
    // Update existing rows with an empty value for the new column
    setRows(rows.map(row => ({ ...row, [newColumn.id]: '' })));
  };

  const handleChange = (rowIndex, columnIndex, value) => {
    setRows(prevRows =>
      prevRows.map((row, i) => (i === rowIndex ? { ...row, [columns[columnIndex].id]: value } : row))
    );
  };

  const handleSubmit = () => {
    const submittedRows = rows.filter(row => Object.values(row).some(value => value !== '')); // Filter rows with at least one filled cell
    const formattedData = submittedRows.map(row =>
      columns.map(column => row[column.id] || '') // Map each column value, filling empty cells with ''
    );
    setSubmittedData(formattedData);
  };

  return (
    <div className="dynamic-table-container">
      <h2>Create New Table</h2><br/>
      <button className="add-column-button" onClick={handleAddColumn}>Add Column</button>
      <button className="add-row-button" onClick={handleAddRow}>Add Row</button><br/>
     
      
      <table className="dynamic-table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.id}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>
                  <input
                    type="text"
                    value={row[column.id]}
                    onChange={e => handleChange(rowIndex, columnIndex, e.target.value)}
                    className="table-input"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table><br/><br/>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Table</h2>
          <table className="submitted-table">
            <thead>
              <tr>
                {columns.map(column => (
                  <th key={column.id}>{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submittedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cellValue, colIndex) => (
                    <td key={`${rowIndex}-${colIndex}`}>{cellValue}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DynamicTable;
