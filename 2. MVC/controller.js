class CONTROLLER {
  constructor(model, view){
    this.model = model;
    this.view = view;

    // 이벤트 발생 - model내의 text를 변경합니다.
    this.view.input.addEventListener("keyup", event => this.model.setText(event.target.value));
  }
}