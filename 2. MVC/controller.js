function MVC_CONTROLLER() {
  const View = new MVC_VIEW();
  const Model = new MVC_MODEL();

  const input = document.getElementById("input");
  // DOM의 변환이 일어나면 데이터를 담고 있는 Model의 변환을 이용하여 값을 변경해줍니다.
  input.addEventListener("keyup", e => {
    Model.handleChange(e.target.value);
    // 변경된 값을 이용하여 화면에 출력하기 위해서 Render를 실행하고 마지막 Model의 text값을 불러와 보내줍니다.
    View.render(Model.getText());
  });
  
  // 초기 값을 위해 1번 Render 실행
  View.render(Model.getText());
}