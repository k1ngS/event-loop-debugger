import async_hooks from "node:async_hooks";

class Visualizer {
  constructor() {
    this.events = [];
    this.hook = null;
  }

  #init(asyncId, type, triggerAsyncId, resource) {
    this.events.push({
      id: asyncId,
      type,
      timestamp: Date.now(),
    });
  }

  start() {
    this.hook = async_hooks.createHook({
      init: (asyncId, type, triggerAsyncId, resource) => {
        this.#init(asyncId, type, triggerAsyncId, resource);
      },
    });
    this.hook.enable();
  } // void

  stop() {
    this.hook.disable();
  } // void

  getTimeline() {
    return this.events;
  } // Array<Event>

  getReport() {
    if (this.events.length === 0)
      return { totalDuration: 0, totalEvents: 0, counts: {} };

    const first = this.events[0];
    const last = this.events[this.events.length - 1];
    const totalDuration = last.timestamp - first.timestamp;

    const counts = {};
    for (const event of this.events) {
      const type = event.type;
      counts[type] = (counts[type] || 0) + 1;
    }

    return {
      totalDuration,
      totalEvents: this.events.length,
      counts,
    };
  } // Object
}

export default Visualizer;
