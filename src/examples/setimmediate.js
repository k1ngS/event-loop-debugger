console.log("▶️ Início");

// Agenda para a fase "Check"
setImmediate(() => {
  console.log("🚀 Immediate 1 executado");
});

setImmediate(() => {
  console.log("🚀 Immediate 2 executado");
});

// Apenas para comparação, um timeout
setTimeout(() => {
  console.log(
    "⏰ Timeout (pode rodar antes ou depois do immediate dependendo da performance)"
  );
}, 0);

console.log("⏹️ Fim");
