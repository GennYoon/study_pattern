function MVC_VIEW() {
  this.render = function(text) {
    const output = document.getElementById("output");
    output.innerHTML = text;
  }
}