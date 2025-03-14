import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save file to app/ directory
    // const filePath = path.join(process.cwd(), "app", file.name);
    // await writeFile(filePath, buffer);
    const filePath = path.join(process.cwd(), "app", "scoring_data.xlsx");
    await writeFile(filePath, buffer);

    return new Response(JSON.stringify({ message: "File uploaded successfully", filePath }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
