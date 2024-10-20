var numeroElement = document.getElementById('numero');

function increment() {
    var numero = parseInt(numeroElement.textContent); 
    numeroElement.textContent = numero + 1;
}

function decrement() {
    var numero = parseInt(numeroElement.textContent); 
    numeroElement.textContent = numero - 1; 
}
