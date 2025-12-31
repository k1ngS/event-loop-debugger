console.log("▶️ Início");

// Timeout de 0ms (Mínimo possível, geralmente 1ms na prática)
setTimeout(() => {
  console.log("⏰ Timeout 1 (0ms) executado");
}, 0);

// Timeout de 50ms
setTimeout(() => {
  console.log("⏰ Timeout 2 (50ms) executado");
}, 50);

// Um Timeout que define outro Timeout (Nested)
setTimeout(() => {
  console.log("⏰ Timeout 3 (Pai) executado");
  setTimeout(() => {
    console.log("⏰ Timeout 4 (Filho) executado");
  }, 0);
}, 10);

console.log("⏹️ Fim do script principal");
