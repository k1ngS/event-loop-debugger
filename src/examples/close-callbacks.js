import net from "net";
import fs from "fs";
import { Readable } from "stream";

/*
 * ==========================================
 * Event Loop - Fase 6: CLOSE CALLBACKS
 * ==========================================
 *
 * Esta é a ÚLTIMA fase do Event Loop. Executa callbacks de eventos
 * de fechamento como socket.on('close'), server.close(), stream.on('close').
 *
 * Ordem de Execução Esperada:
 * ┌─────────────────────────────────────┐
 * │ 1. Código Síncrono                  │
 * │ 2. Microtasks (process.nextTick)    │
 * │ 3. Timers (setTimeout)              │
 * │ 4. I/O Callbacks                    │
 * │ 5. setImmediate                     │
 * │ 6. Close Callbacks ←───────────────  │ ESTA FASE (ÚLTIMA)
 * └─────────────────────────────────────┘
 *
 * Close callbacks são executados por ÚLTIMO no ciclo do Event Loop
 */

console.log("1. [SÍNCRONO] Iniciando exemplo de Close Callbacks\n");

// Timer - Fase 1 do Event Loop
setTimeout(() => {
  console.log("3. [TIMER] setTimeout(0) executado na fase de Timers");
}, 0);

// Criando um servidor TCP simples
const server = net.createServer();

// Registrando callback de close - Fase 6 do Event Loop (ÚLTIMA)
server.on("close", () => {
  console.log(
    "6. [CLOSE CALLBACK] server.on('close') executado na fase de Close Callbacks"
  );
  console.log("   → Esta é a ÚLTIMA fase do Event Loop!");
});

// Criando um stream de leitura
const stream = new Readable({
  read() {
    this.push("Dados do stream");
    this.push(null); // Finaliza o stream
  },
});

// Registrando callback de close do stream
stream.on("close", () => {
  console.log(
    "7. [CLOSE CALLBACK] stream.on('close') executado na fase de Close Callbacks"
  );
  console.log("   → Close callbacks executam em ordem FIFO");
});

// Fazendo o servidor escutar em uma porta aleatória
server.listen(0, () => {
  console.log("4. [I/O CALLBACK] server.listen() callback executado");

  // Fechando o servidor imediatamente após iniciar
  server.close(() => {
    console.log(
      "   → server.close() foi chamado, aguardando fase de Close Callbacks..."
    );
  });

  // Fechando o stream
  stream.destroy();
});

// setImmediate - Fase 5 do Event Loop (penúltima)
setImmediate(() => {
  console.log("5. [IMMEDIATE] setImmediate() executado na fase de Check");
  console.log("   → Ainda faltam os Close Callbacks...");
});

// Microtask - Executa antes de qualquer fase do Event Loop
process.nextTick(() => {
  console.log(
    "2. [MICROTASK] process.nextTick() executado antes das fases do Event Loop"
  );
});

console.log("\n→ Observe que Close Callbacks são os ÚLTIMOS a executar!\n");
