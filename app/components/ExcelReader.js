'use client';

import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function SimpleExcelReader() {
  const [data, setData] = useState([]);
  const [datax, setDatax] = useState([])

  useEffect = () => {
    filePath = 'sample-excel-data.xlsx'
  const readerExcel = new FileReader()
  
  }
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file)
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryData = event.target.result;
      const workbook = XLSX.read(binaryData, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert sheet to JSON
      setData(jsonData);
    };

    reader.readAsBinaryString(file); // Read file as binary string
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Simple Excel Reader</h1>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {data.length > 0 && (
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border border-gray-300 px-4 py-2 bg-gray-200">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
