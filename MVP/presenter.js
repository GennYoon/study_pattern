class PRESENTER {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    
    this.model.subscribe(() => {
      this.view.render(this.model.getText());
    });

    this.view.handleChange((event) => {
      this.model.setText(event.target.value);
    });
  }
}