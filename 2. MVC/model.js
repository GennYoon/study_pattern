function MVC_MODEL(value) {
  this.text = value || "";

  this.handleChange = function(text) {
    this.text = text;
    return this.text;
  }

  this.getText = function() {
    return this.text;
  }
}