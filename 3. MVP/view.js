function MVP_VIEW() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  // 화면을 최신화시켜주는 Render
  this.render = (text) => {
    output.innerHTML = text;
  }

  // 이벤트 선언
  this.handleChange = (handler) => {
    input.addEventListener("keyup", handler);
  }
}