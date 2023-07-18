let input = document.getElementById('name-input');
let span = document.getElementById('name-output');

input.addEventListener("keyup", (event) => {
    if(event.currentTarget.value !== '') {
        span.innerText = event.currentTarget.value;
    } else {
        span.innerText = "Anonymous";
    }
})