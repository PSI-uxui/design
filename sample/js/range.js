export default class DualRangeInput {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.minInput = this.wrapper.querySelector(".minvalue");
      this.maxInput = this.wrapper.querySelector(".maxvalue");
      this.minSlider = this.wrapper.querySelector(".minrange");
      this.maxSlider = this.wrapper.querySelector(".maxrange");
      this.min = parseInt(this.minSlider.min, 10);
      this.max = parseInt(this.minSlider.max, 10);
      this.init();
    }
  
    init() {
      this.minSlider.addEventListener("input", (e) => {
        if (
          parseInt(this.minSlider.value, 10) > parseInt(this.maxSlider.value, 10)
        ) {
          this.maxSlider.value = this.minSlider.value;
          this.maxInput.value = this.minSlider.value;
        }
        this.minInput.value = this.minSlider.value;
      });
  
      this.maxSlider.addEventListener("input", (e) => {
        if (parseInt(this.maxSlider.value) < parseInt(this.minSlider.value)) {
          this.minSlider.value = this.maxSlider.value;
          this.minInput.value = this.maxSlider.value;
        }
        this.maxInput.value = this.maxSlider.value;
      });
  
      this.minSlider.addEventListener("change", () => {
        this.minInput.dispatchEvent(new Event("input"));
      });
  
      this.maxSlider.addEventListener("change", () => {
        this.maxInput.dispatchEvent(new Event("input"));
      });
  
      this.maxInput.addEventListener("input", () => {
        this.maxSlider.value = this.maxInput.value;
      });
  
      this.minInput.addEventListener("input", () => {
        this.minSlider.value = this.minInput.value;
      });
    }
  }
  
  const dualRangeInputs = document.querySelectorAll(".dual-range-input");
  dualRangeInputs.forEach((dualRangeInput) => {
    new DualRangeInput(dualRangeInput);
  });

  

  