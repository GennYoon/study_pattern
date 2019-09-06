class VIEW {
  constructor(model) {
    this.model = model;

    this.input = document.getElementById("input");
    this.output = document.getElementById("output");

    // 행동 선언 - 이벤트가 동작하면, output의 innerHTML을 model의 text 값으로 변경하는 행동을 미리 선언합니다.
    this.model.subscribe(() => {
      this.output.innerHTML = this.model.getText();
    });
  }
}