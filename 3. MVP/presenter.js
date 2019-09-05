function MVP_PRESENTER(_view) {
  this.view = _view;
  this.model;

  // model 설정
  this.setModel = (_model) => {
    this.model = _model;
    view.render(this.model.getText());
  }

  // view에서 설정한 변화를 설정
  this.view.handleChange((event) => {
    this.model.setText(event.target.value);
    view.render(this.model.getText());
  })
}