type Operacion = 'suma' | 'resta' | 'multiplicacion' | 'division';

export function realizarOperacion(numero1: number, numero2: number, operacion: Operacion): number {
  switch (operacion) {
    case 'suma':
      return numero1 + numero2;
    case 'resta':
      return numero1 - numero2;
    case 'multiplicacion':
      return numero1 * numero2;
    case 'division':
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        throw new Error('No se puede dividir por cero');
      }
    default:
      throw new Error('Operación no válida');
  }
}

export function ejecutarCalculadora(resultadoDiv: HTMLElement | null, num1Input: HTMLInputElement | null, num2Input: HTMLInputElement | null, operSelect: HTMLSelectElement | null): void {
  if (num1Input && num2Input && operSelect && resultadoDiv) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const oper = operSelect.value as Operacion;

    try {
      const resultado = realizarOperacion(num1, num2, oper);
      resultadoDiv.textContent = `Resultado: ${resultado}`;
    } catch (error) {
      if (error instanceof Error) {
        resultadoDiv.textContent = error.message;
      } else {
        resultadoDiv.textContent = 'Ocurrió un error desconocido';
      }
    }
  } else {
    console.log('No se encontraron elementos HTML necesarios.');
  }
}
