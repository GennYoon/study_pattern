function MVP_MODEL(text) {
  this.text = text;
  
  // 데이터 불러오기
  this.getText = function() {
    return this.text;
  }

  // 데이터 변경하기
  this.setText = function(text) {
    this.text = text;
  }
}