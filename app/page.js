import Image from "next/image";
import ExcelReader from "./components/ExcelReader";
import data from "./data";
import ReadTextFile from "./components/ReadTextFileData/ReadTextFile";
import ReadExcelFile from "./components/ReadExcelFileData/ReadExcelFile";
import ExcelDisplay from "./components/ExcelDisplay";

export default function Home() {
  const datax = data
  return (
    <div>
      Display data
      {/* <ReadTextFile/> */}
      {/* <ReadExcelFile/> */}
      <ExcelDisplay/>
    </div>

  );
}
