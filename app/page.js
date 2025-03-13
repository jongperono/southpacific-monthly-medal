import Image from "next/image";
import ExcelReader from "./components/ExcelReader";
import data from "./data";

export default function Home() {
  const datax = data
  return (
    <div className="p-5">
      <h2 className="text-lg font-bold mb-4">Player Scores</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="">
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Handicap</th>
            <th className="border border-gray-400 px-4 py-2">1st Day</th>
            <th className="border border-gray-400 px-4 py-2">2nd Day</th>
            <th className="border border-gray-400 px-4 py-2">3rd Day</th>
            <th className="border border-gray-400 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {datax.map((player, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2">{player.name}</td>
              <td className="border border-gray-400 px-4 py-2">{player.handicap}</td>
              <td className="border border-gray-400 px-4 py-2">{player['1stDay']}</td>
              <td className="border border-gray-400 px-4 py-2">{player['2ndDay']}</td>
              <td className="border border-gray-400 px-4 py-2">{player['3rdDay']}</td>
              <td className="border border-gray-400 px-4 py-2">{player['total']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
