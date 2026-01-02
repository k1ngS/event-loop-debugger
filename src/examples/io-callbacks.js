import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/*
 * ==========================================
 * Event Loop - Fase 2: I/O CALLBACKS
 * ==========================================
 *
 * Esta fase executa callbacks de operações de I/O que foram completadas,
 * como fs.readFile(), dns.lookup(), conexões de rede, etc.
 *
 * Ordem de Execução Esperada:
 * ┌─────────────────────────────────────┐
 * │ 1. Código Síncrono                  │
 * │ 2. Microtasks (process.nextTick)    │
 * │ 3. Timers (setTimeout)              │
 * │ 4. I/O Callbacks (fs.readFile) ←──  │ ESTA FASE
 * │ 5. setImmediate                     │
 * └─────────────────────────────────────┘
 *
 * I/O callbacks executam DEPOIS dos timers mas ANTES do setImmediate
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("1. [SÍNCRONO] Iniciando exemplo de I/O Callbacks\n");

// Timer - Fase 1 do Event Loop
setTimeout(() => {
  console.log("3. [TIMER] setTimeout(0) executado na fase de Timers");
}, 0);

// I/O Callback - Fase 2 do Event Loop
fs.readFile(path.join(__dirname, "io-callbacks.js"), "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }
  console.log(
    "4. [I/O CALLBACK] fs.readFile() executado na fase de I/O Callbacks"
  );
  console.log(`   → Arquivo lido com sucesso (${data.length} caracteres)`);
});

// Segundo I/O para demonstrar ordem FIFO dentro da mesma fase
fs.stat(__filename, (err, stats) => {
  if (err) {
    console.error("Erro ao obter stats:", err);
    return;
  }
  console.log("5. [I/O CALLBACK] fs.stat() executado na fase de I/O Callbacks");
  console.log(`   → Tamanho: ${stats.size} bytes`);
});

// setImmediate - Fase 4 do Event Loop
setImmediate(() => {
  console.log(
    "6. [IMMEDIATE] setImmediate() executado na fase de Check (Immediate)"
  );
});

// Microtask - Executa antes de qualquer fase do Event Loop
process.nextTick(() => {
  console.log(
    "2. [MICROTASK] process.nextTick() executado antes das fases do Event Loop"
  );
});

console.log(
  "\n→ Observe que I/O callbacks executam DEPOIS dos timers mas ANTES do setImmediate\n"
);
