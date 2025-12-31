import chalk from "chalk";
import boxen from "boxen";

const getColor = (type) => {
  if (type === "PROMISE") return chalk.green;
  if (type === "Timeout") return chalk.red;
  return chalk.blue;
};

export const formatEvent = (event, startTime) => {
  const diff = event.timestamp - startTime;
  const color = getColor(event.type);
  return `[+${diff}ms] ${color(event.type)} (ID: ${event.id})`;
};

export const formatTimeline = (events) => {
  if (events.length === 0) return chalk.gray("Nenhum evento registrado.");

  const startTime = events[0].timestamp;

  return events.map((e) => formatEvent(e, startTime)).join("\n  ↓\n");
};

export const formatReport = (report) => {
  const content = `
    Duração: ${report.totalDuration}ms
    Eventos: ${report.totalEvents}
    ----------------------------------
    ${Object.entries(report.counts)
      .map(([type, count]) => `${type}: ${count}`)
      .join("\n    ")}
  `;

  return boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "green",
  });
};
