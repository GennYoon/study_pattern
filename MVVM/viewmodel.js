class VIEWMODEL {
  constructor(model) {
    this.model = model;
  }

  bind = (input, output) => {
    this.model.subscribe(() => { output.innerHTML = this.model.getText(); });
    input.addEventListener("keyup", (event => this.model.setText(event.target.value)));
  }
}