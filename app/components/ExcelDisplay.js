"use client";

import { useState, useEffect } from "react";

export default function ExcelDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/read-excel");
      const result = await res.json();
      setData(result.data || []);
    };

    fetchData();
  }, [data]);

  return (
    <div className="overflow-x-auto p-4">
  <table className="min-w-full border border-gray-300 shadow-lg rounded-lg">
    <thead className="bg-blue-500 text-white">
      <tr>
        <th className="px-6 py-3 text-left">#</th>
        <th className="px-6 py-3 text-left">Name</th>
        <th className="px-6 py-3 text-left">Day 1</th>
        <th className="px-6 py-3 text-left">Day 2</th>
        <th className="px-6 py-3 text-left">Day 3</th>
        <th className="px-6 py-3 text-left">Total</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="hover:bg-gray-100">
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="px-6 py-4 text-gray-700">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
    // <div>   
    //   <table border="1">
    //     <thead>
    //         <tr>
    //             <th>Name</th>
    //             <th>Handicap</th>
    //             <th>Score 1</th>
    //             <th>Score 2</th>
    //             <th>Total</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {data.map((row, rowIndex) => (
    //             <tr key={rowIndex}>
    //             {row.map((cell, cellIndex) => (
    //                 <td key={cellIndex}>{cell}</td>
    //             ))}
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    // </div>
  );
}
