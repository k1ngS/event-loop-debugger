const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function processar() {
  console.log("⏳ Iniciando função async...");

  // O 'await' envolve o código numa Promise
  await Promise.resolve();

  console.log("⚡ Meio da execução");

  // Aqui criamos um Timeout e uma Promise ao mesmo tempo
  await esperar(10);

  console.log("✅ Função async terminada");
}

console.log("1. Antes da chamada");
processar();
console.log("2. Depois da chamada (a função ainda está rodando em background)");
