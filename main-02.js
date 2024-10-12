const form = document.getElementById('form-numeros'); //Captura dos Elementos do DOM
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário 

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validação
    if (valorB > valorA) {
        successMessage.innerHTML = `Formulário válido! O número B (${valorB}) é maior que o número A (${valorA}).`;
        successMessage.style.display = 'block';
    } else {
        errorMessage.textContent = 'Formulario inválido! O valor de Campo B  deve ser maior que Campo A.';
        errorMessage.style.display = 'block';
    }

    
    campoA.value = '';
    campoB.value = '';
});


