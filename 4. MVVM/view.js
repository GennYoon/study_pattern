class VIEW {
  constructor(vm) {
    this.vm = vm;
    this.input = document.getElementById("input");
    this.output = document.getElementById("output");

    this.vm.bind(input, output);
  }
}