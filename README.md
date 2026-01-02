# 🔄 Event Loop Debugger

![Node](https://img.shields.io/badge/node-18+-brightgreen)
![JavaScript](https://img.shields.io/badge/javascript-ES2022-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Type](https://img.shields.io/badge/type-CLI-blue)

> Ferramenta CLI interativa para visualizar e entender o funcionamento do Event Loop do Node.js

Uma ferramenta educacional que torna visível o funcionamento interno do Event Loop através de visualizações coloridas e interativas no terminal. Perfeita para estudantes e desenvolvedores que querem dominar conceitos fundamentais de JavaScript assíncrono.

## 🎯 Objetivo

Criar uma ferramenta que desmistifica um dos conceitos mais importantes do Node.js: o Event Loop. Através de visualizações em tempo real e exemplos práticos, ajuda desenvolvedores a entender como JavaScript gerencia operações assíncronas.

## 🎯 Para que serve

Ajuda desenvolvedores a:
- 🔍 Entender as 6 fases do Event Loop (timers, I/O, poll, check, close)
- ⏱️ Ver a diferença entre `setImmediate()` e `process.nextTick()`
- 🎓 Aprender como microtasks e macrotasks são processadas
- 🐛 Debugar problemas de ordem de execução assíncrona
- 📊 Visualizar o fluxo de callbacks, promises e timers

## ✨ Features

- ✅ Visualização colorida das fases do Event Loop
- ✅ Menu interativo com exemplos demonstrativos
- ✅ Captura de eventos usando `async_hooks` nativo
- ✅ Formatação elegante com boxes e cores

## 🚀 Instalação e Uso

### Quick Start

```bash
# Clone o repositório
git clone https://github.com/k1ngS/event-loop-debugger.git
cd event-loop-debugger

# Instale as dependências
npm install

# Execute (modo interativo)
npm start
```

### Uso direto

```bash
node src/index.js
```

## 💻 Comandos e Modos

### Modo Interativo (Padrão)

```bash
node src/index.js
```

Exibe menu com opções para executar exemplos e visualizar a ordem de execução dos eventos do Event Loop.

## 🎨 Output Exemplo

```
╔═══════════════════════════════════════════════════════════╗
║           EVENT LOOP VISUALIZATION                        ║
╚═══════════════════════════════════════════════════════════╝

🟦 TIMERS PHASE
  └─ setTimeout() callbacks executados

🟩 I/O CALLBACKS PHASE
  └─ Callbacks de operações I/O completadas

🟨 IDLE/PREPARE PHASE
  └─ Fase interna do libuv

🟧 POLL PHASE
  └─ Aguardando novos eventos de I/O

🟥 CHECK PHASE
  └─ setImmediate() callbacks executados

🟪 CLOSE CALLBACKS PHASE
  └─ Eventos de fechamento (socket.on('close'))

───────────────────────────────────────────────────────────

💡 MICROTASKS (process.nextTick, Promises)
   Executadas ENTRE cada fase!
```

## 🛠️ Stack

**Runtime:**
- Node.js 18+ (usa async_hooks nativo)
- JavaScript ES Modules

**Dependências:**
- [chalk](https://github.com/chalk/chalk) - Colorização de output
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - Menu interativo
- [boxen](https://github.com/sindresorhus/boxen) - Caixas decorativas no terminal

**APIs Nativas:**
- `async_hooks` - Tracking de operações assíncronas
- `process.nextTick()` - Microtask queue
- `setImmediate()` - Check phase

## 📦 Como Funciona

### Arquitetura

```
src/
├── visualizer.js      # Captura e processa eventos do event loop
├── formatter.js       # Formata output colorido e relatorios
└── index.js           # CLI principal (menu e execução de exemplos)
```

### Fluxo de Execução

```
User Input → Menu Interativo → Seleciona Exemplo
    ↓
Exemplo é executado (traced)
    ↓
async_hooks captura eventos em tempo real
    ↓
Visualizer processa e categoriza por fase
    ↓
Formatter exibe com cores e boxes
    ↓
Output no terminal
```

### Código Exemplo Demonstrado

```javascript
// Exemplo executado pela ferramenta
async function demonstrateEventLoop() {
  console.log('1. 🚀 Síncrono - Executado imediatamente');

  setTimeout(() => {
    console.log('2. ⏱️ Timer - Macrotask (Timers Phase)');
  }, 0);

  setImmediate(() => {
    console.log('3. ⚡ Immediate - Check Phase');
  });

  process.nextTick(() => {
    console.log('4. 🎯 NextTick - Microtask (executa primeiro!)');
  });

  await Promise.resolve();
  console.log('5. ✅ Promise - Microtask (após nextTick)');
}
```

A ordem típica demonstrada: 1 → 4 → 5 → 3 → 2

## 🎓 O que aprendi construindo este projeto

- Event Loop Internals, microtasks vs macrotasks, CLIs interativas, ES Modules no Node.js, e uso de async_hooks para tracing.

## 🗺️ Roadmap

### v1.0 (Atual) ✅
- [x] Visualização das 6 fases
- [x] Exemplos interativos (promise-chain, async-await, settimeout, setimmediate, io-callbacks, close-callbacks, mixed-events)
- [x] Menu CLI
- [ ] Export para JSON

### v2.0 (Próxima)
- [ ] Gráficos e diagramas visuais
- [ ] Modo watch/live
- [ ] Métricas de performance

## 🤝 Contribuindo

Contribuições são bem-vindas:
- 📝 Novos exemplos educacionais
- 🐛 Correções de bugs
- 🎨 Melhorias na visualização
- 📖 Traduções da documentação

## 📄 Licença

[MIT](LICENSE)

## 👤 Autor

**Marcos k1ngS**
- GitHub: [@k1ngS](https://github.com/k1ngS)
- LinkedIn: [marcos-k1ngs](https://linkedin.com/in/marcos-k1ngs)
- Website: [k1ngs.dev](https://k1ngs.dev)
- Email: marcos.beltrao@outlook.pt

---

**⭐ Se este projeto te ajudou a entender Event Loop, deixe uma estrela!**
