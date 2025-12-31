console.log("🟢 1. Início Síncrono");

Promise.resolve("Dados Iniciais")
  .then((data) => {
    // Isso gera uma nova Promise interna
    return data + " -> Processado 1";
  })
  .then((data) => {
    // Isso gera outra Promise interna
    return data + " -> Processado 2";
  })
  .then((finalData) => {
    // Última Promise
    console.log("✅ Final da cadeia:", finalData);
  });

console.log("🔴 2. Fim Síncrono");
