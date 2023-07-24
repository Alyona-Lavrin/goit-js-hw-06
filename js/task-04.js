let counterValue = 0;

const buttons = document.querySelectorAll("[data-action]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.action
    if(action === 'decrement') {
        if (counterValue > 0) {
            counterValue --;
        }
    } else {
        counterValue ++;
    }
    document.getElementById('value').innerText = counterValue;
  })
})