import { select, Separator } from "@inquirer/prompts";
import { run } from "./executor.js";

const file = await select({
  message: "Select one example below",
  choices: [
    {
      name: "1. Promise Chain",
      value: "promise-chain",
      description:
        "A technique in asynchronous programming (especially Javascript) for executing a sequence of operations one after another, where each step waits for the previous one to finish.",
    },
    {
      name: "2. Async/Await",
      value: "async-await",
      description:
        "A modern programming syntax (in languages like Javascript, Python, C#) that simplifies handling asynchronous operations (tasks that don't finish immediately, like network requests) by making them look like regular, sequential code, without blocking the main program.",
    },
    {
      name: "3. SetTimeout",
      value: "settimeout",
      description:
        "A function or mechanism used in programming to schedule the execution of a specific task or function after a specified period of time has passed.",
    },
    {
      name: "4. SetImmediate",
      value: "setimmediate",
      description:
        "In Node.js schedules a function (callback) to run as soon as the current event loop cycle finishes its I/P polling phase, execution it before any setTimeout or setInterval scheduled for the next cycle, making it ideal for deferring tasks asynchronously to avoid blocking the event loop and ensure non-blocking I/O.",
    },
    {
      name: "5. I/O Callbacks",
      value: "io-callbacks",
      description:
        "Demonstrates the I/O callbacks phase of the Event Loop, where callbacks from asynchronous I/O operations (like fs.readFile, dns.lookup) are executed after timers but before setImmediate.",
    },
    {
      name: "6. Close Callbacks",
      value: "close-callbacks",
      description:
        "Demonstrates the close callbacks phase, the LAST phase of the Event Loop, where close event callbacks (like socket.on('close'), server.close()) are executed after all other phases.",
    },
    {
      name: "7. Mixed Events",
      value: "mixed-events",
      description: "It' a mixture of all of the above events.",
    },
  ],
});

run(file);
