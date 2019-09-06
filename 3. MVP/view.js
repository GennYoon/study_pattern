class VIEW {
  constructor() {
    this.input = document.getElementById("input");
    this.output = document.getElementById("output");
  }

  render = (text) => {
    this.output.innerHTML = text;
  }

  handleChange = (handler) => {
    this.input.addEventListener("keyup", handler);
  }
}