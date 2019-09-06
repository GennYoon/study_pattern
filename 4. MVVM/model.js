class MODEL {
  constructor(text) {
    this.text = text;
    this.listeners = [];
  }

  subscribe = (_listener) => {
    this.listeners.push(_listener);
  }

  unsubscribe = (_listener) => {
    this.listeners = this.listeners.filter(listener => listener !== _listener);
  }

  notify = (text) => {
    this.listeners.forEach(listener => listener(text));
  }

  getText = () => {
    return this.text;
  }
  
  setText = (text) => {
    this.text = text;
    this.notify();
  }
}