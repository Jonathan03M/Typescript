// temperatura.ts

export function convertirTemperatura() {
    const convertirCelsiusButton = document.getElementById('convertirCelsius');
    const convertirFahrenheitButton = document.getElementById('convertirFahrenheit');
    const celsiusInput = <HTMLInputElement>document.getElementById('celsius');
    const fahrenheitInput = <HTMLInputElement>document.getElementById('fahrenheit');
    const resultadoConversionDiv = document.getElementById('resultadoConversion');
  
    if (convertirCelsiusButton && convertirFahrenheitButton && celsiusInput && fahrenheitInput && resultadoConversionDiv) {
        convertirCelsiusButton.addEventListener('click', () => {
          const celsiusValue = parseFloat(celsiusInput.value);
          if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            resultadoConversionDiv.textContent = `${celsiusValue} °C equivalen a ${fahrenheitValue.toFixed(2)} °F`;
          } else {
            resultadoConversionDiv.textContent = 'Ingrese un valor válido en Celsius.';
          }
        });
      
        convertirFahrenheitButton.addEventListener('click', () => {
          const fahrenheitValue = parseFloat(fahrenheitInput.value);
          if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            resultadoConversionDiv.textContent = `${fahrenheitValue} °F equivalen a ${celsiusValue.toFixed(2)} °C`;
          } else {
            resultadoConversionDiv.textContent = 'Ingrese un valor válido en Fahrenheit.';
          }
        });
      }
    
      
      
      
      
      
      
  }
  