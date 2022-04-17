
class EventEmitter {
  events = {}

  subscribe(event, handler) {
    if (this.events && this.events[event]) {
      this.events[event] = [ ...this.events[event], handler]
    } else {
      this.events[event] = [handler]
    }
    console.log(this.events)
  }
  emit(event, ...args) {
    Object.entries(this.events).forEach((handlers) => {
      if (handlers[0] === event) {
        handlers[1].forEach(handler => {
          return handler(event, ...args);
        })
      }
    })
  }
}


const emitter = new EventEmitter();

emitter.subscribe('click', (eventName, ...args) =>
  console.log(`${eventName} 1`)
);
emitter.subscribe('change', (eventName, ...args) =>
  console.log(`${eventName} 1`)
);
emitter.subscribe('click', (eventName, ...args) =>
  console.log(`${eventName} 2`)
);

emitter.emit('click', 1, 'string', 'whatever', {}, []); // click 1; click 2
emitter.emit('change', 2); // click 1; click 2
