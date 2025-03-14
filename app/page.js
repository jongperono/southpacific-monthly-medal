import Image from "next/image";
import ExcelReader from "./components/ExcelReader";
import data from "./data";
import ExcelDisplay from "./components/ReadExcelFileData/ExcelDisplay";

export default function Home() {
  const datax = data
  return (
    <ExcelDisplay />
  );
}
