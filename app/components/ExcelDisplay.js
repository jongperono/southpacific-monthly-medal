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
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
            <svg className="mx-auto w-16 h-16 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0 0V8h2v4h-1zm-6 4h16M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">We'll be back soon!</h1>
            <p className="text-gray-600 mt-2">We're performing some maintenance. We'll be back shortly.</p>
            <p className="text-sm text-gray-500 mt-4">Thank you for your patience.</p>
        </div>
    </div>
    // <div classNameName="overflow-x-auto p-4">
    //     <table classNameName="min-w-full border border-gray-300 shadow-lg rounded-lg">
    //         {/* <thead classNameName=" bg-blue-500 text-white ">
    //             <tr>
    //                 <th classNameName="px-6 py-3 text-left">Hole</th>
    //                 <th classNameName="px-6 py-3 text-left">1</th>
    //                 <th classNameName="px-6 py-3 text-left">2</th>
    //                 <th classNameName="px-6 py-3 text-left">3</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">5</th>
    //                 <th classNameName="px-6 py-3 text-left">6</th>
    //                 <th classNameName="px-6 py-3 text-left">7</th>
    //                 <th classNameName="px-6 py-3 text-left">8</th>
    //                 <th classNameName="px-6 py-3 text-left">9</th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left">10</th>
    //                 <th classNameName="px-6 py-3 text-left">11</th>
    //                 <th classNameName="px-6 py-3 text-left">12</th>
    //                 <th classNameName="px-6 py-3 text-left">13</th>
    //                 <th classNameName="px-6 py-3 text-left">14</th>
    //                 <th classNameName="px-6 py-3 text-left">15</th>
    //                 <th classNameName="px-6 py-3 text-left">16</th>
    //                 <th classNameName="px-6 py-3 text-left">17</th>
    //                 <th classNameName="px-6 py-3 text-left">18</th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left">Total</th>
    //                 <th classNameName="px-6 py-3 text-left">Handicap</th>
    //                 <th classNameName="px-6 py-3 text-left">Net</th>
    //             </tr>
    //             <tr>
    //                 <th classNameName="px-6 py-3 text-left">Par</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">5</th>
    //                 <th classNameName="px-6 py-3 text-left">3</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">3</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">5</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">5</th>
    //                 <th classNameName="px-6 py-3 text-left">3</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">3</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">4</th>
    //                 <th classNameName="px-6 py-3 text-left">5</th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //                 <th classNameName="px-6 py-3 text-left"></th>
    //             </tr>
    //         </thead> */}
    //         <tbody classNameName="bg-white divide-y divide-gray-200">
    //         {data.map((row, rowIndex) => (
    //             <tr key={rowIndex} classNameName="hover:bg-gray-100">
    //             {row.map((cell, cellIndex) => (
    //                 <td key={cellIndex} classNameName="px-6 py-4 text-gray-700">{cell}</td>
    //             ))}
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    // </div>
    
  );
}
