import fs from "node:fs"; // Importando para gerar um evento de I/O se necessário

console.log("1. [SYNC] Início do script");

// Macrotask (Timer)
setTimeout(() => {
  console.log("5. [MACRO] Timeout executado");
}, 0);

// Macrotask (Check)
setImmediate(() => {
  console.log("6. [MACRO] Immediate executado");
});

// Microtask (Promise)
Promise.resolve().then(() => {
  console.log("4. [MICRO] Promise executada");
});

// Microtask (Prioridade Alta)
process.nextTick(() => {
  console.log("3. [MICRO] nextTick executado");
});

console.log("2. [SYNC] Fim do script");
