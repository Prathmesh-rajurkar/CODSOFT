const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const light = document.querySelector(".light");

let currentInput = "";
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (button.id === "equals") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resetNext = true;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    if (resetNext) {
      currentInput = "";
      resetNext = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});

// Move light effect with mouse
document.addEventListener("mousemove", (e) => {
  light.style.left = `${e.clientX}px`;
  light.style.top = `${e.clientY}px`;
});
