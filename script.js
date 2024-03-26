function converterTemperatura() {
    const tempInput = document.getElementById("tempInput").value.trim();
    const tempUnit = document.getElementById("tempUnit").value;
    let resultado = "";

    // Verifica se o campo de entrada está vazio ou contém letras
    if (tempInput === "" || isNaN(tempInput)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor numérico válido.";
        return;
    }

    // Converte o valor de entrada para um número
    const temperatura = parseFloat(tempInput);

    switch(tempUnit) {
        case "celsius":
            resultado = {
                celsius: temperatura,
                fahrenheit: temperatura * 9/5 + 32,
                kelvin: temperatura + 273.15
            };
            break;
        case "fahrenheit":
            resultado = {
                celsius: (temperatura - 32) * 5/9,
                fahrenheit: temperatura,
                kelvin: (temperatura - 32) * 5/9 + 273.15
            };
            break;
        case "kelvin":
            resultado = {
                celsius: temperatura - 273.15,
                fahrenheit: (temperatura - 273.15) * 9/5 + 32,
                kelvin: temperatura
            };
            break;
    }

    document.getElementById("resultado").innerHTML = `
        Celsius: ${resultado.celsius.toFixed(2)} °C<br>
        Fahrenheit: ${resultado.fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${resultado.kelvin.toFixed(2)} K
    `;
}
