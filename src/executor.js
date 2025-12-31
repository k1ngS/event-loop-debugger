import path from "node:path";
import { pathToFileURL } from "node:url";
import Visualizer from "./visualizer.js";
import * as formatter from "./formatter.js";

export async function run(filePath) {
  const absolutePath = path.resolve(
    process.cwd(),
    "src/examples",
    `${filePath}.js`
  );

  const fileUrl = pathToFileURL(absolutePath).href;

  console.log(`\n📂 Executando: ${absolutePath}\n`);

  const visualizer = new Visualizer();
  visualizer.start();

  try {
    await import(fileUrl);
  } catch (err) {
    console.error("Erro na execução do exemplo:", err);
  }

  visualizer.stop();

  const timeline = visualizer.getTimeline();
  const report = visualizer.getReport();

  console.log(formatter.formatTimeline(timeline));
  console.log(formatter.formatReport(report));
}
