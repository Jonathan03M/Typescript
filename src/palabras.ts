export function contarPalabras(oracionInput: HTMLInputElement, resultadoContadorPalabrasDiv: HTMLElement) {
    const contarPalabrasButton = document.getElementById('contarPalabras');
  
    if (contarPalabrasButton) {
      contarPalabrasButton.addEventListener('click', () => {
        const oracion = oracionInput.value;
        const cantidadPalabras = oracion.trim().split(/\s+/).length;
        resultadoContadorPalabrasDiv.textContent = `Cantidad de palabras: ${cantidadPalabras}`;
      });
    }
  }
  