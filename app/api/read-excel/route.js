import { readFile } from "fs/promises";
import path from "path";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "app", "scoring_data.xlsx");
    const buffer = await readFile(filePath);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; 
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
